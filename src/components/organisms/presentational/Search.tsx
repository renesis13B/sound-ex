import React, { VFC } from 'react'
import { Icons } from '../../atoms/Icons'
import { SearchDispatchContextType } from '../../../contexts/SearchContext'

type Props = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  dispatch: SearchDispatchContextType
}

const Search: VFC<Props> = (
  { inputValue, setInputValue, onSubmit, dispatch },
) => (
  <form
    onSubmit={onSubmit}
    className='relative'
  >
    <input
      type='search'
      onChange={e => {
        setInputValue(e.target.value)
        dispatch({ type: 'SET_SEARCH', payload: e.target.value })
      }}
      value={inputValue}
      required
      placeholder='好きな曲を検索'
      className='w-full p-2 sm:p-3 rounded shadow outline-none search-caret'
    />
    <button
      type='submit'
      className='
        absolute
        top-0 right-0
        w-10 h-10 sm:h-12
        text-gray-500
        transition-colors
        hover:text-black ease-in-out duration-300
        '
    >
      <Icons icon={'SEARCH'} />
    </button>
  </form>
)

export default Search