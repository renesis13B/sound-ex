import { ArtistsRelatedArtistsResponse, SpotifyId } from '../../types/spotify'
import { baseAxios } from '../baseAxios'
import artistsMapper from './artistsMapper'
import { getToken } from '../auth/auth'

/**
 * Get an Artist’s Related Artists
 *
 * GET /v1/artists/{id}/related-artists
 * https://developer.spotify.com/web-api/get-related-artists/
 */
export const getRelatedArtists = async (spotifyId: SpotifyId) => {
  const token = await getToken()
  const headers = {
    'Authorization': 'Bearer ' + token,
    'Accept-Language': 'ja;q=1',
  }
  const url = `/artists/${spotifyId}/related-artists`
  const { data } = await baseAxios.get<ArtistsRelatedArtistsResponse>(`${url}`, { headers })
  return artistsMapper(data)
}