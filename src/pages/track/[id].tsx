import Layout from '../../components/templates/Layout'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import playlistInteractor from '../../interactors/api/playlistInteractor'
import trackInteractor from '../../interactors/api/trackInteractor'
import { VFC } from 'react'
import EnhancedTrackView from '../../components/organisms/containers/TrackView'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Track: VFC<Props> = ({ track }: Props) => (
  <Layout title={'SOUND EX - トラック詳細'}>
    <EnhancedTrackView track={track} />
  </Layout>
)

export default Track

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