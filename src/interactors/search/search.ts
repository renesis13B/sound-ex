import { getToken } from '../auth/auth'
import { baseAxios } from '../baseAxios'
import { TrackSearchResponse } from '../../types/spotify'
import searchMapper from './searchMapper'

/**
 * Search for an Item
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-search
 */
export const getSearchedTracks = async (searchQuery: string, typeQuery: string) => {
  const token = await getToken()
  const headers = {
    'Authorization': 'Bearer ' + token,
    'Accept-Language': 'ja;q=1',
  }
  const limit = typeQuery === 'track' ? 10 : typeQuery === 'artist' ? 30 : 0
  const url = `/search?q=${searchQuery}&type=track&market=JP&limit=${limit}`
  const { data } = await baseAxios.get<TrackSearchResponse>(`${url}`, { headers })
  return searchMapper(data)
}