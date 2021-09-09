import useSearchTracks from '../../hocks/useSearchTracks'
import TrackIndex from '../../components/organisms/presentational/TrackIndex'
import { VFC } from 'react'

const SearchesIndex: VFC = () => {
  const { tracks, error, search, searchType } = useSearchTracks()
  const heading = error
    ? { main: 'Sorry', sub: 'データ取得に失敗しました' }
    : searchType === 'track'
      ? { main: 'Search', sub: `検索結果： ${search}` }
      : searchType === 'artist'
        ? { main: `${search} 人気曲`, sub: `${search} の人気トラック 最大30曲` }
        : { main: '', sub: '' }

  return (
    <TrackIndex
      tracks={tracks}
      error={error}
      headingMain={heading.main}
      headingSub={heading.sub}
    />
  )
}

export default SearchesIndex
