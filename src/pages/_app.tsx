import '../../styles/tailwind.css'
import '../../styles/tailwind-util.css'
import NextNprogress from 'nextjs-progressbar'
import { AppProps } from 'next/app'
import { SearchContextProvider } from '../contexts/SearchContext'

const App = ({ Component, pageProps }: AppProps) => {
  return <SearchContextProvider><NextNprogress /><Component {...pageProps} /></SearchContextProvider>
}

export default App
