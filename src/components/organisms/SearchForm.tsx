import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../contexts/StoreContext'
import { useRouter } from 'next/router'
import Icons from '../atoms/Icons'

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('')
  const { search, dispatch } = useContext(StoreContext)
  const router = useRouter()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch({ type: 'SET_SEARCH', payload: inputValue })
    router.push({
      pathname: '/searches',
      query: { search: `${inputValue}`, type: 'track' },
    })
  }
  useEffect(() => {
    setInputValue(search)
  }, [search])
  return (
    <form
      onSubmit={handleSubmit}
      className='relative'
    >
      <input
        type='text'
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        required
        placeholder='好きな曲を検索 ex: 夜に駆ける'
        className='w-full p-2 sm:p-3 rounded shadow outline-none search-caret'
      />
      <button
        type='submit'
        className='absolute top-0 right-0 w-10 h-10 sm:h-12 text-gray-500 transition-colors hover:text-black ease-in-out duration-300'
      >
        <Icons icon={'SEARCH'} />
      </button>
    </form>
  )
}

export default SearchForm