type Props = {
  heading: string
  date: string | number
}

const TrackLabel = ({ heading, date }: Props) => {
  return (
    <li className='mb-5'>
      <dl className='flex items-center bg-white w-full max-w-md'>
        <dt className='bg-black text-white px-5 py-3 relative mr-5'>
          {heading}
          <svg
            className='absolute w-5 h-full top-0 left-full'
            viewBox='0 0 44 43'
            preserveAspectRatio='none'
          >
            <path fillRule='evenodd' fill='rgb(0, 0, 0)'
                  d='M-0.000,43.000 L44.000,43.000 L-0.000,0.000 L-0.000,-0.000 L-0.000,43.000 Z' />
          </svg>
        </dt>
        <dd className='px-5 py-3'>{`${date}`}</dd>
      </dl>
    </li>
  )
}

export default TrackLabel