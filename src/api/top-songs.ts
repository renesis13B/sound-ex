import { AcsessTokenId } from '../models/accessToken'
import { getAudioFeature, getAudioFeatures, getPlaylists, getTrack, SpotifyId } from './spotify'

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
