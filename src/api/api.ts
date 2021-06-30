import axios, { AxiosResponse } from "axios"
import { Buffer } from 'buffer';
import { AcsessToken, AcsessTokenId } from '../models/accessToken'

const spotifyAuthorization = axios.create({
  baseURL: 'https://accounts.spotify.com'
});

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1'
});

const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");

export const $api = {
    getAcsessToken():Promise<AxiosResponse<AcsessToken>> {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        'Authorization':
          "Basic " + Buffer.from(`${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`).toString('base64'),
      }
      return spotifyAuthorization.post('/api/token', urlencoded, {headers} )
    },
    getTopPlayLists(accessToken: AcsessTokenId) {
      const headers = {
        'Authorization': "Bearer " + accessToken,
        'Accept-Language': 'ja;q=1'
      }
      const query = '?fields=items(track(id,name,duration_ms,album(images,artists(name))))'
      const limit = 'limit=5'
      return spotifyApi.get(`/playlists/${process.env.NEXT_PUBLIC_SPOTIFY_TOP50_PLAYLIST_ID}/tracks/${query}&${limit}`, { headers })
    },
    getAudioFeaturesForTrack(accessToken: string, query: string) {
      const headers = {
        'Authorization': "Bearer " + accessToken
      }
      return spotifyApi.get(`/audio-features?ids=${query}`, { headers })
    }
}
