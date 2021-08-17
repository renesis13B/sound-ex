import { MultipleAudioFeaturesResponse, SingleTrackResponse } from '../../models/spotify'
import { Track } from '../../models/track'
import moment from 'moment'


const trackMapper = (
  track: SingleTrackResponse,
  audioFeatures: MultipleAudioFeaturesResponse,
): Track => {
  console.log()
  return {
    id: track.id,
    trackName: track.name,
    albumImage: track.album.images[0].url,
    artistsName: track.artists[0].name,
    releaseDate: track.album.release_date,
    danceability: audioFeatures.audio_features[0].danceability,
    energy: audioFeatures.audio_features[0].energy,
    duration: moment(`${audioFeatures.audio_features[0].duration_ms}`, 'x')
      .format('m:ss'),
    time_signature: audioFeatures.audio_features[0].time_signature,
    key: audioFeatures.audio_features[0].key,
    bpm: Math.round(audioFeatures.audio_features[0].tempo),
    spotify_url: track.external_urls.spotify,
  }
}

export default trackMapper