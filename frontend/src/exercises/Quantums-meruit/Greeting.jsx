import './daily-challenges.css'

function Greeting({ name = 'Guest', timeOfDay = 'morning' }) {
  const normalizedTime = timeOfDay.toLowerCase()
  const message = normalizedTime === 'morning'
    ? 'Good morning'
    : normalizedTime === 'afternoon'
      ? 'Good afternoon'
      : normalizedTime === 'evening'
        ? 'Good evening'
        : 'Hello'

  return (
    <section className="daily-greeting" aria-live="polite">
      <h2>{message}, {name}!</h2>
    </section>
  )
}

export default Greeting
