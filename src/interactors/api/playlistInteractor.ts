import searchMapper from '../mapper/searchMapper'
import { getAudioFeatures, getPlaylists } from './spotifyInteractor'

const playlistInteractor = {
  async getPlaylistTracks() {
    const playLists = await getPlaylists()
    const ids = playLists.data.items.map(playList => playList.track.id).join('%2C')
    const audioFeatures = await getAudioFeatures(ids)
    return searchMapper(playLists.data.items.map(item => item.track), audioFeatures.data)
  },
  async getPlaylistIds() {
    const playLists = await getPlaylists()
    return playLists.data.items.map((playList) => ({
      params: {
        id: playList.track.id,
      },
    }))
  }
}

export default playlistInteractor