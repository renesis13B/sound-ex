import { Track } from '../../../types/track'
import { SearchStateContext } from '../../../contexts/SearchContext'
import { useContext, VFC } from 'react'
import { useRouter } from 'next/router'
import TrackView from '../presentational/TrackView'

type Props = {
  track: Track
}

const EnhancedTrackView: VFC<Props> = ({ track }) => {
  const { search } = useContext(SearchStateContext)
  const router = useRouter()
  const searchArtist = () => {
    router.push({
      pathname: '/searches',
      query: { search: `${track.artistsName}`, type: 'artist' },
    })
  }
  return <TrackView track={track} searchArtist={searchArtist} search={search} />
}

export default EnhancedTrackView