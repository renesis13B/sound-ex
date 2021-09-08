import { AcsessToken } from '../../types/accessToken'
import { Buffer } from 'buffer'
import axios from 'axios'
import Cookie, { CookieSetOptions } from 'universal-cookie'
import moment from 'moment'

/**
 * Client Credentials Flow
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
 */
const spotifyAuthorization = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SPOTIFY_ACCOUNTS_END_POINT_URL,
})
const urlencoded = new URLSearchParams()
urlencoded.append('grant_type', 'client_credentials')
const cookie = new Cookie()
const options = {
  path: '/',
  expires: moment(moment().format()).add(30, 'minutes').toDate(),
}

export const getTokenForServer = async (): Promise<AcsessToken['access_token']> => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization':
      'Basic ' + Buffer.from(`${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`).toString('base64'),
  }
  const data = await spotifyAuthorization.post('/api/token', urlencoded, { headers }).then(res => res.data.access_token)
  return data
}

const setAuthToken = async (options: CookieSetOptions) => {
  try {
    console.log('setAuthToken')
    const token = await getTokenForServer()
    cookie.set('access_token', token, options)
    return cookie.get('access_token')
  } catch (error) {
    return error.message
  }
}

export const getToken = () => {
  return cookie.get('access_token') || setAuthToken(options).then(r => r)
}