import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

type ComponentProps = {
  children: React.ReactNode
  title: string
}

const Layout = ({ children, title }:ComponentProps) => {
  return (
    <div className='flex flex-col min-h-screen break-words'>
      <Head>
        <title>{title}</title>
        <meta content='SOUND EXは好きな曲のBPMやKeyなどの情報がわかるサイトです。またアーティスト検索で人気の曲を聞く事もできます' name='description' />
        <meta property='og:title' content='SOUND EXで好きな曲のBPMやKey、アーティストの人気曲を調べてみよう' />
        <meta property='og:description' content='SOUND EXは好きな曲のBPMやKeyなどの情報がわかるサイトです。またアーティスト検索で人気の曲を聞く事もできます' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://sound-ex.vercel.app/' />
        <meta property='og:image' content='/og.png' />
        <meta property='og:site_name' content='SOUND EX' />
        <meta property='og:locale' content='ja_JP' />
        <meta name='robots' content='noindex,nofollow' />
      </Head>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  )
}

export default Layout
