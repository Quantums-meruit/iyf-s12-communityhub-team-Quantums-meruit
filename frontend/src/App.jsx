import UserProfile from './components/UserProfile.jsx'
import './App.css'

// A small local profile keeps the profile layout visible before profile APIs exist.
const communityMember = {
  name: 'Joseph Kinyanjui',
  username: 'Quantums-meruit',
  bio: 'CommunityHub team lead.',
}

function App() {
  return (
    <main className="app">
      <h1>CommunityHub</h1>
      <UserProfile user={communityMember} />
    </main>
  )
}

export default App
