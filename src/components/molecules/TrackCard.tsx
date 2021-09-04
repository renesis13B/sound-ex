import Link from 'next/link'
import { TrackSimplified } from '../../types/track'
import React, { VFC } from 'react'
import Image from 'next/image'


type Props = {
  track: TrackSimplified
}

const TrackCard: VFC<Props> = ({ track }) => (
  <div className='data-track my-4 shadow-lg'>
    {console.log('TrackCard')}
    <Link href='/track/[id]' as={`/track/${track.id}`}>
      <a
        className='flex flex-col md:flex-row md:justify-between md:items-center cursor-pointer px-3 pt-3 hover:bg-gray-100'>
        <div className='flex'>
          <div className='block mr-4'>
            <figure>
              <Image
                className='rounded-lg'
                src={track.albumImage}
                width={64} height={64}
                alt={`${track.artistsName} | ${track.trackName}`}
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
        <svg className='inline w-4 h-4 mr-2 -mt-1' fill='currentColor' viewBox='0 0 168 168'>
          <path
            d='m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z'>
          </path>
        </svg>
        Spotifyで開く
      </a>
    </div>
  </div>
)

export default TrackCard
