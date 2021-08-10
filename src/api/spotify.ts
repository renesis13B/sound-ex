import axios, { AxiosResponse } from 'axios'
import { AcsessTokenId } from '../models/accessToken'

type Playlist = {
  track: {
    id: string,
    name: string,
    duration_ms: number,
    album: {
      artists: SpotifyApi.ArtistObjectSimplified[]
      images: SpotifyApi.ImageObject[]
    }
  }
}

type GetPlaylistsResponse = {
  items: Playlist[]
}

type GetAudioFeaturesResponse = SpotifyApi.MultipleAudioFeaturesResponse

type GetAudioFeatureResponse = SpotifyApi.MultipleAudioFeaturesResponse

type GetTrackResponse = SpotifyApi.SingleTrackResponse

export type SpotifyId = SpotifyApi.TrackObjectSimplified['id']

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1'
});

/**
 * Get a Playlist's Items
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlists-tracks
 */
export const getPlaylists = async (accessToken: AcsessTokenId): Promise<AxiosResponse<GetPlaylistsResponse>> => {
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
export const getAudioFeatures = async (accessToken: AcsessTokenId, ids: string): Promise<AxiosResponse<GetAudioFeaturesResponse>> => {
  const headers = {
    'Authorization': "Bearer " + accessToken
  }
  return await spotifyApi.get(`/audio-features?ids=${ids}`, { headers })
}

/**
 * Get Audio Features for a Track
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-audio-features
 */
export const getAudioFeature = async (accessToken: AcsessTokenId, spotifyId: SpotifyId): Promise<AxiosResponse<GetAudioFeatureResponse>> => {
  const headers = {
    'Authorization': "Bearer " + accessToken
  }
  return await spotifyApi.get(`/audio-features?ids=${spotifyId}`, { headers })
}

/**
 * Get a Track
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-track
 */
export const getTrack = async (accessToken: AcsessTokenId, spotifyId: SpotifyId): Promise<AxiosResponse<GetTrackResponse>> => {
  const headers = {
    'Authorization': "Bearer " + accessToken
  }
  return await spotifyApi.get(`/tracks/${spotifyId}?market=JP`, { headers })
}