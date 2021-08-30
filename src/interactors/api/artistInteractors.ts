import { getRelatedArtists } from './spotifyInteractor'
import { SpotifyId } from '../../types/spotify'
import artistsMapper from '../mapper/artistsMapper'

const artistInteractor = {
  async getRelatedArtists(spotifyId: SpotifyId) {
    const artists = await getRelatedArtists(spotifyId)
    // console.log(artists.data)
    return artistsMapper(artists.data)
  },
}

export default artistInteractor