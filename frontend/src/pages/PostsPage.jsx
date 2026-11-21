import { Link } from 'react-router-dom'
import PostList from '../components/PostList.jsx'
import { usePosts } from '../context/PostsContext.jsx'

function PostsPage() {
  const {
    filteredPosts,
    loading,
    error,
    refetch,
    likePost,
    removePost,
    currentUser,
    searchQuery,
    setSearchQuery,
  } = usePosts()

  return (
    <main className="page-content">
      <header className="page-heading">
        <section>
          <h1>Community Posts</h1>
          <p>Explore conversations from the community.</p>
        </section>

        <Link to="/create" className="button button-primary">
          Create Post
        </Link>
      </header>

      <section className="post-search" aria-label="Search posts">
        <label htmlFor="post-search-input">
          Search posts
        </label>

        <input
          id="post-search-input"
          type="search"
          placeholder="Search by title, content or author..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </section>

      {loading && (
        <p role="status">Loading community posts...</p>
      )}

      {error && (
        <section className="error-message" role="alert">
          <p>We couldn't load the community posts.</p>
          <p>{error}</p>
          <button type="button" onClick={refetch}>
            Try again
          </button>
        </section>
      )}

      {!loading && !error && (
        <section aria-live="polite">
          {filteredPosts.length === 0 ? (
            <p>
              {searchQuery
                ? 'No posts match your search.'
                : 'There are no posts yet.'}
            </p>
          ) : (
            <PostList
              posts={filteredPosts}
              onLike={likePost}
              onDelete={removePost}
              currentUserId={currentUser.id}
            />
          )}
        </section>
      )}
    </main>
  )
}

export default PostsPage