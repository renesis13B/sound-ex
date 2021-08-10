import '../../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {AppProps} from 'next/app'
import { ContextProvider } from '../Context/Context'

const App = ({ Component, pageProps }: AppProps) => {
  return <ContextProvider><Component {...pageProps} /></ContextProvider>
}

export default App
