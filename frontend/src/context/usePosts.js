import { useContext } from 'react'
import { PostsContext } from './PostsContextValue.js'

export function usePosts() {
  const context = useContext(PostsContext)

  if (!context) {
    throw new Error('usePosts must be used inside PostsProvider')
  }

  return context
}
