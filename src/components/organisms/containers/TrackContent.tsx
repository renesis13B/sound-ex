import { Track } from '../../../types/track'
import { SearchStateContext } from '../../../contexts/SearchContext'
import { useContext, VFC } from 'react'
import { useRouter } from 'next/router'
import TrackContent from '../presentational/TrackContent'
import { RelatedArtists } from '../../../types/relatedArtists'

type Props = {
  track: Track
  relatedArtists: RelatedArtists[]
}

const EnhancedTrackContent: VFC<Props> = ({ track, relatedArtists }) => {
  const { search } = useContext(SearchStateContext)
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
      && <TrackContent
        track={track}
        relatedArtists={relatedArtists}
        search={search}
        searchArtist={searchArtist}
      />}
    </>
  )
}

export default EnhancedTrackContent