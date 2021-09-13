import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { resetSearch, selectSearch } from '../store/search/searchSlice'
import { FormEvent } from 'react'

export type SearchSubmitHandler = (searchQuery: string, typeQuery: 'track' | 'artist', e?: FormEvent<HTMLFormElement>) => void

const useSearchStore = () => {
  const router = useRouter()
  const searchState = useAppSelector(selectSearch)
  const dispatch = useAppDispatch()
  const submitHandler: SearchSubmitHandler = (
    searchQuery,
    typeQuery,
    e?,
  ) => {
    e && e.preventDefault()
    dispatch(resetSearch())
    router.push({
      pathname: '/searches',
      query: { search: `${searchQuery}`, type: typeQuery },
    })
  }

  return { searchState, dispatch, submitHandler }
}

export default useSearchStore