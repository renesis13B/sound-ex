import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { SearchContextProvider } from '../../contexts/SearchContext'

type ComponentProps = {
  children: React.ReactNode;
  title: string
}

const Layout = ({ children, title }:ComponentProps) => {
  return (
    <div className='flex flex-col min-h-screen break-words'>
      <Head>
        <title>{title}</title>
      </Head>
      <SearchContextProvider>
        <Header />
        <Main>
          {children}
        </Main>
      </SearchContextProvider>
      <Footer />
    </div>
  )
}

export default Layout
