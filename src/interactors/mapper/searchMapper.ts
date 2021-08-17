import { TrackSimplified } from '../../models/track'
import { Playlist } from '../../models/playlist'
import moment from 'moment'
import { MultipleAudioFeaturesResponse, TrackObjectFull } from '../../models/spotify'

type Items = TrackObjectFull[] | Playlist['track'][]
type Item = TrackObjectFull | Playlist['track']

const searchMapper = (
  items: Items,
  audioFeatures: MultipleAudioFeaturesResponse,
): TrackSimplified[] => {
  console.log(items)
  return items.map((item: Item, index: number) => {
    return {
      id: item.id,
      trackName: item.name,
      albumImage: item.album.images.slice(-1)[0].url,
      artistsName: item.album.artists[0].name,
      bpm: Math.round(audioFeatures.audio_features[index].tempo),
      key: audioFeatures.audio_features[index].key,
      duration: moment(`${item.duration_ms}`, 'x')
        .format('m:ss'),
      spotify_url: item.external_urls.spotify,
    }
  })
}

export default searchMapper