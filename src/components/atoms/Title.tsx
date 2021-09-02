import Link from 'next/link'
import { Icons } from './Icons'
import React from 'react'

const Title = React.memo(() => (
  <>
    <Link href='/'>
      <a
        className='sm:hidden sm:mx-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-teal-accent-400'>
        <Icons aria-label='ホーム' icon={'LOGO'} />
      </a>
    </Link>

    <h1 className='hidden sm:block text-gray-100 font-bold leading-none text-5xl'>
      <Link href='/'>
        <a className='flex items-center'>
          SOUND
          <div className='mx-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-teal-accent-400'>
            <Icons icon={'LOGO'} />
          </div>
          EX
        </a>
      </Link>
    </h1>
  </>
))

export default Title