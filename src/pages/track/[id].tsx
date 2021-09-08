import { GetStaticPaths, GetStaticProps } from 'next'
import playlistInteractor from '../../interactors/api/playlistInteractor'
import trackInteractor from '../../interactors/api/trackInteractor'
import { VFC } from 'react'
import EnhancedTrackContent from '../../components/organisms/containers/TrackContent'
import { Track } from '../../types/track'
import { getRelatedArtists } from '../../interactors/artists/artists'
import { RelatedArtists } from '../../types/relatedArtists'

type Props = {
  track: Track
  relatedArtists: RelatedArtists[]
}

const TrackView: VFC<Props> = ({ track, relatedArtists }) => (
  <EnhancedTrackContent track={track} relatedArtists={relatedArtists} />
)

export default TrackView

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await playlistInteractor.getPlaylistIds()
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const track = await trackInteractor.getTrack(params?.id as string)
  const relatedArtists = await getRelatedArtists(track.artists_id)
  return {
    props: {
      track,
      relatedArtists,
    }
  }
}