import { createContext, useReducer } from 'react'
import { NextRouter } from 'next/router'
import { BaseRouter } from 'next/dist/next-server/lib/router/router'

type State = {
  searched: any
  selected: any
  term: any
}

// type Action = {
//   type: 'SET_TERM'
// }

const initialState = {
  // as ~を使う
  searched: [] as any,
  selected: {} as any,
  term: '' as any
}

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case 'SET_TERM':
      return { ...state, term: action.payload.term }
    case 'SET_SEARCHED':
      return { ...state, searched: action.payload.searched }
    case 'SET_SELECTED':
      return { ...state, selected: action.payload.selected }
    default:
      return state
  }
}

export const Context = createContext({
  globalState: initialState,
  setGlobalState: (term: any) => {},
  setGlobalSearch: (searched: any) => {},
  setGlobalSelected: (selected: any) => {}
})

export const ContextProvider = ({children}: any) => {
  const [globalState, dispatch] = useReducer(reducer, initialState)
  const setGlobalState = (term: any) => {
    dispatch({
      type: 'SET_TERM',
      payload: {
        term
      }
    })
  }
  const setGlobalSearch = (searched: any) => {
    dispatch({
      type: 'SET_SEARCHED',
      payload: {
        searched
      }
    })
  }
  const setGlobalSelected = (selected: any) => {
    dispatch({
      type: 'SET_SELECTED',
      payload: {
        selected
      }
    })
  }
  return (
    <Context.Provider
      value={{ globalState, setGlobalState, setGlobalSearch, setGlobalSelected }}
    >
      {children}
    </Context.Provider>
  )
}
