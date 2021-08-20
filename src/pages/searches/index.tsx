import Layout from '../../components/templates/Layout'
import useSearchInteractor from '../../interactors/api/useSearchInteractor'
import IndexContents from '../../components/organisms/IndexContents'
import { useContext } from 'react'
import { StoreContext } from '../../contexts/StoreContext'


const SearchesIndex = () => {
  const [response, error] = useSearchInteractor()
  const { search } = useContext(StoreContext)
  const title = {
    main: 'Search',
    sub: `検索結果： ${search}`,
  }

  return (
    <Layout title={`SOUND EX - Search 検索結果： ${search}`}>
      <section className='px-4 py-8'>
        {response && <IndexContents tracks={response} title={title} />}
      </section>
    </Layout>
  )
}

export default SearchesIndex
