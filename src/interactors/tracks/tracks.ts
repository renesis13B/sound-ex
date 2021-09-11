import { SingleTrackResponse, SpotifyId } from '../../types/spotify'
import { baseAxios } from '../baseAxios'
import tracksMapper from './tracksMapper'
import { getToken } from '../auth/auth'


export const getTracks = async (spotifyId: SpotifyId) => {
  const token = await getToken()
  const headers = {
    'Authorization': 'Bearer ' + token,
    'Accept-Language': 'ja;q=1',
  }
  const url = `/tracks/${spotifyId}?market=JP`
  const { data } = await baseAxios.get<SingleTrackResponse>(`${url}`, { headers })
  return tracksMapper(data)
}