import React, { VFC } from 'react'
import FooterContent from '../organisms/presentational/FooterContent'

const Footer: VFC = () => (
  <footer className='bg-deep-purple-accent-700'>
    <div className='max-w-screen-md px-4 mx-auto py-4 md:px-12 lg:px-0 text-gray-100'>
      <FooterContent />
    </div>
  </footer>
)

export default Footer
