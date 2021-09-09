import { AudioFeature } from './audioFeature'

export type TrackSimplified = Readonly<{
  // トラックのSpotifyID
  id: SpotifyApi.TrackObjectSimplified['id']
  trackName: SpotifyApi.TrackObjectSimplified['name']
  albumImage: SpotifyApi.ImageObject['url']
  artistsName: SpotifyApi.TrackObjectSimplified['artists'][0]['name']
  duration: string
  // トラックのSpotifyリンクURL
  spotify_url: SpotifyApi.TrackObjectSimplified['external_urls']['spotify']
  // トラックが属しているアルバムが発売された日付 ex: 1981-12 or 1981-12-15.
  releaseDate: SpotifyApi.TrackObjectFull['album']['release_date']
  // アーティストSpotifyID
  artists_id: SpotifyApi.TrackObjectSimplified['artists'][0]['id']
}>

export type Track = TrackSimplified & AudioFeature