import Layout from '../components/templates/Layout'
import { InferGetStaticPropsType } from 'next'
import CardIndex from '../components/organisms/CardIndex'
import playlistInteractor from '../interactors/api/playlistInteractor'


type Props = InferGetStaticPropsType<typeof getStaticProps>

const Index = ({ playlistTracks }: Props) => {
  return (
    <Layout title='SOUND EX'>
      <h2>
        Top 10 Japan
        <span>日本で今一番再生回数が多い曲</span>
      </h2>
      {
        playlistTracks && playlistTracks.map((track) => <CardIndex key={track.id} song={track} />)
      }
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  // const token = await $api.getAcsessToken()
  // console.log(token.data)
  const playlistTracks = await playlistInteractor.getPlaylistTracks()
  console.log(playlistTracks)
  return {
    props: { playlistTracks },
  }
}
