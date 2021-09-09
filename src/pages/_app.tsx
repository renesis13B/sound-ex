import '../../styles/tailwind.css'
import '../../styles/tailwind-util.css'
import NextNprogress from 'nextjs-progressbar'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Layout from '../components/templates/Layout'
import { store } from '../store/store'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <NextNprogress />
      <Layout title='SOUND EX'>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
