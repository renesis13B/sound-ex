import TrackLabel from '../atoms/TrackLabel'
import { Track } from '../../types/track'
import { VFC } from 'react'
import Image from 'next/image'

type Props = {
  track: Track
  searchArtist: () => void
}

const TrackSummary: VFC<Props> = ({ track, searchArtist }) => (
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
        <TrackLabel heading={'Key'} date={track.key} />
        <TrackLabel heading={'Time'} date={track.duration} />
        <TrackLabel heading={'BPM'} date={track.bpm} />
        <TrackLabel heading={'Release'} date={track.releaseDate} />
      </dl>
    </figcaption>
  </figure>
)

export default TrackSummary