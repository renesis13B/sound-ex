import React, { VFC } from 'react'
import { Icons } from '../../atoms/Icons'

type Props = {
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const Search: VFC<Props> = (
  { searchValue, setSearchValue, onSubmit },
) => (
  <form
    onSubmit={onSubmit}
    className='relative'
  >
    <input
      type='text'
      onChange={e => setSearchValue(e.target.value)}
      value={searchValue}
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