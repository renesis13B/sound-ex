import { Track } from '../../types/track'
import { VFC } from 'react'
import TrackLabel from '../atoms/TrackLabel'
import { SearchSubmitHandler } from '../../hocks/useSearchStore'
import { FireIcon, LightningBoltIcon } from '@heroicons/react/outline'

type Props = {
  track: Track
  submitHandler: SearchSubmitHandler
}

const TrackInfo: VFC<Props> = ({ track, submitHandler }) => {
  const trackDates = [
    ['Key', track.key],
    ['Time', track.duration],
    ['BPM', track.bpm],
    ['Danceability', track.danceability],
    ['Energy', track.energy],
    ['Beat', track.time_signature],
  ] as const
  return (
    <>
      <p className='text-xl mt-2'>
        <span className='font-bold'>{track.trackName}</span>は
        <span className='font-bold'>{track.releaseDate}</span>にリリースされた
        <span
          onClick={() => submitHandler(track.artistsName, 'artist')}
          className='font-bold cursor-pointer border-b-2 border-gray-700 ml-1 mr-1 hover:border-gray-500'
        >
        {track.artistsName}
      </span>
        の楽曲です
      </p>
      <dl className='mt-4 flex flex-wrap flex-col sm:flex-row'>
        {
          trackDates.map(trackDate =>
            <TrackLabel
              key={trackDate[0]}
              heading={trackDate[0]}
              date={trackDate[1]}
              style={'w-full sm:w-1/2'}
            />)
        }
      </dl>
      <p className='flex text-base text-gray-500'>
        <LightningBoltIcon className='h-6 w-6 mr-1' />
        Danceability：踊りやすさ、1に近づくほどダンサブル
      </p>
      <p className='flex text-base text-gray-500 mt-1'>
        <FireIcon className='h-6 w-6 mr-1' />
        Energy：曲の元気さ、1に近づくほどhigh energy
      </p>
    </>
  )
}

export default TrackInfo