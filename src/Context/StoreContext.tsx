import { createContext, useReducer } from 'react'

type State = {
  search: any
  track: any
  tracks: any
}

// type Action = {
//   type: 'SET_TERM'
// }

const initialState = {
  // as ~を使う
  search: '' as any,
  track: {} as any,
  tracks: [] as any
}

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case 'SET_TRACK':
      return { ...state, track: action.payload.track }
    case 'SET_TRACKS':
      return { ...state, tracks: action.payload.tracks }
    case 'SET_SEARCH':
      return { ...state, search: action.payload.search }
    default:
      return state
  }
}

export const StoreContext = createContext({
  globalState: initialState,
  setTrack: (track: any) => {},
  setTracks: (tracks: any) => {},
  setSearch: (search: any) => {},
})

export const StoreContextProvider = ({children}: any) => {
  const [globalState, dispatch] = useReducer(reducer, initialState)
  const setTrack = (track: any) => {
    dispatch({
      type: 'SET_TRACK',
      payload: {
        track
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
  const setSearch = (search: any) => {
    dispatch({
      type: 'SET_SEARCH',
      payload: {
        search
      }
    })
  }

  const value = { globalState, setTrack, setTracks, setSearch}
  return (
    <StoreContext.Provider value={ value }>
      {children}
    </StoreContext.Provider>
  )
}
