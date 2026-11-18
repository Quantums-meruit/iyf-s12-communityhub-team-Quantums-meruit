import './daily-challenges.css'

function UserCard({ user }) {
  return (
    <li className="daily-user-card">
      <strong>{user.name}</strong>
      {user.username && <span>@{user.username}</span>}
    </li>
  )
}

function UserList({ users = [] }) {
  if (users.length === 0) {
    return <p className="daily-empty">No users found.</p>
  }

  return (
    <ul className="daily-user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  )
}

export default UserList
