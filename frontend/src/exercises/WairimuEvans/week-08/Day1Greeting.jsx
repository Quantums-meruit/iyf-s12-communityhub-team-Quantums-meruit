function Day1Greeting({ name, isReturning = false }) {
  return (
    <article className="challenge-card">
      <h3>Day 1: Props and conditional rendering</h3>
      <p>
        {isReturning
          ? `Welcome back, ${name}!`
          : `Hello, ${name}! Welcome to CommunityHub.`}
      </p>
    </article>
  )
}

export default Day1Greeting
