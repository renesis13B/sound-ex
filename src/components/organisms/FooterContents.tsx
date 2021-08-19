import React from 'react'

const FooterContents = () => {
  return (
    <div className='px-4 pt-6 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24'>
      <div className='flex items-center mb-4'>
        <div className='flex items-center justify-center w-6 h-6 rounded-full bg-teal-accent-400'>
          <svg
            className='w-5 h-5 text-deep-purple-900'
            stroke='currentColor'
            viewBox='0 0 52 52'
          >
            <polygon
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='none'
              points='29 13 14 29 25 29 23 39 38 23 27 23'
            />
          </svg>
        </div>
        <span className='ml-2 text-xl font-bold tracking-wide text-gray-100'>
          SOUND EX
        </span>
      </div>
      <div className='py-4 border-t border-deep-purple-accent-200'>
        <p className='text-xs text-gray-100'>
          © Copyright 2021 SOUND EX All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default FooterContents