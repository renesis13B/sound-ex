import { RelatedArtists } from '../../types/relatedArtists'
import { ArtistsRelatedArtistsResponse } from '../../types/spotify'

// NOTE: デフォルトで20件取得できるのでsliceで6件にする
const artistsMapper = (items: ArtistsRelatedArtistsResponse): RelatedArtists[] =>
  items.artists.map(artist =>
    ({
      id: artist.id,
      name: artist.name,
      image: artist.images.length ? artist.images.slice(-2, -1)[0].url : '/noImage.jpg',
    }),
  ).slice(0, 6)


export default artistsMapper