import axios, { AxiosResponse } from 'axios'
import { AcsessToken } from '../models/accessToken'
import { Buffer } from 'buffer'
import Cookie from 'universal-cookie'

const cookie = new Cookie()

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
  setAccessToken() {
    if (!cookie.get('access_token')) {
      getAcsessToken().then(acsessToken => cookie.set('access_token', acsessToken.data.access_token))
    }
  },
})