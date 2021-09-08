// Spotify Id
import { Playlist } from './playlist'

export type SpotifyId = SpotifyApi.TrackObjectSimplified['id']

// Spotify API Response
export type SingleTrackResponse = SpotifyApi.SingleTrackResponse
export type MultipleAudioFeaturesResponse = SpotifyApi.MultipleAudioFeaturesResponse
export type TrackSearchResponse = SpotifyApi.TrackSearchResponse
export type ArtistsRelatedArtistsResponse = SpotifyApi.ArtistsRelatedArtistsResponse
export type GetPlaylistsResponse = { items: Playlist[] }

// Spotify Object
export type TrackObjectFull = SpotifyApi.TrackObjectFull
export type KeyOfAudioFeatures = SpotifyApi.AudioFeaturesObject['key']
