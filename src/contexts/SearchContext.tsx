import { createContext, Dispatch, ReactNode, useReducer } from 'react'

export type SearchState = {
  search: string
}

type SearchAction = { type: 'SET_SEARCH', payload: string }

export type SearchContextType = SearchState & { dispatch: Dispatch<SearchAction> }

const reducer = (state: SearchState, action: SearchAction) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { search: action.payload }
    default:
      return state
  }
}

const initialState: SearchState = {
  search: '',
}

export const SearchContext = createContext<SearchContextType>(
  initialState as SearchContextType,
)

export const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const [SearchState, dispatch] = useReducer(reducer, initialState)

  return (
    <SearchContext.Provider value={{ ...SearchState, dispatch }}>
      {children}
    </SearchContext.Provider>
  )
}

