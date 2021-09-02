import Layout from '../../components/templates/Layout'
import useSearchTracks from '../../hocks/useSearchTracks'
import TrackIndex from '../../components/organisms/presentational/TrackIndex'
import { VFC } from 'react'

const SearchesIndex: VFC = () => {
  const { tracks, error, search, searchType } = useSearchTracks()
  const title = searchType === 'track'
    ? `SOUND EX - Search 検索結果： ${search}` : searchType === 'artist'
      ? `SOUND EX - ${search} 人気曲` : 'SOUND EX - データ取得失敗'

  const heading = error
    ? { main: 'Sorry', sub: 'データ取得に失敗しました' }
    : searchType === 'track'
      ? { main: 'Search', sub: `検索結果： ${search}` }
      : searchType === 'artist'
        ? { main: `${search} 人気曲`, sub: `${search} の人気トラック 最大30曲` }
        : { main: '', sub: '' }

  return (
    <Layout title={title}>
      <TrackIndex
        tracks={tracks}
        error={error}
        heading={heading}
      />
    </Layout>
  )
}

export default SearchesIndex
