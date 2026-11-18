function Day3UserList({ users = [] }) {
  return (
    <article className="challenge-card">
      <h3>Day 3: Rendering lists</h3>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.role}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default Day3UserList
