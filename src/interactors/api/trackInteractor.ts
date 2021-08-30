import { SpotifyId } from '../../types/spotify'
import { getAudioFeature, getRelatedArtists, getTrack } from './spotifyInteractor'
import trackMapper from '../mapper/trackMapper'

const trackInteractor = {
  async getTrack(spotifyId: SpotifyId) {
    const track = await getTrack(spotifyId)
    const audioFeature = await getAudioFeature(spotifyId)
    const artists = await getRelatedArtists(track.data.artists[0].id)
    console.log(artists.data.artists[2])
    return trackMapper(track.data, audioFeature.data, artists.data)
  },
}

export default trackInteractor