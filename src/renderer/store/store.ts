import { createStore, createHook } from 'react-sweet-state'

import { createContext } from 'react'

export const StoreContext = createContext({})
StoreContext.displayName = 'StoreContext'

const initialState = {}

const actions = {}

const Store = createStore({ initialState, actions })

export const useStore = createHook(Store)
