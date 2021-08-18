import { SpotifyId } from '../../models/spotify'
import { getAudioFeature, getTrack } from './spotifyInteractor'
import trackMapper from '../mapper/trackMapper'

const trackInteractor = {
  async getTrack(spotifyId: SpotifyId) {
    const track = await getTrack(spotifyId)
    const audioFeature = await getAudioFeature(spotifyId)
    return trackMapper(track.data, audioFeature.data)
  },
}

export default trackInteractor