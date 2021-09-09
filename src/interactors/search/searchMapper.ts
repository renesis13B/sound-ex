import { TrackSearchResponse } from '../../types/spotify'
import moment from 'moment'
import { SearchList } from '../../types/searchList'

const searchMapper = (items: TrackSearchResponse): SearchList => {
  return items.tracks.items.map(item => ({
    id: item.id,
    trackName: item.name,
    albumImage: item.album.images.slice(-1)[0].url,
    artistsName: item.album.artists[0].name,
    duration: moment(`${item.duration_ms}`, 'x').format('m:ss'),
    spotify_url: item.external_urls.spotify,
  }))
}

export default searchMapper