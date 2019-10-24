import * as React from 'react'
import { useStore } from '../store/store'

export default () => {
  const [state, actions] = useStore()
  return <h1>Hello superpowers 🚀</h1>
}
