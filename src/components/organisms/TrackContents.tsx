import Link from 'next/link'
import { Track } from '../../models/track'
import TrackLabel from '../atoms/TrackLabel'

type Props = {
  track: Track
}

const TrackContents = ({ track }: Props) => {
  return (
    <div className='sm:px-4 sm:py-8 max-w-screen-md m-auto'>
      <figure className='sm:flex sm:justify-center sm:items-center'>
        <img
          className='sm:w-96 sm:h-96'
          src={`${track.albumImage}`}
          alt={`${track.artistsName} | ${track.trackName}`}
        />
        <figcaption className='px-4 py-8 sm:p-0 sm:ml-8 min-w-0 sm:flex-grow'>
          <h2 className='text-2xl'>
            {track.artistsName}
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
      <div className='shadow-lg bg-white mx-4 p-4 sm:mx-0 text-gray-800 mt-4'>
        <h2 className='text-4xl font-bold'>{track.trackName}</h2>
        <p className='text-xl mt-4'>
          <span className='font-bold'>{track.trackName}</span>は
          <span className='font-bold'>{track.releaseDate}</span>にリリースされた
          <span className='font-bold'>{track.artistsName}</span>の楽曲です。<br />
          この楽曲のデータは以下の通りとなります。<br />
          キー：<span className='font-bold'>{track.key}</span>、
          再生時間：<span className='font-bold'>{track.duration}</span>、
          BPM：<span className='font-bold'>{track.bpm}</span><br />
          楽曲の踊りやすや(最大1 最小0)は<br />
          danceability：
          <span className='font-bold'>{track.danceability}</span><br />
          楽曲のエネルギッシュは<br />
          energy：
          <span className='font-bold'>{track.energy}</span><br />
          楽曲全体の
          拍：
          <span className='font-bold'>{track.time_signature}</span>
        </p>
      </div>

      <Link href='/'>
        <div className='flex cursor-pointer mt-8 justify-center items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z'
              clipRule='evenodd'
            />
          </svg>
          <span>Back to Home</span>
        </div>
      </Link>
    </div>

  )
}

export default TrackContents