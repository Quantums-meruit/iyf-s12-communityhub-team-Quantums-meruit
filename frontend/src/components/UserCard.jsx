import Card from './Card.jsx'

// Shows a compact member identity for sidebars and community lists.
function UserCard({ user = {}, className = '', ...props }) {
  const name = user.name || 'Community member'
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
  const classes = ['user-card', className].filter(Boolean).join(' ')

  return (
    <Card className={classes} {...props}>
      {user.avatarUrl ? (
        <img className="user-card__avatar" src={user.avatarUrl} alt="" />
      ) : (
        <span className="user-card__avatar user-card__avatar--fallback" aria-hidden="true">
          {initials}
        </span>
      )}
      <span className="user-card__identity">
        <span className="user-card__name">{name}</span>
        {user.username && (
          <span className="user-card__username">@{user.username}</span>
        )}
      </span>
    </Card>
  )
}

export default UserCard
