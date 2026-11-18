import Button from './Button.jsx'
import Card from './Card.jsx'

// Presents a member's profile details and an optional edit action.
function UserProfile({ user = {}, onEdit }) {
  const name = user.name || 'Community member'
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <Card className="user-profile" id="profile">
      <section aria-labelledby="user-profile-heading">
        <div className="user-profile__header">
          {user.avatarUrl ? (
            <img className="user-profile__avatar" src={user.avatarUrl} alt="" />
          ) : (
            <span className="user-profile__avatar user-profile__avatar--fallback" aria-hidden="true">
              {initials}
            </span>
          )}
          <div className="user-profile__identity">
            <p className="eyebrow">MEMBER PROFILE</p>
            <h2 id="user-profile-heading">{name}</h2>
            {user.username && <p className="user-profile__username">@{user.username}</p>}
          </div>
          {onEdit && (
            <Button onClick={onEdit} variant="secondary">
              Edit profile
            </Button>
          )}
        </div>
        {user.bio && <p className="user-profile__bio">{user.bio}</p>}
      </section>
    </Card>
  )
}

export default UserProfile
