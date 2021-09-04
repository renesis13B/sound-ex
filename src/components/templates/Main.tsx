import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Main: FC<Props> = ({ children }) => (
  <main className='bg-gray-50 flex-grow mt-16 sm:mt-20 pb-8'>
    {console.log('Main')}
    <div className='max-w-screen-md mx-auto md:px-12 lg:px-0'>
      {children}
    </div>
  </main>
)

export default Main