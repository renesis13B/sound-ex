import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type Search = string

export type SearchState = {
  search: Search
}

const initialState: SearchState = {
  search: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<Search>) => {
      state.search = action.payload
    },
    resetSearch: state => {
      state.search = initialState.search
    },
  },
})

export const { setSearch, resetSearch } = searchSlice.actions
export const selectSearch = (state: RootState) => state.search

export default searchSlice.reducer