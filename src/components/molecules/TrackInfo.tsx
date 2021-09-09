import { Track } from '../../types/track'
import { VFC } from 'react'
import TrackLabel from '../atoms/TrackLabel'
import { SearchSubmitHandler } from '../../hocks/useSearchStore'

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
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 mr-1' fill='none' viewBox='0 0 24 24'
             stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
        </svg>
        Danceability：踊りやすさ、1に近づくほどダンサブル
      </p>
      <p className='flex text-base text-gray-500'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 mr-1' fill='none' viewBox='0 0 24 24'
             stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
        </svg>
        Energy：曲の元気さ、1に近づくほどhigh energy
      </p>
    </>
  )
}

export default TrackInfo