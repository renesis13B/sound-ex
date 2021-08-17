import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { Track, TrackSimplified } from '../models/track'

type StoreState = {
  search: string
  track: Track
  tracks: TrackSimplified[]
}

type StoreAction =
  | { type: 'SET_TRACK', payload: Track }
  | { type: 'SET_TRACKS', payload: TrackSimplified[] }
  | { type: 'SET_SEARCH', payload: string }

type StoreContextType = StoreState & {dispatch: Dispatch<StoreAction>}

const reducer = (state: StoreState, action: StoreAction) => {
  switch (action.type) {
    case 'SET_TRACK':
      return { ...state, track: action.payload }
    case 'SET_TRACKS':
      return { ...state, tracks: action.payload }
    case 'SET_SEARCH':
      return { ...state, search: action.payload }
    default:
      return state
  }
}
// TODO: 初期値見直し必要かも。。
const initialState: StoreState = {
  search: '',
  track: {} as Track,
  tracks: [] as TrackSimplified[]
}

export const StoreContext = createContext<StoreContextType>(
  initialState as StoreContextType
)

export const StoreContextProvider = ({children}: { children: ReactNode }) => {
  const [storeState, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{...storeState, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

