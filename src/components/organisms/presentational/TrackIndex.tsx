import { TrackSimplified } from '../../../types/track'
import { VFC } from 'react'
import { Heading, HeadingText } from '../../atoms/Heading'
import TrackCardLists from './TrackCardLists'


type Props = {
  tracks: TrackSimplified[]
  heading: HeadingText
}

const TrackIndex: VFC<Props> = ({ tracks, heading }) => (
  <section className='mt-8'>
    <Heading heading={heading} />
    <TrackCardLists tracks={tracks} />
  </section>

)

export default TrackIndex