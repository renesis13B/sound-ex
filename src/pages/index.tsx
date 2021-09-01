import Layout from '../components/templates/Layout'
import { InferGetStaticPropsType } from 'next'
import playlistInteractor from '../interactors/api/playlistInteractor'
import TrackIndex from '../components/organisms/presentational/TrackIndex'
import { VFC } from 'react'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Index: VFC<Props> = ({ tracks }) => (
  <Layout title='SOUND EX'>
    {tracks && <TrackIndex tracks={tracks} heading={{ main: 'Top 20 Japan', sub: '日本で今一番再生回数が多い曲' }} />}
  </Layout>
)

export default Index

export async function getStaticProps() {
  const tracks = await playlistInteractor.getPlaylistTracks()
  return {
    props: { tracks },
  }
}
