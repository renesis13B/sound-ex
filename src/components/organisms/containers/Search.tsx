import React, { VFC } from 'react'
import Search from '../presentational/Search'
import useSearchStore from '../../../hocks/useSearchStore'

const EnhancedSearch: VFC = () => {
  const { searchState, dispatch, submitHandler } = useSearchStore()
  return (
    <Search searchState={searchState} dispatch={dispatch} submitHandler={submitHandler} />
  )
}

export default EnhancedSearch