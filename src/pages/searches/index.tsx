import Layout from '../../components/templates/Layout'
import useSearchInteractor from '../../interactors/api/useSearchInteractor'
import TrackIndex from '../../components/organisms/presentational/TrackIndex'
import { useContext, VFC } from 'react'
import { SearchContext } from '../../contexts/SearchContext'


const SearchesIndex: VFC = () => {
  const [response] = useSearchInteractor()
  const { search } = useContext(SearchContext)
  const heading = {
    main: 'Search',
    sub: `検索結果： ${search}`,
  }

  return (
    <Layout title={`SOUND EX - Search 検索結果： ${search}`}>
      {response && <TrackIndex tracks={response} heading={heading} />}
    </Layout>
  )
}

export default SearchesIndex
