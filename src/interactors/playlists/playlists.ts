import { baseAxios } from '../baseAxios'

/**
 * Get a Playlist's Items
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlists-tracks
 */
export const getPlaylists = async () => {
  const fields = 'items(track(id,name,duration_ms,external_urls(spotify),album(images,artists(name))))'
  const limit = '10'
  const { data } = await baseAxios.get(`/playlists/${process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID}/tracks/?fields=${fields}&limit=${limit}`)
  return data
}