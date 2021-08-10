import { useState, useEffect } from 'react';
import { $api } from '../../api/api'
import { searchApi } from '../../api/search'
import Layout from '../../components/templates/Layout'
import { useRouter } from 'next/router'

const SearchesIndex = () => {
  useEffect(() => {
    const x = async () => {
      const { getTrackSearchResult } = searchApi()
      const topPlayLists = await getTrackSearchResult('ホロライブ')
      console.log(topPlayLists.data)
    }
    x()
  }, [])

  const router = useRouter()
  const { term } = router.query
  console.log(term)
  
  return (
    <Layout title='テスト'>
      <p>検索結果</p>
    </Layout>
  )
}

export default SearchesIndex
