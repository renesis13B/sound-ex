import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ children, title }) => {
  return (
    <div className="min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="w-screen h-56 bg-yellow-500">

      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
