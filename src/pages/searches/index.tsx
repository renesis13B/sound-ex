import { useState, useEffect } from 'react';
import { $api } from '../../api/api'

const Index = () => {
  useEffect(() => {
    const x = async () => {
      const topPlayLists = await $api.getSearcResult('ホロライブ')
      console.log(topPlayLists.data)
    }
    x()
  }, [])
  
  return (
    <p>Searches index</p>
  )
}

export default Index
