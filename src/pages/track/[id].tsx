import { GetStaticPaths, GetStaticProps } from 'next'
import { VFC } from 'react'
import EnhancedTrackContent from '../../components/organisms/containers/TrackContent'
import { Track } from '../../types/track'
import { getRelatedArtists } from '../../interactors/artists/artists'
import { RelatedArtists } from '../../types/relatedArtists'
import { getPlaylistIds } from '../../interactors/playlists/playlists'
import { getTrack } from '../../interactors/track/track'
import { getSingleAudioFeature } from '../../interactors/audioFeatures/audioFeatures'

type Props = {
  track: Track
  relatedArtists: RelatedArtists[]
}

const TrackView: VFC<Props> = ({ track, relatedArtists }) => (
  <EnhancedTrackContent track={track} relatedArtists={relatedArtists} />
)

export default TrackView

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPlaylistIds()
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const track = await getTrack(params?.id as string)
  const audioFeature = await getSingleAudioFeature(params?.id as string)
  const relatedArtists = await getRelatedArtists(track.artists_id)
  return {
    props: {
      track: { ...track, ...audioFeature },
      relatedArtists,
    },
  }
}