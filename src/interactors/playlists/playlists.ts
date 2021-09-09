import { baseAxios } from '../baseAxios'
import { PlaylistItemsResponse } from '../../types/spotify'
import playlistsMapper from './playlistsMapper'
import { getToken } from '../auth/auth'

/**
 * Get a Playlist's Items
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlists-tracks
 */
const playlistsFetcher = async () => {
  const token = await getToken()
  const headers = {
    'Authorization': 'Bearer ' + token,
    'Accept-Language': 'ja;q=1',
  }
  const fields = 'items(track(id,name,duration_ms,external_urls(spotify),album(images,release_date,artists(name,id))))'
  const limit = '10'
  const url = `/playlists/${process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID}/tracks/?fields=${fields}&limit=${limit}`
  return await baseAxios.get<PlaylistItemsResponse>(`${url}`, { headers })
}

export const getPlaylists = async () => {
  const { data } = await playlistsFetcher()
  return playlistsMapper(data.items)
}

export const getPlaylistIds = async () => {
  const { data } = await playlistsFetcher()
  return data?.items.map((playList) => ({
    params: {
      id: playList.track.id,
    },
  }))
}