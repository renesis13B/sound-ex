import Link from 'next/link'
import React from 'react'
import SearchForm from './SearchForm'

const HeaderContents = () => {
  return (
    <div>
      <h1 className='flex justify-center text-gray-100 font-bold leading-none text-5xl tracking-widest'>
        <Link href='/'>
        <span className='cursor-pointer flex items-center'>
          SOUND
          <div className='mr-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-teal-accent-400'>
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
        </span>
        </Link>
      </h1>
      <SearchForm />
      <p className='text-sm text-gray-100'>
        好きな曲を検索してみよう
      </p>
    </div>

  )
}

export default HeaderContents