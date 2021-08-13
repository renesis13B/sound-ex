import { useState, useEffect, useContext } from 'react'
import { $api } from '../../api/api'
import { searchApi } from '../../api/search'
import Layout from '../../components/templates/Layout'
import { useRouter } from 'next/router'
import { StoreContext } from '../../Context/StoreContext'
import CardIndex from '../../components/organisms/CardIndex'

const SearchesIndex = () => {
  const { globalState, setGlobalSearch } = useContext(StoreContext)
  const router = useRouter()
  const setSearchResult = async () => {
    const { search } = router.query
    if ( search ) {
      const { getTracks } = searchApi()
      await getTracks(search).then((res) => {
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
      { globalState.tracks
        ? globalState.tracks.map((item: any) => <CardIndex key={item.id} song={item} />)
        : <span>no data</span>
      }
    </Layout>
  )
}

export default SearchesIndex
