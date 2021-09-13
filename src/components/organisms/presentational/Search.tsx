import React, { useRef, VFC } from 'react'
import { SearchState, setSearch } from '../../../store/search/searchSlice'
import { AppDispatch } from '../../../store/store'
import { SearchSubmitHandler } from '../../../hocks/useSearchStore'
import { SearchIcon } from '@heroicons/react/outline'

type Props = {
  searchState: SearchState
  dispatch: AppDispatch
  submitHandler: SearchSubmitHandler
}

const Search: VFC<Props> = ({ searchState, dispatch, submitHandler }) => {
  const searchInput = useRef<HTMLInputElement>(null)
  return (
    <form
      onSubmit={(e) => {
        searchInput.current?.blur()
        submitHandler(searchState.search, 'track', e)
      }}
      className='relative'
    >
      <input
        type='text'
        onChange={e => {
          dispatch(setSearch(e.target.value))
        }}
        ref={searchInput}
        value={searchState.search}
        required
        placeholder='好きな曲を検索'
        className='w-full p-2 sm:p-3 rounded shadow outline-none search-caret'
      />
      <button
        type='submit'
        aria-label='検索ボタン'
        className='
        absolute
        top-0 right-0
        w-10 h-10 sm:h-12
        text-gray-500
        transition-colors
        hover:text-black ease-in-out duration-300
        '
      >
        <SearchIcon className='h-6 w-6' />
      </button>
    </form>
  )
}

export default Search