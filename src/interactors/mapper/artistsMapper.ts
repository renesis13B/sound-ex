import { ArtistsRelatedArtistsResponse } from '../../models/spotify'
import { Artist } from '../../models/artist'

type Artists = ArtistsRelatedArtistsResponse

const artistsMapper = (items: Artists): Artist[] => items.artists.map(artist => ({
  id: artist.id,
  name: artist.name,
  image: artist.images.length ? artist.images[0].url : null,
})).slice(0, 6)


export default artistsMapper