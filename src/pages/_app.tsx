import '../../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {AppProps} from 'next/app'
import { StoreContextProvider } from '../Context/StoreContext'

const App = ({ Component, pageProps }: AppProps) => {
  return <StoreContextProvider><Component {...pageProps} /></StoreContextProvider>
}

export default App
