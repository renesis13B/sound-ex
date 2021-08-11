import { useState, useEffect, useContext } from 'react'
import { $api } from '../../api/api'
import { searchApi } from '../../api/search'
import Layout from '../../components/templates/Layout'
import { useRouter } from 'next/router'
import { Context } from '../../Context/Context'
import CardIndex from '../../components/organisms/CardIndex'

const SearchesIndex = () => {
  const { globalState, setGlobalSearch } = useContext(Context)
  const router = useRouter()
  const setSearchResult = async () => {
    const { term } = router.query
    if ( term ) {
      const { getTracks } = searchApi()
      await getTracks(term).then((res) => {
        setGlobalSearch(res)
      })
    }
  }


  useEffect(() => {
    setSearchResult()
  }, [router.query])

  const link = ''
  
  return (
    <Layout title='テスト'>
      <p>検索結果</p>
      { globalState.searched
        ? globalState.searched.map((item: any) => <CardIndex key={item.id} song={item} />)
        : <span>no data</span>
      }
    </Layout>
  )
}

export default SearchesIndex
