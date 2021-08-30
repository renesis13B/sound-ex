import axios, { AxiosResponse } from 'axios'
import { Playlist } from '../../types/playlist'
import {
  MultipleAudioFeaturesResponse,
  SingleTrackResponse,
  SpotifyId,
  TrackSearchResponse,
} from '../../types/spotify'
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
 * Get a Playlist's Items
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlists-tracks
 */
export const getPlaylists = async (): Promise<GetPlaylistsResponse> => {
  // NOTE: 現状、サーバー側でのみ使用するのでtokenを直接取得
  // TODO: ISRのたびにtoken取得しているので直したい
  const token = await getTokenFromSpotify()
  const headers = {
    'Authorization': 'Bearer ' + token,
    'Accept-Language': 'ja;q=1',
  }
  const fields = 'items(track(id,name,duration_ms,external_urls(spotify),album(images,artists(name))))'
  const limit = 'limit=20'
  return await spotifyApi.get(`/playlists/${process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID}/tracks/?fields=${fields}&${limit}`, { headers })
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
 * Get Audio Features for a Track
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-audio-features
 */
export const getAudioFeature = async (spotifyId: SpotifyId): Promise<GetAudioFeatureResponse> => {
  // NOTE: 現状、サーバー側でのみ使用するのでtokenを直接取得
  // TODO: ISRのたびにtoken取得しているので直したい
  const token = await getTokenFromSpotify()
  const headers = {
    'Authorization': 'Bearer ' + token,
  }
  return await spotifyApi.get(`/audio-features?ids=${spotifyId}`, { headers })
}

/**
 * Get a Track
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-track
 */
export const getTrack = async (spotifyId: SpotifyId): Promise<GetTrackResponse> => {
  // NOTE: 現状、サーバー側でのみ使用するのでtokenを直接取得
  // TODO: ISRのたびにtoken取得しているので直したい
  const token = await getTokenFromSpotify()
  const headers = {
    'Authorization': 'Bearer ' + token,
  }
  return await spotifyApi.get(`/tracks/${spotifyId}?market=JP`, { headers })
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

/**
 * Get an Artist's Related Artists
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-related-artists
 */
export const getRelatedArtists = async (spotifyId: SpotifyId) => {
  const token = await authInteractor.getTokenFromCookie()
  const headers = {
    'Authorization': 'Bearer ' + token,
  }
  return spotifyApi.get(`/artists/${spotifyId}/related-artists`, { headers })
}