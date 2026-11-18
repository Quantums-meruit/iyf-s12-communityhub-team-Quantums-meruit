import PostCard from './PostCard.jsx'

function PostList({
  posts,
  currentUserId,
  onToggleLike,
  onDeletePost,
}) {
  return (
    <section className="post-list" aria-labelledby="post-list-heading">
      <header className="post-list__header">
        <h2 id="post-list-heading">Community feed</h2>
        <span>{posts.length} posts</span>
      </header>

      {posts.length === 0 ? (
        <p className="post-list__empty">
          No posts yet. Be the first to start a conversation!
        </p>
      ) : (
        <section className="post-list__items">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              currentUserId={currentUserId}
              onToggleLike={onToggleLike}
              onDeletePost={onDeletePost}
            />
          ))}
        </section>
      )}
    </section>
  )
}

export default PostList
