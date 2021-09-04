import '../../styles/tailwind.css'
import '../../styles/tailwind-util.css'
import NextNprogress from 'nextjs-progressbar'
import { AppProps } from 'next/app'
import { SearchContextProvider } from '../contexts/SearchContext'
import Layout from '../components/templates/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SearchContextProvider>
      <NextNprogress />
      <Layout title='SOUND EX'>
        <Component {...pageProps} />
      </Layout>
    </SearchContextProvider>)
}

export default App
