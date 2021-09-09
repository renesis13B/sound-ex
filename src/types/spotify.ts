// Spotify Id
export type SpotifyId = SpotifyApi.TrackObjectSimplified['id']

// Spotify API Response
export type SingleTrackResponse = SpotifyApi.SingleTrackResponse
export type AudioFeaturesResponse = SpotifyApi.AudioFeaturesObject
export type MultipleAudioFeaturesResponse = SpotifyApi.MultipleAudioFeaturesResponse
export type TrackSearchResponse = SpotifyApi.TrackSearchResponse
export type ArtistsRelatedArtistsResponse = SpotifyApi.ArtistsRelatedArtistsResponse
export type PlaylistItem = {
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
}
export type PlaylistItemsResponse = { items: PlaylistItem[] }

// Spotify Object
export type TrackObjectFull = SpotifyApi.TrackObjectFull
export type KeyOfAudioFeatures = SpotifyApi.AudioFeaturesObject['key']
