import { VFC } from 'react'

type Props = {
  heading: string
  date: string | number
  style?: string
}

const TrackLabel: VFC<Props> = ({ heading, date, style }) => (
  <div className={`flex mb-4 ${style ?? ''}`}>
    {console.log('TrackLabel')}
    <dt className='w-1/2 flex items-center flex-wrap bg-black text-white px-4 py-2'>
      {heading}
    </dt>
    <dd className='w-1/2 flex items-center bg-white px-4 '>{`${date}`}</dd>
  </div>
)

export default TrackLabel