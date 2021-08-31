import Layout from '../components/templates/Layout'
import { InferGetStaticPropsType } from 'next'
import playlistInteractor from '../interactors/api/playlistInteractor'
import TrackIndex from '../components/organisms/presentational/TrackIndex'
import { useContext, useEffect, VFC } from 'react'
import { SearchContext } from '../contexts/SearchContext'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Index: VFC<Props> = ({ tracks }) => {
  const { search, dispatch } = useContext(SearchContext)
  useEffect(() => {
    if (search !== '') {
      dispatch({ type: 'SET_SEARCH', payload: '' })
    }
  }, [])

  const heading = {
    main: 'Top 20 Japan',
    sub: '日本で今一番再生回数が多い曲',
  }

  return (
    <Layout title='SOUND EX'>
      {tracks && <TrackIndex tracks={tracks} heading={heading} />}
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
