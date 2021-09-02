import { TrackSimplified } from '../../types/track'
import { Playlist } from '../../types/playlist'
import moment from 'moment'
import { MultipleAudioFeaturesResponse, TrackObjectFull } from '../../types/spotify'
import { convertPitchIntoSymbol } from '../../utils/convertPitchIntoSymbol'


type Items = TrackObjectFull[] | Playlist['track'][]
type Item = TrackObjectFull | Playlist['track']

const searchMapper = (
  items: Items,
  audioFeatures: MultipleAudioFeaturesResponse,
): TrackSimplified[] => items.map((item: Item, index: number) => ({
    id: item.id,
    trackName: item.name,
    albumImage: item.album.images[1].url,
    artistsName: item.album.artists[0].name,
    bpm: audioFeatures.audio_features[index]?.tempo ? Math.round(audioFeatures.audio_features[index].tempo) : '-',
    key: audioFeatures.audio_features[index]?.key ? convertPitchIntoSymbol(audioFeatures.audio_features[index].key) : '-',
    duration: moment(`${item.duration_ms}`, 'x')
      .format('m:ss'),
    spotify_url: item.external_urls.spotify,
  }
))

export default searchMapper