import TrackLabel from '../atoms/TrackLabel'
import { Track } from '../../types/track'
import { VFC } from 'react'

type Props = {
  track: Track
  searchArtist: () => void
}

const TrackSummary: VFC<Props> = ({ track, searchArtist }) => (
  <figure className='sm:flex sm:justify-center sm:items-center'>
    <div>
      <img
        className='sm:w-96 sm:h-96'
        src={`${track.albumImage}`}
        alt={`${track.artistsName} | ${track.trackName}`}
      />
      <div className='aspect-w-4 aspect-h-1'>
        <iframe
          src={`https://open.spotify.com/embed/track/${track.id}`}
          width='400'
          height='380'
          allow='encrypted-media'
        />
      </div>
    </div>
    <figcaption className='px-4 py-8 sm:p-0 sm:ml-8 min-w-0 sm:flex-grow'>
      <h2 className='text-2xl'>
        <span onClick={searchArtist} className='cursor-pointer'>{track.artistsName}</span>
        <span className='text-4xl font-bold block'>{track.trackName}</span>
      </h2>
      <ul>
        <TrackLabel heading={'Release'} date={track.releaseDate} />
        <TrackLabel heading={'KEY'} date={track.key} />
        <TrackLabel heading={'再生時間'} date={track.duration} />
        <TrackLabel heading={'BPM'} date={track.bpm} />
      </ul>
    </figcaption>
  </figure>
)

export default TrackSummary