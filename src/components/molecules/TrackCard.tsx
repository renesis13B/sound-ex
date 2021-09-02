import Link from 'next/link'
import { TrackSimplified } from '../../types/track'
import { Icons } from '../atoms/Icons'
import { VFC } from 'react'

type Props = {
  track: TrackSimplified
}

const TrackCard: VFC<Props> = ({ track }) => (
  <div className='data-track my-4 shadow-lg'>
    <Link href='/track/[id]' as={`/track/${track.id}`}>
      <a
        className='flex flex-col md:flex-row md:justify-between md:items-center cursor-pointer px-3 pt-3 hover:bg-gray-100'>
        <div className='flex'>
          <div className='block mr-4'>
            <figure>
              <img
                className='rounded-lg w-16 h-16'
                width='128'
                height='128'
                src={track.albumImage}
                alt={`${track.artistsName} - ${track.trackName}`}
              />
            </figure>
          </div>
          <div className='flex-1 text-gray-800'>
            <p className='text-sm font-light uppercase sm:text-base'>
              {track.artistsName}
            </p>
            <p className='pr-2 text-xl font-light sm:text-2xl'>
              {track.trackName}
            </p>
          </div>
        </div>
        <div className='flex justify-around text-center mt-2 mb-4'>
          <div className='flex flex-col justify-center mr-5'>
              <span className='text-2xl text-gray-700 font-base sm:text-3xl'>
                {track.key}
              </span>
            <span className='text-xs uppercase bg-gray-800 text-white py-1 px-2 rounded-xl'>Key</span>
          </div>
          <div className='flex flex-col justify-center mr-5'>
              <span className='text-2xl text-gray-700 font-base sm:text-3xl'>
                {track.duration}
              </span>
            <span className='text-xs uppercase bg-gray-800 text-white py-1 px-2 rounded-xl'>
                TIME
              </span>
          </div>
          <div className='flex flex-col justify-center mr-5'>
              <span className='text-2xl text-gray-700 font-base sm:text-3xl'>
                {track.bpm}
              </span>
            <span className='text-xs uppercase bg-gray-800 text-white py-1 px-2 rounded-xl'>
                BPM
              </span>
          </div>
        </div>
      </a>
      </Link>
      <div className='flex flex-row border-t border-gray-200'>
        <a target='_blank' rel='noopener noreferrer' href={track.spotify_url}
           className='flex-1 p-3 font-light cursor-pointer text-center transition-colors duration-500 ease-in-out hover:bg-green-accent-spotify'>
          <Icons icon={'SPOTIFY'} />
          Spotifyで開く
        </a>
      </div>
    </div>
  )

export default TrackCard
