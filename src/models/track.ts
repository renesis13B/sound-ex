export type TrackSimplified = Readonly<{
  id: SpotifyApi.TrackObjectSimplified['id']
  trackName: SpotifyApi.TrackObjectSimplified['name']
  albumImage: SpotifyApi.ImageObject['url']
  artistsName: SpotifyApi.ArtistObjectSimplified['name']
  bpm: SpotifyApi.AudioFeaturesObject['tempo']
  key: SpotifyApi.AudioFeaturesObject['key']
  duration: string
}>

export type Track = TrackSimplified & Readonly<{
  releaseDate: SpotifyApi.TrackObjectFull['album']['release_date']
  danceability: SpotifyApi.AudioFeaturesObject['danceability']
  energy: SpotifyApi.AudioFeaturesObject['energy']
  time_signature: SpotifyApi.AudioFeaturesObject['time_signature']
}>