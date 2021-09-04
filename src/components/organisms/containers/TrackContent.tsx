import { Track } from '../../../types/track'
import { useCallback, VFC } from 'react'
import { useRouter } from 'next/router'
import TrackContent from '../presentational/TrackContent'

type Props = {
  track: Track
}

const EnhancedTrackContent: VFC<Props> = ({ track }) => {
  // const { search } = useContext(SearchStateContext)
  const router = useRouter()
  const searchArtist = useCallback(() => {
    router.push({
      pathname: '/searches',
      query: { search: `${track.artistsName}`, type: 'artist' },
    })
  }, [track.artistsName])
  return (
    <>
      {console.log('EnhancedTrackContent')}
      {(!router.isFallback && track)
      && <TrackContent track={track} searchArtist={searchArtist} />}
    </>
  )
}

export default EnhancedTrackContent