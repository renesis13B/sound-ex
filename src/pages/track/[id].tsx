import { GetStaticPaths, GetStaticProps } from 'next'
import playlistInteractor from '../../interactors/api/playlistInteractor'
import trackInteractor from '../../interactors/api/trackInteractor'
import { VFC } from 'react'
import EnhancedTrackView from '../../components/organisms/containers/TrackContent'
import { Track } from '../../types/track'

type Props = {
  track: Track
}

const TrackView: VFC<Props> = ({ track }) => (
    <EnhancedTrackView track={track} />
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
  return {
    props: {
      track
    }
  }
}