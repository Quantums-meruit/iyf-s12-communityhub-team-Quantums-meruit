import { useState } from 'react'

function Day4Button() {
  const [count, setCount] = useState(0)

  return (
    <article className="challenge-card">
      <h3>Day 4: Events and state</h3>
      <p>Button clicked: {count} times</p>

      <section className="challenge-actions">
        <button type="button" onClick={() => setCount(count + 1)}>
          Increase count
        </button>

        <button
          type="button"
          onClick={() => setCount(0)}
          disabled={count === 0}
        >
          Reset
        </button>
      </section>
    </article>
  )
}

export default Day4Button
