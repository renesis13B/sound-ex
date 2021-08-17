import Layout from "../components/templates/Layout";
import { topSongsApi } from '../api/top-songs'
import { InferGetStaticPropsType } from 'next';
import CardIndex from '../components/organisms/CardIndex'
import { authApi } from '../api/auth'
import playlistInteractor from '../interactors/api/playlistInteractor'
import { $api } from '../api/api'


type Props = InferGetStaticPropsType<typeof getStaticProps>

const Index = ({ playlistTracks }: Props) => {
  return (
    <Layout title="SOUND EX">
      <h2>
        Top 10 Japan
        <span>日本で今一番再生回数が多い曲</span>
      </h2>
      {
        playlistTracks && playlistTracks.map((track) => <CardIndex key={track.id} song={track}/>)
      }
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const token = await $api.getAcsessToken()
  console.log(token.data.access_token)
  const playlistTracks = await playlistInteractor.getPlaylistTracks()
  return {
    props: { playlistTracks }
  }
}
