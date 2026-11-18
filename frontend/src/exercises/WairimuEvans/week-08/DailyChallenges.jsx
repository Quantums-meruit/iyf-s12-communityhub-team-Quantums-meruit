import Day1Greeting from './Day1Greeting.jsx'
import Day2Card from './Day2Card.jsx'
import Day3UserList from './Day3UserList.jsx'
import Day4Button from './Day4Button.jsx'
import Day5PageLayout from './Day5PageLayout.jsx'
import './challenges.css'

const sampleUsers = [
  { id: 1, name: 'Evans', role: 'Developer' },
  { id: 2, name: 'Alex', role: 'Designer' },
  { id: 3, name: 'Jordan', role: 'Community member' },
]

function DailyChallenges() {
  return (
    <section className="daily-challenges">
      <header className="challenges-header">
        <h2>Week 8: React Daily Challenges</h2>
        <p>Five exercises covering the fundamentals of React.</p>
      </header>

      <Day1Greeting name="Evans" isReturning={true} />

      <Day2Card title="Day 2: Reusable components and children">
        <p>
          This content is passed from the parent component using the children
          prop.
        </p>
      </Day2Card>

      <Day3UserList users={sampleUsers} />

      <Day4Button />

      <Day5PageLayout />
    </section>
  )
}

export default DailyChallenges
