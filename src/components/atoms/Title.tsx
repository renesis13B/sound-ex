import Link from 'next/link'
import React from 'react'

const Title = React.memo(() => (
  <>
    <Link href='/'>
      <a
        className='sm:hidden sm:mx-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-teal-accent-400'
        aria-label='ホーム'
      >
        <svg
          className='w-7 h-7 text-deep-purple-900'
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
      </a>
    </Link>

    <h1 className='hidden sm:block text-gray-100 font-bold leading-none text-5xl'>
      <Link href='/'>
        <a className='flex items-center'>
          SOUND
          <div className='mx-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-teal-accent-400'>
            <svg
              className='w-7 h-7 text-deep-purple-900'
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
          EX
        </a>
      </Link>
    </h1>
  </>
))

export default Title