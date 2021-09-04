import { TrackSimplified } from '../../../types/track'
import React, { VFC } from 'react'
import { Heading } from '../../atoms/Heading'
import TrackCardLists from './TrackCardLists'

type Props = {
  tracks?: TrackSimplified[]
  error?: string
  headingMain: string
  headingSub?: string
}

const TrackIndex: VFC<Props> = ({ tracks, error, headingMain, headingSub }) => (
  <section className='mt-8 px-4 sm:px-0'>
    {console.log('TrackIndex')}
    <Heading headingMain={headingMain} headingSub={headingSub} />
    {error ? <p className='text-red-400'>{error}</p> : tracks && <TrackCardLists tracks={tracks} />}
  </section>

)

export default TrackIndex