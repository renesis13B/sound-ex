import React, { useContext, useEffect, useState } from 'react'
import { SearchDispatchContext, SearchStateContext } from '../contexts/SearchContext'
import { useRouter } from 'next/router'

const useSearchContext = () => {
  const [inputValue, setInputValue] = useState('')
  const { search } = useContext(SearchStateContext)
  const dispatch = useContext(SearchDispatchContext)
  const router = useRouter()
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push({
      pathname: '/searches',
      query: { search: `${inputValue}`, type: 'track' },
    })
  }
  useEffect(() => {
    setInputValue(search)
  }, [search])

  return {
    inputValue,
    setInputValue,
    onSubmit,
    search,
    dispatch,
  }
}

export default useSearchContext