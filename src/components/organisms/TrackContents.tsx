import { Track } from '../../models/track'
import TrackLabel from '../atoms/TrackLabel'
import { useContext } from 'react'
import { StoreContext } from '../../contexts/StoreContext'
import Link from 'next/link'
import Icons from '../atoms/Icons'

type Props = {
  track: Track
}

const TrackContents = ({ track }: Props) => {
  const { search } = useContext(StoreContext)
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

      <Link href={search ? `/searches?search=${search}` : '/'}>
        <div className='flex cursor-pointer mt-8 justify-center items-center'>
          <Icons icon={'BACK'} />
          <span>前のページに戻る</span>
        </div>
      </Link>
    </div>

  )
}

export default TrackContents