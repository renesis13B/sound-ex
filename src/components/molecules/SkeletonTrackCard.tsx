import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonTrackCard = () => {
  return (
    <div className='data-track my-4 shadow-lg p-3'>
      <div className='w-1/3 leading-loose text-2xl'>
        <Skeleton />
      </div>
      <Skeleton className='text-2xl' count={2} />
    </div>
  )
}

export default SkeletonTrackCard