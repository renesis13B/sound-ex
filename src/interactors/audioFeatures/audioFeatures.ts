import { baseAxios } from '../baseAxios'
import { AudioFeaturesResponse, MultipleAudioFeaturesResponse, SpotifyId } from '../../types/spotify'
import audioFeaturesMapper from './audioFeaturesMapper'
import { getToken } from '../auth/auth'

/**
 * Get audio features for several tracks
 *
 * GET /v1/audio-features?ids={ids}
 * https://developer.spotify.com/get-several-audio-features/
 */
export const getMultipleAudioFeatures = async (ids: string) => {
  const token = await getToken()
  const headers = {
    'Authorization': 'Bearer ' + token,
    'Accept-Language': 'ja;q=1',
  }
  const { data } = await baseAxios.get<MultipleAudioFeaturesResponse>(`/audio-features?ids=${ids}`, { headers })
  return data.audio_features.map(item => audioFeaturesMapper(item))
}

/**
 * Get audio features for a tracks
 *
 * GET /v1/audio-features/{id}
 * https://developer.spotify.com/web-api/get-audio-features/
 */
export const getSingleAudioFeature = async (spotifyId: SpotifyId) => {
  const token = await getToken()
  const headers = {
    'Authorization': 'Bearer ' + token,
  }
  const { data } = await baseAxios.get<AudioFeaturesResponse>(`/audio-features/${spotifyId}`, { headers })
  return audioFeaturesMapper(data)
}