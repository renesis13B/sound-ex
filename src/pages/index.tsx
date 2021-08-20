import Layout from '../components/templates/Layout'
import { InferGetStaticPropsType } from 'next'
import playlistInteractor from '../interactors/api/playlistInteractor'
import IndexContents from '../components/organisms/IndexContents'


type Props = InferGetStaticPropsType<typeof getStaticProps>

const Index = ({ tracks }: Props) => {
  const title = {
    main: 'Top 20 Japan',
    sub: '日本で今一番再生回数が多い曲',
  }
  return (
    <Layout title='SOUND EX'>
      <section className='px-4 py-8'>
        {tracks && <IndexContents tracks={tracks} title={title} />}
      </section>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const tracks = await playlistInteractor.getPlaylistTracks()
  return {
    props: { tracks },
  }
}
