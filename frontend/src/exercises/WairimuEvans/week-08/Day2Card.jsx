function Day2Card({ title, children }) {
  return (
    <article className="challenge-card">
      <h3>{title}</h3>
      {children}
    </article>
  )
}

export default Day2Card
