import Link from 'next/link'
import React from 'react'
import SearchForm from './SearchForm'
import Icons from '../atoms/Icons'

const HeaderContents = () => {
  return (
    <div className='flex justify-between items-center'>
      <Link href='/'>
        <div
          className='sm:hidden sm:mx-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-teal-accent-400'>
          <Icons icon={'LOGO'} />
        </div>
      </Link>
      <Link href='/'>
        <h1 className='hidden sm:block text-gray-100 font-bold leading-none text-5xl'>
          <span className=' cursor-pointer flex items-center'>
            SOUND
            <div className='mx-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-teal-accent-400'>
              <Icons icon={'LOGO'} />
            </div>
            EX
          </span>
        </h1>
      </Link>
      <div className='flex-1 ml-8'>
        <SearchForm />
      </div>
    </div>

  )
}

export default HeaderContents