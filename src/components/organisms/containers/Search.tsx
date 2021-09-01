import React, { VFC } from 'react'
import Search from '../presentational/Search'
import useSearchContext from '../../../hocks/useSearchContext'

const EnhancedSearch: VFC = () => {
  const { inputValue, setInputValue, onSubmit, dispatch } = useSearchContext()
  return (
    <Search
      inputValue={inputValue}
      setInputValue={setInputValue}
      onSubmit={onSubmit}
      dispatch={dispatch}
    />
  )
}

export default EnhancedSearch