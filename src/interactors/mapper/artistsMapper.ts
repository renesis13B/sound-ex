import { ArtistsRelatedArtistsResponse } from '../../models/spotify'
import { Artist } from '../../models/artist'

type Artists = ArtistsRelatedArtistsResponse

const artistsMapper = (items: Artists): Artist[] => items.artists.map(artist => ({
  id: artist.id,
  name: artist.name,
  image: artist.images[0]?.url,
})).slice(0, 6)


export default artistsMapper