import { Link, useParams } from 'react-router-dom'
import { usePosts } from '../context/usePosts.js'

function PostDetailPage() {
  const { postId } = useParams()
  const { posts, loading, error, refetch } = usePosts()

  // Local posts must remain accessible even if the remote API is unavailable.
  const post = posts.find((item) => String(item.id) === postId)

  if (loading && !post) {
    return <main className="main-content"><p role="status">Loading post...</p></main>
  }

  if (error && !post) {
    return (
      <main className="main-content">
        <p role="alert">Could not load this post: {error}</p>
        <button type="button" onClick={refetch}>Try again</button>
      </main>
    )
  }

  if (!post) {
    return (
      <main className="main-content">
        <h1>Post not found</h1>
        <Link to="/posts">Back to posts</Link>
      </main>
    )
  }

  return (
    <main className="main-content">
      <article>
        <h1>{post.title || 'Community post'}</h1>
        <p>{post.content}</p>
        <p>Author: {post.author.name}</p>
      </article>

      <Link to="/posts">Back to posts</Link>
    </main>
  )
}

export default PostDetailPage
