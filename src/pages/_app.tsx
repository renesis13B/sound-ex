import '../../styles/tailwind.css'
import '../../styles/tailwind-util.css'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Layout from '../components/templates/Layout'
import { store } from '../store/store'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      {/*<NextNprogress />*/}
      <QueryClientProvider client={queryClient}>
        <Layout title='SOUND EX'>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  )
}

export default App
