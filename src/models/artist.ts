export type ArtistId = string

export type Artist = Readonly<{
  external_urls: {
    spotify: string
  }
  href: string
  id: ArtistId
  name: string
  type: string
  uri: string
}>
