export type Artist = Readonly<{
  id: SpotifyApi.ArtistObjectFull['id']
  image: SpotifyApi.ImageObject['url']
  name: SpotifyApi.ArtistObjectFull['name']
}>