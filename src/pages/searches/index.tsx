import { useState, useEffect } from 'react';
import { $api } from '../../api/api'

const Index = () => {
  useEffect(() => {
    const x = async () => {
      const acsessToken = await $api.getAcsessToken()
      const topPlayLists = await $api.getTopPlayLists(acsessToken.data.access_token)
      console.log(topPlayLists.data.items[0].track.album.artists)
    }
    x()
  }, [])
  
  return (
    <p>Searches index</p>
  )
}

export default Index
