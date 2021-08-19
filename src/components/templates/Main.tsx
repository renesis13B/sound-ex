import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main className='bg-gray-50 px-4 py-8 flex-grow'>
      <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-md m-auto'>
        {children}
      </div>
    </main>
  )
}

export default Main