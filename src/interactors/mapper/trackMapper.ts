import { MultipleAudioFeaturesResponse, SingleTrackResponse } from '../../models/spotify'
import { Track } from '../../models/track'

const trackMapper = (
  track: SingleTrackResponse,
  audioFeatures: MultipleAudioFeaturesResponse
): Track => {
  const sec = audioFeatures.audio_features[0].duration_ms / 1000
  return {
    id: track.id,
    trackName: track.name,
    albumImage: track.album.images[0].url,
    artistsName: track.artists[0].name,
    releaseDate: track.album.release_date,
    danceability: audioFeatures.audio_features[0].danceability,
    energy: audioFeatures.audio_features[0].energy,
    duration: `${Math.floor(sec / 60)}:${Math.floor(sec % 60)}`,
    time_signature: audioFeatures.audio_features[0].time_signature,
    key: audioFeatures.audio_features[0].key,
    bpm: Math.round(audioFeatures.audio_features[0].tempo)
  }
}

export default trackMapper