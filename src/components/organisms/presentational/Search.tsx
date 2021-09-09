import React, { VFC } from 'react'
import { SearchState, setSearch } from '../../../store/search/searchSlice'
import { AppDispatch } from '../../../store/store'
import { SearchSubmitHandler } from '../../../hocks/useSearchStore'

type Props = {
  searchState: SearchState
  dispatch: AppDispatch
  submitHandler: SearchSubmitHandler
}

const Search: VFC<Props> = ({ searchState, dispatch, submitHandler }) => {
  return (
    <form
      onSubmit={(e) => submitHandler(searchState.search, 'track', e)}
      className='relative'
    >
      <input
        type='text'
        onChange={e => {
          dispatch(setSearch(e.target.value))
        }}
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
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </button>
    </form>
  )
}

export default Search