import { Track } from '../../models/track'
import { GetAudioFeaturesResponse, SearchItemResponse } from '../baseInteractor'

const searchMapper = (tracks: SearchItemResponse, audioFeatures: GetAudioFeaturesResponse): Track[] => {
  return tracks.data.tracks.items.map((item, index) => {
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