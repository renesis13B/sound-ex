import Link from 'next/link'

type Props = {
  playlist: {
    id: string
    albumImage: string,
    trackName: string,
    artistsName: string,
    bpm: number
  }
}

const CardIndex = ({ song }: any) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col shadow-lg" key={song.id}>
        <Link href={`/track/${song.id}`}>
          <div className="flex flex-row justify-start p-3 sm:p-6 hover:bg-gray-100">
            <div className="block mr-4">
              <figure className="w-16 h-16 bg-center bg-cover border-gray-200">
                <img className="rounded-lg" src={song.albumImage} alt="" />
              </figure>
            </div>
            <div className="flex-1 text-gray-800">
              <p className="text-sm font-light uppercase sm:text-base">
                {song.artistsName}
              </p>
              <p className="pr-2 text-xl font-light sm:text-2xl">
                {song.trackName}
              </p>
            </div>
            <div className="pr-8 text-center">
              <p className="text-2xl text-gray-700 font-base sm:text-3xl">
                { song.key }
              </p>
              <p className="text-xs uppercase">Key</p>
            </div>
            <div className="hidden pr-8 text-center sm:block">
              <p className="text-2xl text-gray-700 font-base sm:text-3xl">
                { song.duration }
              </p>
              <p className="text-xs uppercase">
                Duration
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-700 font-base sm:text-3xl">
                { song.bpm }
              </p>
              <p className="text-xs uppercase">
                BPM
              </p>
            </div>
          </div>
        </Link>
        <div className="flex flex-row border-t border-gray-200">
          <a target='_blank' rel='noopener noreferrer' href={song.spotify_url}
             className='flex-1 p-3 font-light text-center transition-colors duration-200 ease-in-out'>
            <span className='hidden pr-2 sm:inline'>
              Listen on
            </span>
            <svg className='inline w-4 h-4 mr-2 -mt-1' fill='currentColor' viewBox='0 0 168 168'>
              <path
                d='m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z'></path>
            </svg>
            Spotify
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default CardIndex
