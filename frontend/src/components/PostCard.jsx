import { Link } from 'react-router-dom'
import Button from './Button.jsx'

function PostCard({ post, currentUserId, onToggleLike, onDeletePost }) {
  const isLiked = post.likes.includes(currentUserId)
  const isAuthor = post.author.id === currentUserId

  const formattedDate = post.createdAt
    ? new Intl.DateTimeFormat('en-KE', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date(post.createdAt))
    : null

  return (
    <article className="post-card" aria-labelledby={`post-${post.id}`}>
      <header className="post-card__header">
        <section>
          <h3 id={`post-${post.id}`}>{post.author.name}</h3>
          <p>@{post.author.id}</p>
        </section>

        {formattedDate && (
          <time dateTime={post.createdAt}>{formattedDate}</time>
        )}
      </header>

      {post.title && <h4>{post.title}</h4>}

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

        <Link to={`/posts/${post.id}`}>Read post</Link>

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
