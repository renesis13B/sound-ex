import axios, { AxiosResponse } from "axios"
import { Buffer } from 'buffer';
import { AcsessToken, AcsessTokenId } from '../models/accessToken'
import Cookie from 'universal-cookie'

const cookie = new Cookie()

const spotifyAuthorization = axios.create({
  baseURL: 'https://accounts.spotify.com'
});

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1'
});

const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");

export const $api = {
    // TODO: 認証が失敗したときの例外処理の実装
    // TODO: thenで後続の処理をまとめてしまったほうがいいかもしれない
    getAcsessToken():Promise<AxiosResponse<AcsessToken>> {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        'Authorization':
          "Basic " + Buffer.from(`${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`).toString('base64'),
      }
      return spotifyAuthorization.post('/api/token', urlencoded, {headers} )
    },
    async setAccessToken() {
      if (!cookie.get('access_token')) {
        const acsessToken = await $api.getAcsessToken()
        cookie.set('access_token', acsessToken.data.access_token)
        console.log('set')
      } else {
        console.log('finished')
      }
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
    },
    getSearcResult(query: string) {
      const accessToken = cookie.get('access_token')
      const headers = {
        'Authorization': "Bearer " + accessToken
      }
      return spotifyApi.get(`/search?q=${query}&type=track&market=JP&limit=5`, { headers })
    }
}
