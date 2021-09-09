import { SingleTrackResponse, SpotifyId } from '../../types/spotify'
import { getTokenFromSpotify } from '../api/spotifyInteractor'
import { baseAxios } from '../baseAxios'
import trackMapper from './trackMapper'


export const getTrack = async (spotifyId: SpotifyId) => {
  const token = await getTokenFromSpotify()
  const headers = {
    'Authorization': 'Bearer ' + token,
  }
  const url = `/tracks/${spotifyId}?market=JP`
  const { data } = await baseAxios.get<SingleTrackResponse>(`${url}`, { headers })
  return trackMapper(data)
}