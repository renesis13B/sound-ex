import { createContext, Dispatch, ReactNode, useReducer } from 'react'

export type SearchState = {
  search: string
}

type SearchAction = { type: 'SET_SEARCH', payload: string }

export type SearchStateContextType = SearchState
export type SearchDispatchContextType = Dispatch<SearchAction>

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

export const SearchStateContext = createContext<SearchStateContextType>({ search: '' })
export const SearchDispatchContext = createContext<SearchDispatchContextType>({} as SearchDispatchContextType)

export const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const [SearchState, dispatch] = useReducer(reducer, initialState)

  return (
    <SearchStateContext.Provider value={{ ...SearchState }}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  )
}

