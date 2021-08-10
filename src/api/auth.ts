import axios, { AxiosResponse } from 'axios'
import { AcsessToken } from '../models/accessToken'
import { Buffer } from 'buffer'
import Cookie from 'universal-cookie'

const cookie = new Cookie()
const d = new Date();
d.setTime(d.getTime() + (60*60*1000));
const options = {
  path: "/",
  expires: d
};

const spotifyAuthorization = axios.create({
  baseURL: 'https://accounts.spotify.com'
});

const urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "client_credentials")

/**
 * Client Credentials Flow
 *
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
 */
const getAcsessToken = async (): Promise<AxiosResponse<AcsessToken>> => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    'Authorization':
      "Basic " + Buffer.from(`${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`).toString('base64'),
  }
  return await spotifyAuthorization.post('/api/token', urlencoded, {headers} )
}

export const authApi = () => ({
  getToken() {
    if (cookie.get('access_token')) {
      return cookie.get('access_token')
    } else {
      getAcsessToken().then(token => {
        cookie.set('access_token', token.data.access_token, options)
        return token.data.access_token
      })
    }
  },
  checkToken() {
    if (cookie.get('access_token')) {
      console.log('Tokenがcookieにある')
      console.log(cookie.get('access_token'))
    } else {
      console.log('Tokenがcookieにない')
      console.log(cookie.get('access_token'))
    }
  }
})