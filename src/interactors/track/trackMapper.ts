import { SingleTrackResponse } from '../../types/spotify'
import moment from 'moment'

const trackMapper = (item: SingleTrackResponse) => {
  return {
    id: item.id,
    trackName: item.name,
    albumImage: item.album.images[0].url,
    artistsName: item.artists[0].name,
    releaseDate: item.album.release_date,
    duration: moment(`${item.duration_ms}`, 'x').format('m:ss'),
    spotify_url: item.external_urls.spotify,
    artists_id: item.artists[0].id,
  }
}

export default trackMapper