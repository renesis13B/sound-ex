type Playlist = Readonly<{
  track: {
    id: string,
    name: string,
    duration_ms: number,
    album: {
      artists: SpotifyApi.ArtistObjectSimplified[]
      images: SpotifyApi.ImageObject[]
    }
  }
}>

export default Playlist