import Layout from '../../components/templates/Layout'
import useSearchTracks from '../../hocks/useSearchTracks'
import TrackIndex from '../../components/organisms/presentational/TrackIndex'
import { VFC } from 'react'

const SearchesIndex: VFC = () => {
  const { tracks, error, search } = useSearchTracks()
  const heading = {
    main: 'Search',
    sub: `検索結果： ${search}`,
  }
  return (
    <Layout title={`SOUND EX - Search 検索結果： ${search}`}>
      <TrackIndex
        tracks={tracks}
        error={error}
        heading={heading}
      />
    </Layout>
  )
}

export default SearchesIndex
