import { TrackSimplified } from './track'

export type Playlists = Readonly<Omit<TrackSimplified, 'bpm' | 'key'>>[]