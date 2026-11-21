import { createContext, useContext, useState } from 'react'
import useFetch from '../hooks/useFetch.js'
import {
  createPost,
  deletePost,
  toggleLike,
} from '../utils/posts.js'

const PostsContext = createContext(null)

const currentUser = {
  id: 'WairimuEvans',
  name: 'Evans Wairimu',
}

function PostsProvider({ children }) {
  const {
    data,
    loading,
    error,
    refetch,
  } = useFetch('https://jsonplaceholder.typicode.com/posts')

  const [localPosts, setLocalPosts] = useState([])

  const apiPosts = (data ?? []).map((post) => ({
    id: post.id,
    title: post.title,
    content: post.body,
    author: {
      id: `member-${post.userId}`,
      name: `Community member ${post.userId}`,
    },
    createdAt: null,
    likes: [],
  }))

  const posts = [...localPosts, ...apiPosts]

  function addPost(content) {
    const newPost = createPost({
      content,
      author: currentUser,
    })

    if (newPost) {
      setLocalPosts((currentPosts) => [newPost, ...currentPosts])
    }
  }

  function likePost(postId) {
    setLocalPosts((currentPosts) =>
      toggleLike(currentPosts, postId, currentUser.id),
    )
  }

  function removePost(postId) {
    setLocalPosts((currentPosts) => {
      const selectedPost = currentPosts.find(
        (post) => post.id === postId,
      )

      if (selectedPost?.author.id !== currentUser.id) {
        return currentPosts
      }

      return deletePost(currentPosts, postId)
    })
  }

  const value = {
    posts,
    loading,
    error,
    refetch,
    addPost,
    likePost,
    removePost,
    currentUser,
  }

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  )
}

function usePosts() {
  const context = useContext(PostsContext)

  if (!context) {
    throw new Error('usePosts must be used inside PostsProvider')
  }

  return context
}

export { PostsProvider, usePosts }
