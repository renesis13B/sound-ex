import { authApi } from './auth'
import axios from 'axios'

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1'
});

export const searchApi = () => ({
  getTrackSearchResult(searchValue: string) {
    const { getToken } = authApi()
    const token = getToken()
    const headers = {
      'Authorization': "Bearer " + token
    }
    return spotifyApi.get(`/search?q=${searchValue}&type=track&market=JP&limit=5`, { headers })
  }
})