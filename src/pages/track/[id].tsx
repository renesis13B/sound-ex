import Layout from '../../components/templates/Layout'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import playlistInteractor from '../../interactors/api/playlistInteractor'
import trackInteractor from '../../interactors/api/trackInteractor'
import { useRouter } from 'next/router'
import TrackContents from '../../components/organisms/TrackContents'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Track = ({ track }: Props) => {
  const router = useRouter()
  if (router.isFallback || !track) {
    return <div>Loading...</div>
  }
  console.log(track)
  return (
    <Layout title={`SOUND EX - ${track.trackName} ${track.artistsName}`}>
      <article>
        <TrackContents track={track} />
      </article>
    </Layout>
  )
}

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