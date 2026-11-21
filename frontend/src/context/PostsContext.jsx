import {
  useMemo,
  useState,
} from 'react'
import useFetch from '../hooks/useFetch.js'
import useLocalStorage from '../hooks/useLocalStorage.js'
import { PostsContext } from './PostsContextValue.js'
import {
  createPost,
  deletePost,
  toggleLike,
} from '../utils/posts.js'
import { filterPosts } from '../utils/postSearch.js'

const currentUser = {
  id: 'Quantums-meruit',
  name: 'Joseph Kinyanjui',
}

function PostsProvider({ children }) {
  const {
    data,
    loading,
    error,
    refetch,
  } = useFetch('https://jsonplaceholder.typicode.com/posts')

  // Keep user-created content and API likes when the browser is refreshed.
  const [localPosts, setLocalPosts] = useLocalStorage(
    'communityhub:local-posts',
    [],
  )
  const [apiLikes, setApiLikes] = useLocalStorage(
    'communityhub:api-likes',
    {},
  )
  const [searchQuery, setSearchQuery] = useState('')

  const apiPosts = useMemo(() => {
    return (data ?? []).map((post) => ({
      id: post.id,
      title: post.title,
      content: post.body,
      author: {
        id: `member-${post.userId}`,
        name: `Community member ${post.userId}`,
      },
      createdAt: null,
      likes: apiLikes[post.id] ?? [],
    }))
  }, [data, apiLikes])

  const posts = useMemo(
    () => [...localPosts, ...apiPosts],
    [localPosts, apiPosts],
  )

  const filteredPosts = useMemo(
    () => filterPosts(posts, searchQuery),
    [posts, searchQuery],
  )

  function addPost(content) {
    const newPost = createPost({
      content,
      author: currentUser,
    })

    if (!newPost) return null

    setLocalPosts((currentPosts) => [
      newPost,
      ...currentPosts,
    ])

    return newPost
  }

  function likePost(postId) {
    const isLocalPost = localPosts.some(
      (post) => String(post.id) === String(postId),
    )

    if (isLocalPost) {
      setLocalPosts((currentPosts) =>
        toggleLike(currentPosts, postId, currentUser.id),
      )
      return
    }

    setApiLikes((currentLikes) => {
      const existingLikes = currentLikes[postId] ?? []
      const alreadyLiked = existingLikes.includes(currentUser.id)

      return {
        ...currentLikes,
        [postId]: alreadyLiked
          ? existingLikes.filter((id) => id !== currentUser.id)
          : [...existingLikes, currentUser.id],
      }
    })
  }

  function removePost(postId) {
    setLocalPosts((currentPosts) => {
      const selectedPost = currentPosts.find(
        (post) => String(post.id) === String(postId),
      )

      if (selectedPost?.author.id !== currentUser.id) {
        return currentPosts
      }

      return deletePost(currentPosts, postId)
    })
  }

  const value = {
    posts,
    filteredPosts,
    loading,
    error,
    refetch,
    addPost,
    likePost,
    removePost,
    currentUser,
    searchQuery,
    setSearchQuery,
  }

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  )
}

export { PostsProvider }
