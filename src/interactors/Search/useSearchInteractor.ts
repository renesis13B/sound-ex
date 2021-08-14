import { getAudioFeatures, searchItem } from '../baseInteractor'
import { useEffect, useState } from 'react'
import { Track } from '../../models/track'
import { useRouter } from 'next/router'
import searchMapper from './searchMapper'

const useSearchInteractor = () => {
  const [response, setResponse] = useState<Track[]>([])
  const [error, setError] = useState(null)
  const router = useRouter()
  const { search } = router.query
  const fetch = async () => {
    try {
      const tracks = await searchItem(search)
      const trackIds = tracks.data.tracks.items.map(track => track.id).join('%2C')
      const audioFeatures = await getAudioFeatures(trackIds)
      setResponse(searchMapper(tracks.data.tracks.items, audioFeatures))
    } catch (error) {
      setError(error)
    }
  }
  useEffect(() => {
    fetch()
  }, [router.query])


  return [response, error]
}

export default useSearchInteractor