import React, { FC } from 'react'

type Props = {
  children: React.ReactNode
  heading: string
}

const TrackViewCard: FC<Props> = ({ children, heading }) => (
  <div className='shadow-lg bg-white mx-4 p-4 sm:mx-0 text-gray-800 mt-4'>
    <h2 className='text-4xl font-bold'>
      {heading}
    </h2>
    {children}
  </div>
)

export default TrackViewCard