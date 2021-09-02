import { Track } from '../../../types/track'
import { SearchStateContext } from '../../../contexts/SearchContext'
import { useContext, VFC } from 'react'
import { useRouter } from 'next/router'
import TrackView from '../presentational/TrackView'

type Props = {
  track: Track
}

const EnhancedTrackView: VFC<Props> = ({ track }) => {
  const { search, searchType } = useContext(SearchStateContext)
  const router = useRouter()
  const searchArtist = () => {
    router.push({
      pathname: '/searches',
      query: { search: `${track.artistsName}`, type: 'artist' },
    })
  }
  return (
    <>
      {(!router.isFallback && track)
      && <TrackView track={track} search={search} searchType={searchType} searchArtist={searchArtist} />}
    </>
  )
}

export default EnhancedTrackView