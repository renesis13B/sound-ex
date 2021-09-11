import { useInfiniteQuery } from 'react-query'
import { useRouter } from 'next/router'
import * as queryString from 'querystring'
import { getSearchedTracks } from '../interactors/search/search'
import { Track } from '../types/track'

type TrackList = {
  tracks: Track[]
  next: string | null
}

const useSearchedTracks = () => {
  const router = useRouter()
  const search = queryString.parse(router.asPath.split(/\?/)[1])['search'] as string
  const type = queryString.parse(router.asPath.split(/\?/)[1])['type'] as string

  const {
    data: searchedTracks,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<TrackList, Error>(
    ['search', search, type],
    ({ pageParam = 0 }) => getSearchedTracks(search, type, pageParam),
    {
      staleTime: 60000, getNextPageParam: (lastPage) => {
        return lastPage.next
      },
    },
  )
  return {
    searchedTracks,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  }
}

export default useSearchedTracks