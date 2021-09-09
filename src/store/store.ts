import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import searchReducer from './search/searchSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>