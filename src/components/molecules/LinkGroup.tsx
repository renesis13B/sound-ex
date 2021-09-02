import Link from 'next/link'
import React, { VFC } from 'react'

type props = {
  linkUrl: string
  children: React.ReactNode
}

const LinkGroup: VFC<props> = ({ children, linkUrl }) => (
  <div>
    <div className='text-center mt-8'>
      <Link href={linkUrl}>
        <a>
          <button className='max-w-xs sm:max-w-xl'>
            <span className='border-b-2 border-gray-700 hover:text-gray-500 hover:border-gray-500'>
            {children}
            </span>
          </button>
        </a>
      </Link>
    </div>
  </div>
)

export default LinkGroup