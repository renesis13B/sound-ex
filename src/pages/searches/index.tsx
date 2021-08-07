import { useState, useEffect } from 'react';
import { $api } from '../../api/api'
import { searchApi } from '../../api/search'

const Index = () => {
  useEffect(() => {
    const x = async () => {
      const { getTrackSearchResult } = searchApi()
      const topPlayLists = await getTrackSearchResult('ホロライブ')
      console.log(topPlayLists.data)
    }
    x()
  }, [])
  
  return (
    <p>Searches index</p>
  )
}

export default Index
