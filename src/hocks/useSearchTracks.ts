import { getAudioFeatures, searchItem } from '../interactors/api/spotifyInteractor'
import { useEffect, useState } from 'react'
import { TrackSimplified } from '../types/track'
import { useRouter } from 'next/router'
import searchMapper from '../interactors/mapper/searchMapper'

const useSearchTracks = () => {
  const [tracks, setTracks] = useState<TrackSimplified[]>()
  const [error, setError] = useState<string>()
  const router = useRouter()
  const { search, type } = router.query

  useEffect(() => {
    const fetch = async () => {
      if (typeof search === 'string' && (type === 'track' || type === 'artist')) {
        try {
          const tracks = await searchItem(search, type, true)
          const trackIds = tracks.data.tracks.items.map(track => track.id).join('%2C')
          const audioFeatures = await getAudioFeatures(trackIds, true)
          setTracks(searchMapper(tracks.data.tracks.items, audioFeatures.data))
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


  return { tracks, error, search }
}

export default useSearchTracks