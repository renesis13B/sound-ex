import { useEffect, useState } from 'react'
import { Track } from '../types/track'
import { useRouter } from 'next/router'
import { getSearchedTracks } from '../interactors/search/search'
import { getMultipleAudioFeatures } from '../interactors/audioFeatures/audioFeatures'
import integrateToTracks from '../utils/integrateToTracks'

const useSearchTracks = () => {
  const [tracks, setTracks] = useState<Track[]>()
  const [error, setError] = useState<string>()
  const router = useRouter()
  const { search, type: searchType } = router.query

  useEffect(() => {
    const fetch = async () => {
      if (typeof search === 'string' && (searchType === 'track' || searchType === 'artist')) {
        try {
          const searchedTracks = await getSearchedTracks(search, searchType)
          const trackIds = searchedTracks.map(track => track.id).join('%2C')
          const audioFeatures = await getMultipleAudioFeatures(trackIds)
          const tracks = integrateToTracks(searchedTracks, audioFeatures)
          setTracks(() => tracks)
        } catch (error) {
          const message = error.response.status === 401
            ? '認証に失敗しました。更新ボタンを押していただくか再度時間がたってからお試しください。'
            : 'データの取得に失敗しました。再度時間がたってからお試しください。'
          setError(message)
        }
      }
    }
    fetch()
  }, [router.query])
  
  return { tracks, error, search, searchType }
}

export default useSearchTracks