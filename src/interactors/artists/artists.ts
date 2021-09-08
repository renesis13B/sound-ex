import { ArtistsRelatedArtistsResponse, SpotifyId } from '../../types/spotify'
import { baseAxios } from '../baseAxios'
import artistsMapper from './artistsMapper'

/**
 * Get an Artist’s Related Artists
 *
 * GET /v1/artists/{id}/related-artists
 * https://developer.spotify.com/web-api/get-related-artists/
 */
export const getRelatedArtists = async (spotifyId: SpotifyId) => {
  const { data } = await baseAxios.get<ArtistsRelatedArtistsResponse>(`/artists/${spotifyId}/related-artists`)
  return artistsMapper(data)
}