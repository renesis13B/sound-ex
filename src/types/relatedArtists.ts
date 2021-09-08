export type RelatedArtists = Readonly<{
  id: SpotifyApi.ArtistObjectFull['id']
  image: SpotifyApi.ImageObject['url'] | null
  name: SpotifyApi.ArtistObjectFull['name']
}>