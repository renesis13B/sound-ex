import { ArtistsRelatedArtistsResponse } from '../../types/spotify'
import { Artist } from '../../types/relatedArtists'

type Artists = ArtistsRelatedArtistsResponse

const artistsMapper = (items: Artists): Artist[] => items.artists.map(artist => ({
  id: artist.id,
  name: artist.name,
  image: artist.images.length ? artist.images.slice(-2, -1)[0].url : null,
})).slice(0, 6)


export default artistsMapper