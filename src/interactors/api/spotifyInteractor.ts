import axios, { AxiosResponse } from 'axios'
import { Playlist } from '../../types/playlists'
import { MultipleAudioFeaturesResponse, SingleTrackResponse, TrackSearchResponse } from '../../types/spotify'
import { Buffer } from 'buffer'
import authInteractor from './authInteractors'
import { AcsessToken } from '../../types/accessToken'

export type GetPlaylistsResponse = AxiosResponse<{ items: Playlist[] }>
export type GetAudioFeaturesResponse = AxiosResponse<MultipleAudioFeaturesResponse>
export type GetAudioFeatureResponse = AxiosResponse<MultipleAudioFeaturesResponse>
export type GetTrackResponse = AxiosResponse<SingleTrackResponse>
export type SearchItemResponse = AxiosResponse<TrackSearchResponse>
export type SearchItemValue = string
export type SearchItemType = 'track' | 'artist'

// Axios Setting
const spotifyAuthorization = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SPOTIFY_ACCOUNTS_END_POINT_URL}`,
})

const spotifyApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SPOTIFY_END_POINT_URL}`,
})

const tryReLogin = async () => {
  return new Promise((resolve) => {
    const newToken = getTokenFromSpotify()
    console.log('tryReLogin')
    resolve(newToken)
  })
}

const handleExpiredTokenRejectedInterceptor = async (error: any) => {
  const { response } = error
  const statusCode = response?.status

  if (statusCode === 401 && !error.config.isRetry) {
    const { config } = error
    return tryReLogin().then((newToken) => {
      const headers = {
        ...config.headers,
        'Authorization': `Bearer ${newToken}`,
      }
      return axios.request({ ...config, headers, isRetry: true })
    })
  }
  return Promise.reject(error)
}

spotifyApi.interceptors.response.use(undefined, handleExpiredTokenRejectedInterceptor)

const urlencoded = new URLSearchParams()
urlencoded.append('grant_type', 'client_credentials')


// Spotify API list
/**
 * Client Credentials Flow
 *
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
 */
export const getTokenFromSpotify = (): Promise<AcsessToken['access_token']> => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization':
      'Basic ' + Buffer.from(`${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`).toString('base64'),
  }
  return spotifyAuthorization.post('/api/token', urlencoded, { headers }).then(res => res.data.access_token)
}

/**
 * Get Audio Features for Several Tracks
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-audio-features
 */
export const getAudioFeatures = async (ids: string, useClientSide?: boolean): Promise<GetAudioFeaturesResponse> => {
  // NOTE: 現状、サーバー or クライアントでtokenの取得方法が異なるので第２引数の有無で分ける
  const token = useClientSide ? await authInteractor.getTokenFromCookie() : await getTokenFromSpotify()
  const headers = {
    'Authorization': 'Bearer ' + token,
  }
  return await spotifyApi.get(`/audio-features?ids=${ids}`, { headers })
}

/**
 * Search for an Item
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-search
 */
export const searchItem = async (searchValue: SearchItemValue, type: SearchItemType, useClientSide?: boolean): Promise<SearchItemResponse> => {
  // NOTE: 現状、サーバー or クライアントでtokenの取得方法が異なるので第２引数の有無で分ける
  const token = useClientSide ? await authInteractor.getTokenFromCookie() : await getTokenFromSpotify()
  const headers = {
    'Authorization': 'Bearer ' + token,
  }
  const limit = type === 'track' ? 10 : type === 'artist' ? 30 : 0
  return spotifyApi.get(`/search?q=${searchValue}&type=track&market=JP&limit=${limit}`, { headers })
}