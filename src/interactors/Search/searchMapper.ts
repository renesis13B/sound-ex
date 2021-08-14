import { Track } from '../../models/track'
import { GetAudioFeaturesResponse, GetPlaylistsResponse, SearchItemResponse } from '../baseInteractor'
import Playlist from '../../models/playlist'

type Items = SpotifyApi.TrackObjectFull[] | Playlist['track'][]
type Item = SpotifyApi.TrackObjectFull | Playlist['track']

const searchMapper = (
  items:  Items,
  audioFeatures: GetAudioFeaturesResponse
): Track[] => {
  return items.map((item: Item, index: number) => {
    const sec = item.duration_ms / 1000
    return {
      id: item.id,
      trackName: item.name,
      albumImage: item.album.images.slice(-1)[0].url,
      artistsName: item.album.artists[0].name,
      bpm: Math.round(audioFeatures.data.audio_features[index].tempo),
      key: audioFeatures.data.audio_features[index].key,
      duration: `${Math.floor(sec / 60)}:${Math.floor(sec % 60)}`
    }
  })
}

export default searchMapper