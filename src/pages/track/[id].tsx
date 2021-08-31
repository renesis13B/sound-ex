import Layout from '../../components/templates/Layout'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import playlistInteractor from '../../interactors/api/playlistInteractor'
import trackInteractor from '../../interactors/api/trackInteractor'
import { useRouter } from 'next/router'
import TrackView from '../../components/organisms/presentational/TrackView'
import { useContext, VFC } from 'react'
import { SearchContext } from '../../contexts/SearchContext'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Track: VFC<Props> = ({ track }: Props) => {
  const { search, dispatch } = useContext(SearchContext)
  const searchArtist = () => {
    dispatch({ type: 'SET_SEARCH', payload: track.artistsName })
    router.push({
      pathname: '/searches',
      query: { search: `${track.artistsName}`, type: 'artist' },
    })
  }
  const router = useRouter()
  if (router.isFallback || !track) {
    return <div>Loading...</div>
  }
  return (
    <Layout title={`SOUND EX - ${track.trackName} ${track.artistsName}`}>
      <TrackView track={track} searchArtist={searchArtist} search={search} />
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