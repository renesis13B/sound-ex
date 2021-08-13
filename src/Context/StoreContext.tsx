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
  setSearch: (search: any) => {},
  setTracks: (tracks: any) => {},
  setTrack: (track: any) => {}
})

export const StoreContextProvider = ({children}: any) => {
  const [globalState, dispatch] = useReducer(reducer, initialState)
  const setSearch = (search: any) => {
    dispatch({
      type: 'SET_SEARCH',
      payload: {
        search
      }
    })
  }
  const setTracks = (tracks: any) => {
    dispatch({
      type: 'SET_TRACKS',
      payload: {
        tracks
      }
    })
  }
  const setTrack = (track: any) => {
    dispatch({
      type: 'SET_TRACK',
      payload: {
        track
      }
    })
  }
  return (
    <StoreContext.Provider
      value={{ globalState, setSearch, setTracks, setTrack }}
    >
      {children}
    </StoreContext.Provider>
  )
}
