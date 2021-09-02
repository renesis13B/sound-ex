import { TrackSimplified } from '../../../types/track'
import { VFC } from 'react'
import { Heading, HeadingText } from '../../atoms/Heading'
import TrackCardLists from './TrackCardLists'

type Props = {
  tracks?: TrackSimplified[]
  error?: string
  heading: HeadingText
}

const TrackIndex: VFC<Props> = ({ tracks, error, heading }) => (
  <section className='mt-8'>
    <Heading heading={heading} />
    {error ? <p className='text-red-400'>{error}</p> : tracks && <TrackCardLists tracks={tracks} />}
  </section>

)

export default TrackIndex