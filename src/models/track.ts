export type Track = Readonly<{
  id: SpotifyApi.TrackObjectSimplified['id']
  trackName: SpotifyApi.TrackObjectSimplified['name']
  albumImage: SpotifyApi.ImageObject['url']
  artistsName: SpotifyApi.ArtistObjectSimplified['name']
  bpm: SpotifyApi.AudioFeaturesObject['tempo']
  key: SpotifyApi.AudioFeaturesObject['key']
  duration: string
}>

