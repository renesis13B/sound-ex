import { PlaylistItemsResponse } from '../../types/spotify'
import moment from 'moment'
import { Playlists } from '../../types/playlists'

const playlistsMapper = (items: PlaylistItemsResponse['items']): Playlists => {
  return items.map(item => ({
    id: item.track.id,
    trackName: item.track.name,
    albumImage: item.track.album.images.slice(-1)[0].url,
    artistsName: item.track.album.artists[0].name,
    duration: moment(`${item.track.duration_ms}`, 'x').format('m:ss'),
    spotify_url: item.track.external_urls.spotify,
  }))
}

export default playlistsMapper