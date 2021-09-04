import TrackLabel from '../atoms/TrackLabel'
import { Track } from '../../types/track'
import { VFC } from 'react'
import Image from 'next/image'

type Props = {
  track: Track
  searchArtist: () => void
}

const TrackSummary: VFC<Props> = ({ track, searchArtist }) => {
  const trackDates = [
    ['Key', track.key],
    ['Time', track.duration],
    ['BPM', track.bpm],
    ['Release', track.releaseDate],
  ] as const
  return (
    <figure className='sm:flex sm:justify-center sm:items-center'>
      <div className='w-full sm:w-1/2'>
        <Image src={track.albumImage} width={640} height={640} alt={`${track.artistsName} | ${track.trackName}`} />
        <div className='w-full h-20 -mt-2'>
          <iframe
            src={`https://open.spotify.com/embed/track/${track.id}`}
            width='100%'
            height='80'
            allow='encrypted-media'
            title='Spotify Widgets'
          />
        </div>
      </div>
      <figcaption className='px-4 py-8 sm:py-0 sm:px-8 min-w-0 sm:w-1/2'>
        <h2 className='text-2xl'>
        <span onClick={searchArtist}
              className='cursor-pointer border-b-2 border-gray-700 hover:text-gray-500 hover:border-gray-500'>
          {track.artistsName}
        </span>
          <span className='text-4xl font-bold block mt-1'>{track.trackName}</span>
        </h2>
        <dl className='mt-4 flex flex-wrap flex-col'>
          {
            trackDates.map(trackDate => <TrackLabel key={trackDate[0]} heading={trackDate[0]} date={trackDate[1]} />)
          }
        </dl>
      </figcaption>
    </figure>
  )
}

export default TrackSummary