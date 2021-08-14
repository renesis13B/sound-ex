import { getAudioFeatures, getPlaylists } from '../../api/spotify'
import { AcsessTokenId } from '../../models/accessToken'
import searchMapper from './searchMapper'
import { $api } from '../../api/api'

const playlistInteractor = {
  async get() {
    const token = await $api.getAcsessToken()
    const playLists = await getPlaylists(token.data.access_token)
    const ids = playLists.data.items.map(playList => playList.track.id).join('%2C')
    const audioFeatures = await getAudioFeatures(ids, token.data.access_token)
    return searchMapper(playLists.data.items.map(item => item.track), audioFeatures)
  }
}

export default playlistInteractor