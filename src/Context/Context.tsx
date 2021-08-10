import { createContext, useReducer } from 'react'

type State = {
  searched: Array
  term: string
}

// type Action = {
//   type: 'SET_TERM'
// }

const initialState = {
  // as ~を使う
  searched: [],
  term: ''
}

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case 'SET_TERM':
      return { ...state, term: action.payload.term }
    case 'SET_SEARCHED':
      return { ...state, searched: action.payload }
    default:
      return state
  }
}

export const Context = createContext({
  globalState: initialState,
  setGlobalState: (term: any) => {}
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
  return (
    <Context.Provider value={{ globalState, setGlobalState }}>{children}</Context.Provider>
  )
}
