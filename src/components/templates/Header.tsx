import React, { VFC } from 'react'
import HeaderContent from '../organisms/presentational/HeaderContent'

const Header: VFC = () => (
  <header className='bg-deep-purple-accent-700 fixed top-0 left-0 w-full z-10'>
    <div className='max-w-screen-md px-4 mx-auto py-3 sm:py-4 md:px-12 lg:px-0'>
      <HeaderContent />
    </div>
  </header>
)

export default Header
