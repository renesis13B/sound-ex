import axios, { AxiosResponse } from 'axios'
import { AcsessTokenId } from '../models/accessToken'
import { authApi } from '../api/auth'
import Playlist from '../models/playlist'

export type GetPlaylistsResponse = AxiosResponse<{ items: Playlist[] }>
export type GetAudioFeaturesResponse = AxiosResponse<SpotifyApi.MultipleAudioFeaturesResponse>
export type GetAudioFeatureResponse = AxiosResponse<SpotifyApi.MultipleAudioFeaturesResponse>
export type GetTrackResponse = AxiosResponse<SpotifyApi.SingleTrackResponse>
export type SearchItemResponse = AxiosResponse<SpotifyApi.TrackSearchResponse>


export type SpotifyId = SpotifyApi.TrackObjectSimplified['id']

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1'
});

/**
 * Get a Playlist's Items
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlists-tracks
 */
export const getPlaylists = async (accessToken: AcsessTokenId): Promise<GetPlaylistsResponse> => {
  const headers = {
    'Authorization': "Bearer " + accessToken,
    'Accept-Language': 'ja;q=1'
  }
  const fields = 'items(track(id,name,duration_ms,album(images,artists(name))))'
  const limit = 'limit=5'
  return await spotifyApi.get(`/playlists/${process.env.NEXT_PUBLIC_SPOTIFY_TOP50_PLAYLIST_ID}/tracks/?fields=${fields}&${limit}`, { headers })
}

/**
 * Get Audio Features for Several Tracks
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-audio-features
 */
export const getAudioFeatures = async (ids: string, accessToken?: AcsessTokenId): Promise<GetAudioFeaturesResponse> => {
  const { getToken } = authApi()
  const token = accessToken ? accessToken : getToken()
  const headers = {
    'Authorization': "Bearer " + token
  }
  return await spotifyApi.get(`/audio-features?ids=${ids}`, { headers })
}

/**
 * Get Audio Features for a Track
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-audio-features
 */
export const getAudioFeature = async (spotifyId: SpotifyId, accessToken?: AcsessTokenId, ): Promise<GetAudioFeatureResponse> => {
  const { getToken } = authApi()
  const token = accessToken ? accessToken : getToken()
  const headers = {
    'Authorization': "Bearer " + token
  }
  return await spotifyApi.get(`/audio-features?ids=${spotifyId}`, { headers })
}

/**
 * Get a Track
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-track
 */
export const getTrack = async (spotifyId: SpotifyId, accessToken?: AcsessTokenId): Promise<GetTrackResponse> => {
  const { getToken } = authApi()
  const token = accessToken ? accessToken : getToken()
  const headers = {
    'Authorization': "Bearer " + token
  }
  return await spotifyApi.get(`/tracks/${spotifyId}?market=JP`, { headers })
}

/**
 * Search for an Item
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-search
 */
export const searchItem = async (searchValue: any): Promise<SearchItemResponse> => {
  const { getToken } = authApi()
  const token = getToken()
  console.log(token)
  const headers = {
    'Authorization': "Bearer " + token
  }
  return spotifyApi.get(`/search?q=${searchValue}&type=track&market=JP&limit=5`, { headers })
}