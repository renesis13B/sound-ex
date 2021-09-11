import { getToken } from '../auth/auth'
import { baseAxios } from '../baseAxios'
import { TrackSearchResponse } from '../../types/spotify'
import searchMapper from './searchMapper'
import { getMultipleAudioFeatures } from '../audioFeatures/audioFeatures'
import integrateToTracks from '../../utils/integrateToTracks'

/**
 * Search for an Item
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-search
 */
export const getSearchedTracks = async (searchQuery: string, typeQuery: string, pageParam: string) => {
  const token = await getToken()
  const headers = {
    'Authorization': 'Bearer ' + token,
    'Accept-Language': 'ja;q=1',
  }
  const url = `/search?q=${searchQuery}&type=track&market=JP&limit=10`
  const { data } = await baseAxios.get<TrackSearchResponse>(`${pageParam ? pageParam : url}`, { headers })
  const searchedTracks = searchMapper(data)
  const trackIds = searchedTracks.map(track => track.id).join('%2C')
  const audioFeatures = await getMultipleAudioFeatures(trackIds)
  return { tracks: integrateToTracks(searchedTracks, audioFeatures), next: data.tracks.next }

}