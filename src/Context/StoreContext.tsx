import { createContext, useReducer } from 'react'
import { NextRouter } from 'next/router'
import { BaseRouter } from 'next/dist/next-server/lib/router/router'

type State = {
  tracks: any
  track: any
  search: any
}

// type Action = {
//   type: 'SET_TERM'
// }

const initialState = {
  // as ~を使う
  tracks: [] as any,
  track: {} as any,
  search: '' as any
}

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.payload.search }
    case 'SET_TRACKS':
      return { ...state, tracks: action.payload.tracks }
    case 'SET_TRACK':
      return { ...state, track: action.payload.track }
    default:
      return state
  }
}

export const StoreContext = createContext({
  globalState: initialState,
  setGlobalState: (search: any) => {},
  setGlobalSearch: (tracks: any) => {},
  setGlobalSelected: (track: any) => {}
})

export const StoreContextProvider = ({children}: any) => {
  const [globalState, dispatch] = useReducer(reducer, initialState)
  const setGlobalState = (search: any) => {
    dispatch({
      type: 'SET_SEARCH',
      payload: {
        search
      }
    })
  }
  const setGlobalSearch = (tracks: any) => {
    dispatch({
      type: 'SET_TRACKS',
      payload: {
        tracks
      }
    })
  }
  const setGlobalSelected = (track: any) => {
    dispatch({
      type: 'SET_TRACK',
      payload: {
        track
      }
    })
  }
  return (
    <StoreContext.Provider
      value={{ globalState, setGlobalState, setGlobalSearch, setGlobalSelected }}
    >
      {children}
    </StoreContext.Provider>
  )
}
