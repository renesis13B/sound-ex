import '../../styles/tailwind.css'
import '../../styles/tailwind-util.css'
import { AppProps } from 'next/app'
import { StoreContextProvider } from '../contexts/StoreContext'

const App = ({ Component, pageProps }: AppProps) => {
  return <StoreContextProvider><Component {...pageProps} /></StoreContextProvider>
}

export default App
