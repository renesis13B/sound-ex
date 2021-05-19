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
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
