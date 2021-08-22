import Layout from '../../components/templates/Layout'
import { searchItem } from '../../interactors/api/spotifyInteractor'


const TestIndex = () => {
  searchItem('BTS', true).then(r => console.log(r.data))
  return (
    <Layout title='sas'>
      <p>sasaa</p>
    </Layout>
  )
}

export default TestIndex
