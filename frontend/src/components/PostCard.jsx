import Button from './Button.jsx'

function PostCard({ post, currentUserId, onToggleLike, onDeletePost }) {
  const isLiked = post.likes.includes(currentUserId)
  const isAuthor = post.author.id === currentUserId

  const formattedDate = new Intl.DateTimeFormat('en-KE', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(post.createdAt))

  return (
    <article className="post-card" aria-labelledby={`post-${post.id}`}>
      <header className="post-card__header">
        <section>
          <h3 id={`post-${post.id}`}>{post.author.name}</h3>
          <p>@{post.author.id}</p>
        </section>

        <time dateTime={post.createdAt}>{formattedDate}</time>
      </header>

      <p className="post-card__content">{post.content}</p>

      <footer className="post-card__footer">
        <Button
          variant="ghost"
          type="button"
          aria-pressed={isLiked}
          onClick={() => onToggleLike(post.id)}
        >
          {isLiked ? '♥ Liked' : '♡ Like'} · {post.likes.length}
        </Button>

        {isAuthor && (
          <Button
            variant="ghost"
            type="button"
            onClick={() => onDeletePost(post.id)}
          >
            Delete
          </Button>
        )}
      </footer>
    </article>
  )
}

export default PostCard
