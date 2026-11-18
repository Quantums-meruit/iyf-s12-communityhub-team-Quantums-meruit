function Day2Card({ title, children }) {
  return (
    <article className="challenge-card">
      <h3>{title}</h3>
      <section>{children}</section>
    </article>
  )
}

export default Day2Card
