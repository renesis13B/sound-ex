import { Track, TrackSimplified } from '../types/track'
import { AudioFeature } from '../types/audioFeature'

const integrateToTracks = (tracksSimplified: TrackSimplified[], audioFeatures: AudioFeature[]): Track[] => {
  return tracksSimplified.map((trackSimplified, index) => ({
    ...trackSimplified, ...audioFeatures[index],
  }))
}

export default integrateToTracks