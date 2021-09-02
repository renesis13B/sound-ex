import Layout from '../../components/templates/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import playlistInteractor from '../../interactors/api/playlistInteractor'
import trackInteractor from '../../interactors/api/trackInteractor'
import { VFC } from 'react'
import EnhancedTrackView from '../../components/organisms/containers/TrackView'
import { Track } from '../../types/track'

type Props = {
  track: Track
}

const TrackView: VFC<Props> = ({ track }) => (
  <Layout title={`SOUND EX - ${track.artistsName} | ${track.trackName}`}>
    <EnhancedTrackView track={track} />
  </Layout>
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