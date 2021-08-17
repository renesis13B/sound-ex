export type Playlist = Readonly<{
  track: {
    id: SpotifyApi.TrackObjectSimplified['id'],
    name: SpotifyApi.TrackObjectSimplified['name'],
    duration_ms: SpotifyApi.TrackObjectSimplified['duration_ms'],
    external_urls: {
      spotify: SpotifyApi.TrackObjectSimplified['external_urls']['spotify']
    },
    album: {
      artists: SpotifyApi.ArtistObjectSimplified[]
      images: SpotifyApi.ImageObject[]
    }
  }
}>