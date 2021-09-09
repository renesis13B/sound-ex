import { AudioFeaturesResponse } from '../../types/spotify'
import { convertPitchIntoSymbol } from '../../utils/convertPitchIntoSymbol'
import { AudioFeature } from '../../types/audioFeature'

const audioFeaturesMapper = (item: AudioFeaturesResponse): AudioFeature => {
  return {
    bpm: item.tempo ? Math.round(item.tempo) : '-',
    key: item.key ? convertPitchIntoSymbol(item.key) : '-',
    danceability: item.danceability,
    energy: item.energy,
    time_signature: item.time_signature,
  }
}

export default audioFeaturesMapper