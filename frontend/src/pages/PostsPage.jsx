import { Link } from 'react-router-dom'
import PostList from '../components/PostList.jsx'
import { usePosts } from '../context/PostsContext.jsx'

function PostsPage() {
  const {
    posts,
    loading,
    error,
    refetch,
    currentUser,
    likePost,
    removePost,
  } = usePosts()

  if (loading) {
    return <main className="main-content"><p role="status">Loading community posts...</p></main>
  }

  if (error) {
    return (
      <main className="main-content">
        <p role="alert">Could not load posts: {error}</p>
        <button type="button" onClick={refetch}>Try again</button>
      </main>
    )
  }

  return (
    <main className="main-content">
      <header>
        <h1>Community Posts</h1>
        <p>Explore conversations from the community.</p>
      </header>

      <PostList
        posts={posts}
        currentUserId={currentUser.id}
        onToggleLike={likePost}
        onDeletePost={removePost}
      />

      <p><Link to="/create">Start a new conversation</Link></p>
    </main>
  )
}

export default PostsPage
