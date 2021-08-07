import Layout from "../components/templates/Layout";
import { topSongsApi } from '../api/top-songs'
import { InferGetStaticPropsType } from 'next';
import CardIndex from '../components/organisms/CardIndex'
import { authApi } from '../api/auth'
// import { $api } from '../api/api'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Index = ({ topSongs }: Props) => {
  const { setAccessToken } = authApi()
  setAccessToken()
  return (
    <Layout title="SOUND EX">
      { topSongs && topSongs.map((song) => <CardIndex key={song.id} song={song}/>)}
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  // const acsessToken = await $api.getAcsessToken()
  // console.log(acsessToken.data.access_token)
  const token = `${process.env.NEXT_PUBLIC_SPOTIFY_TOKEN_ID}`
  const { getTopSongsIndex } = topSongsApi()
  const topSongs = await getTopSongsIndex(token)
  return {
    props: { topSongs }
  }
}
