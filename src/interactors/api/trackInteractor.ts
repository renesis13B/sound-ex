import { $api } from '../../api/api'
import { SpotifyId } from './spotifyInteractor'
import { getAudioFeature, getTrack } from '../../api/spotify'
import trackMapper from '../mapper/trackMapper'

const trackInteractor = {
  async getTrack(spotifyId: SpotifyId) {
    const token = await $api.getAcsessToken()
    const track = await getTrack(spotifyId, token.data.access_token)
    const audioFeature = await getAudioFeature(spotifyId, token.data.access_token)
    return trackMapper(track.data, audioFeature.data)
  }
}

export default trackInteractor