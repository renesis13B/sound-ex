import Layout from '../../components/templates/Layout'
import CardIndex from '../../components/organisms/CardIndex'
import useSearchInteractor from '../../Interactors/search/useSearchInteractor'


const SearchesIndex = () => {
  const [response, error] = useSearchInteractor()

  console.log(response)
  console.log(error)

  const link = ''
  
  return (
    <Layout title='テスト'>
      <p>検索結果</p>
      {
        response !== null
          ? response.map(track => <CardIndex key={track.id} song={track} />)
          : <p>{}</p>
      }
    </Layout>
  )
}

export default SearchesIndex
