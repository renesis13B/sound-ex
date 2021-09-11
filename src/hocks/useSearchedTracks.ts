import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import * as queryString from 'querystring'
import { getSearchedTracks } from '../interactors/search/search'
import { Track } from '../types/track'


const useSearchedTracks = () => {
  const router = useRouter()
  const search = queryString.parse(router.asPath.split(/\?/)[1])['search'] as string
  const type = queryString.parse(router.asPath.split(/\?/)[1])['type'] as string

  const { data: searchedTracks, error } = useQuery<Track[], Error>(
    ['search', search, type],
    () => getSearchedTracks(search, type),
    { staleTime: 60000 },
  )
  return {
    searchedTracks,
    error,
  }
}

export default useSearchedTracks