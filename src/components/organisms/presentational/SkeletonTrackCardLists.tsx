import React from 'react'
import SkeletonTrackCard from '../../molecules/SkeletonTrackCard'

const SkeletonTrackCardLists = () => (
  <>
    {Array(4).fill('Skeleton').map((_, index) => (
      <SkeletonTrackCard key={index} />
    ))}
  </>
)

export default SkeletonTrackCardLists