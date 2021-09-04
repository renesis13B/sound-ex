import React, { VFC } from 'react'

const FooterContent: VFC = () => (
  <>
    {console.log('FooterContent')}
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
      <span className='ml-2 text-xl font-bold tracking-wide'>
          SOUND EX
        </span>
    </div>
    <div className='pt-4 border-t border-deep-purple-accent-200'>
      <p className='text-xs'>
        © Copyright 2021 SOUND EX All rights reserved.
      </p>
    </div>
  </>

)

export default FooterContent