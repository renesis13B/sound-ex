import Layout from '../../components/templates/Layout'
import useSearchTracks from '../../hocks/useSearchTracks'
import TrackIndex from '../../components/organisms/presentational/TrackIndex'
import { VFC } from 'react'

const SearchesIndex: VFC = () => {
  const { tracks, error, search } = useSearchTracks()
  return (
    <Layout title={`SOUND EX - Search 検索結果： ${search}`}>
      <TrackIndex
        tracks={tracks}
        error={error}
        heading={{ main: 'Search', sub: `検索結果： ${search}` }}
      />
    </Layout>
  )
}

export default SearchesIndex
