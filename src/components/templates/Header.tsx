import React from 'react'
import HeaderContents from '../organisms/HeaderContents'

const Header = () => {
  return (
    <header data-header className='bg-deep-purple-accent-700'>
      <div className='px-6 pt-8 pb-6'>
        <div className='max-w-screen-md mx-auto'>
          <div className='flex flex-col justify-center'>
            <HeaderContents />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
