import { getAudioFeatures, searchItem } from './spotifyInteractor'
import { useEffect, useState } from 'react'
import { TrackSimplified } from '../../models/track'
import { useRouter } from 'next/router'
import searchMapper from '../mapper/searchMapper'

const useSearchInteractor = () => {
  const [response, setResponse] = useState<TrackSimplified[]>([])
  const [error, setError] = useState(null)
  const router = useRouter()
  const { search, type } = router.query
  const fetch = async () => {
    if (typeof search === 'string' && (type === 'track' || type === 'artist')) {
      try {
        const tracks = await searchItem(search, type, true)
        const trackIds = tracks.data.tracks.items.map(track => track.id).join('%2C')
        const audioFeatures = await getAudioFeatures(trackIds, true)
        setResponse(searchMapper(tracks.data.tracks.items, audioFeatures.data))
      } catch (error) {
        setError(error)
      }
    }

  }
  useEffect(() => {
    fetch()
  }, [router.query])


  return [response, error]
}

export default useSearchInteractor