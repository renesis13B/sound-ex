import { authApi } from './auth'
import axios from 'axios'
import { getAudioFeature, getAudioFeatures, getTrack, searchItem, SpotifyId } from './spotify'
import { BaseRouter } from 'next/dist/next-server/lib/router/router'

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1'
});

export const searchApi = () => ({
  async getTracks(searchValue: any) {
    const res = await searchItem(searchValue)
    const trackIds = res.data.tracks.items.map(track => track.id).join('%2C')
    const audioFeatures = await getAudioFeatures(trackIds)
    return res.data.tracks.items.map((item, index) => {
      const sec = item.duration_ms / 1000
      return {
        id: item.id,
        trackName: item.name,
        albumImage: item.album.images.slice(-1)[0].url,
        artistsName: item.album.artists[0].name,
        bpm: Math.round(audioFeatures.data.audio_features[index].tempo),
        key: audioFeatures.data.audio_features[index].key,
        duration: `${Math.floor(sec / 60)}:${Math.floor(sec % 60)}`
      }
    })
  },
  async getTrackData(spotifyId: any) {
    const audioFeature = await getAudioFeature(spotifyId)
    const track = await getTrack(spotifyId)
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