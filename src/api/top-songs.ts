import axios, { AxiosResponse } from 'axios'
import { AcsessTokenId } from '../models/accessToken'

type Playlist = {
  track: {
    id: string,
    name: string,
    duration_ms: number,
    album: {
      artists: SpotifyApi.ArtistObjectSimplified[]
      images: SpotifyApi.ImageObject[]
    }
  }
}

type GetPlaylistsResponse = {
  items: Playlist[]
}

type GetAudioFeaturesResponse = SpotifyApi.MultipleAudioFeaturesResponse

type GetAudioFeatureResponse = SpotifyApi.MultipleAudioFeaturesResponse

type GetTrackResponse = SpotifyApi.SingleTrackResponse

type SpotifyId = string

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1'
});

/**
 * Get a Playlist's Items
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlists-tracks
 */
const getPlaylists = async (accessToken: AcsessTokenId): Promise<AxiosResponse<GetPlaylistsResponse>> => {
  const headers = {
    'Authorization': "Bearer " + accessToken,
    'Accept-Language': 'ja;q=1'
  }
  const fields = 'items(track(id,name,duration_ms,album(images,artists(name))))'
  const limit = 'limit=5'
  return await spotifyApi.get(`/playlists/${process.env.NEXT_PUBLIC_SPOTIFY_TOP50_PLAYLIST_ID}/tracks/?fields=${fields}&${limit}`, { headers })
}

/**
 * Get Audio Features for Several Tracks
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-audio-features
 */
const getAudioFeatures = async (accessToken: AcsessTokenId, ids: string): Promise<AxiosResponse<GetAudioFeaturesResponse>> => {
  const headers = {
    'Authorization': "Bearer " + accessToken
  }
  return await spotifyApi.get(`/audio-features?ids=${ids}`, { headers })
}

/**
 * Get Audio Features for a Track
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-audio-features
 */
const getAudioFeature = async (accessToken: AcsessTokenId, spotifyId: SpotifyId): Promise<AxiosResponse<GetAudioFeatureResponse>> => {
  const headers = {
    'Authorization': "Bearer " + accessToken
  }
  return await spotifyApi.get(`/audio-features?ids=${spotifyId}`, { headers })
}

/**
 * Get a Track
 *
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-track
 */
const getTrack = async (accessToken: AcsessTokenId, spotifyId: SpotifyId): Promise<AxiosResponse<GetTrackResponse>> => {
  const headers = {
    'Authorization': "Bearer " + accessToken
  }
  return await spotifyApi.get(`/tracks/${spotifyId}?market=JP`, { headers })
}

export const topSongsApi = () => ({
  async getTopSongsIndex (accessToken: AcsessTokenId) {
    const playLists = await getPlaylists(accessToken)
    const ids = playLists.data.items.map(playList => playList.track.id).join('%2C')
    const audioFeatures = await getAudioFeatures(accessToken, ids)
    return playLists.data.items.map((item, index) => {
      const sec = item.track.duration_ms / 1000
      return {
        id: item.track.id,
        trackName: item.track.name,
        albumImage: item.track.album.images.slice(-1)[0].url,
        artistsName: item.track.album.artists[0].name,
        bpm: Math.round(audioFeatures.data.audio_features[index].tempo),
        key: audioFeatures.data.audio_features[index].key,
        duration: `${Math.floor(sec / 60)}:${Math.floor(sec % 60)}`
      }
    })
  },
  async getTopSongsIds(accessToken: AcsessTokenId) {
    const playLists = await getPlaylists(accessToken)
    return playLists.data.items.map((playList) => {
      return {
        params: {
          id: playList.track.id
        }
      }
    })
  },
  async getTopSongData(accessToken: AcsessTokenId, spotifyId: SpotifyId) {
    const audioFeature = await getAudioFeature(accessToken, spotifyId)
    const track = await getTrack(accessToken, spotifyId)
    const sec = audioFeature.data.audio_features[0].duration_ms / 1000
    return {
      id: track.data.id,
      trackName: track.data.name,
      albumImage: track.data.album.images[0].url,
      artistsName: track.data.artists[0].name,
      releaseDate: track.data.album.release_date,
      spotifyUrl: track.data.external_urls.spotify,
      danceability: audioFeature.data.audio_features[0].danceability,
      energy: audioFeature.data.audio_features[0].energy,
      duration: `${Math.floor(sec / 60)}:${Math.floor(sec % 60)}`,
      time_signature: audioFeature.data.audio_features[0].time_signature,
      key: audioFeature.data.audio_features[0].key,
      bpm: Math.round(audioFeature.data.audio_features[0].tempo)
    }
  }
})
