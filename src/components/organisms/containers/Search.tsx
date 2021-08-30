import React, { useContext, useEffect, useState, VFC } from 'react'
import Search from '../presentational/Search'
import { StoreContext } from '../../../contexts/StoreContext'
import { useRouter } from 'next/router'

const EnhancedSearch: VFC = () => {
  const [searchValue, setSearchValue] = useState('')
  const { search, dispatch } = useContext(StoreContext)
  const router = useRouter()
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch({ type: 'SET_SEARCH', payload: searchValue })
    router.push({
      pathname: '/searches',
      query: { search: `${searchValue}`, type: 'track' },
    })
  }
  useEffect(() => {
    setSearchValue(search)
  }, [search])
  return (
    <Search
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      onSubmit={onSubmit}
    />
  )
}

export default EnhancedSearch