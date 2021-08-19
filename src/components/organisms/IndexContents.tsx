import TrackSimplifiedCard from '../molecules/TrackSimplifiedCard'
import { TrackSimplified } from '../../models/track'

type Props = {
  tracks: TrackSimplified[]
  title: {
    main: string
    sub: string
  }
}

const IndexContents = ({ tracks, title }: Props) => {
  return (
    <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-md'>
      <h2 className='text-4xl text-gray-800 font-bold'>
        {title.main}
      </h2>
      <p className='text-sm text-gray-700  border-t-2 border-gray-700'>
        {title.sub}
      </p>
      {
        tracks.map((track) =>
          <TrackSimplifiedCard key={track.id} trackSimplifiedCard={track} />)
      }
    </div>
  )
}

export default IndexContents