import { Artist } from './artist'
import { ConvertPitchIntoSymbol } from '../utils/convertPitchIntoSymbol'

export type TrackSimplified = Readonly<{
  // トラックのSpotifyID
  id: SpotifyApi.TrackObjectSimplified['id']
  trackName: SpotifyApi.TrackObjectSimplified['name']
  albumImage: SpotifyApi.ImageObject['url']
  artistsName: SpotifyApi.ArtistObjectSimplified['name']
  bpm: SpotifyApi.AudioFeaturesObject['tempo'] | '-'
  key: ConvertPitchIntoSymbol | '-'
  duration: string
  // トラックのSpotifyリンクURL
  spotify_url: SpotifyApi.TrackObjectSimplified['external_urls']['spotify']
}>

export type Track = TrackSimplified & Readonly<{
  // トラックが属しているアルバムが発売された日付 ex: 1981-12 or 1981-12-15.
  releaseDate: SpotifyApi.TrackObjectFull['album']['release_date']
  // トラックがダンスにどの程度適しているかを示します。0.0の値は最も踊りやすく、1.0は最も踊りやすいです。
  danceability: SpotifyApi.AudioFeaturesObject['danceability']
  // エネルギーは0.0から1.0までの尺度。強度と活動の知覚尺度を表します。
  energy: SpotifyApi.AudioFeaturesObject['energy']
  // トラックの推定全体的な拍子記号
  time_signature: SpotifyApi.AudioFeaturesObject['time_signature']
  // artistsNameから取得した関連アーティストの集まり
  related_artists: Artist[]
}>