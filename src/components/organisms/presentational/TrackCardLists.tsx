import { VFC } from 'react'
import { TrackSimplified } from '../../../types/track'
import TrackCard from '../../molecules/TrackCard'

type Props = {
  tracks: TrackSimplified[]
}

const TrackCardLists: VFC<Props> = ({ tracks }) => (
  <>
    {tracks.map(track =>
      <TrackCard key={track.id} track={track} />)
    }
  </>
)

export default TrackCardLists