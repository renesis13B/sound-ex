import Head from 'next/head'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

type ComponentProps = {
  children: React.ReactNode;
  title: string
}

const Layout = ({ children, title }:ComponentProps) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className='bg-gray-100'>
        <div className='max-w-screen-md  m-auto pt-8 pb-8'>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
