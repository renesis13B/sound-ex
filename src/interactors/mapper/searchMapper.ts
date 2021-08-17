import { TrackSimplified } from '../../models/track'
import { GetAudioFeaturesResponse, GetPlaylistsResponse, SearchItemResponse } from '../api/spotifyInteractor'
import { Playlist } from '../../models/playlist'
import moment from 'moment'

type Items = SpotifyApi.TrackObjectFull[] | Playlist['track'][]
type Item = SpotifyApi.TrackObjectFull | Playlist['track']

const searchMapper = (
  items:  Items,
  audioFeatures: GetAudioFeaturesResponse
): TrackSimplified[] => {
  return items.map((item: Item, index: number) => {
    return {
      id: item.id,
      trackName: item.name,
      albumImage: item.album.images.slice(-1)[0].url,
      artistsName: item.album.artists[0].name,
      bpm: Math.round(audioFeatures.data.audio_features[index].tempo),
      key: audioFeatures.data.audio_features[index].key,
      duration: moment(`${item.duration_ms}`, 'x')
        .format('m:ss'),
    }
  })
}

export default searchMapper