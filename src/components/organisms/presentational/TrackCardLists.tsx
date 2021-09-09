import React, { VFC } from 'react'
import { Track } from '../../../types/track'
import TrackCard from '../../molecules/TrackCard'
import isPropsSameObject from '../../../utils/isPropsSameObject'

type Props = {
  tracks: Track[]
}

const TrackCardLists: VFC<Props> = React.memo(({ tracks }) => (
  <>
    {tracks.map(track =>
      <TrackCard key={track.id} track={track} />)
    }
  </>
), (prevProps, nextProps) => isPropsSameObject(prevProps, nextProps))

export default TrackCardLists