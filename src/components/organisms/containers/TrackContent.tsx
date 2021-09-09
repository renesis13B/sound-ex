import { Track } from '../../../types/track'
import { VFC } from 'react'
import { useRouter } from 'next/router'
import TrackContent from '../presentational/TrackContent'
import { RelatedArtists } from '../../../types/relatedArtists'
import useSearchStore from '../../../hocks/useSearchStore'

type Props = {
  track: Track
  relatedArtists: RelatedArtists[]
}

const EnhancedTrackContent: VFC<Props> = ({ track, relatedArtists }) => {
  const router = useRouter()
  const { submitHandler } = useSearchStore()
  return (
    <>
      {(!router.isFallback && track)
      && <TrackContent
        track={track}
        relatedArtists={relatedArtists}
        submitHandler={submitHandler}
      />}
    </>
  )
}

export default EnhancedTrackContent