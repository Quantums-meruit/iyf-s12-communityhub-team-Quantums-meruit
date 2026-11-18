import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
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
    <div className="app">
      <Header />
      <section className="app-layout" aria-label="Community feed layout">
        <Sidebar user={communityMember} />
        <main className="main-content" id="feed">
          <section className="welcome-card" id="home">
            <p className="eyebrow">YOUR SPACE, YOUR PEOPLE</p>
            <h1>Welcome to your community.</h1>
            <p>
              A place to connect, share ideas, and keep up with the groups you
              care about.
            </p>
          </section>
          <UserProfile user={communityMember} />
          <section className="feed-placeholder" aria-labelledby="feed-heading">
            <div>
              <p className="eyebrow">COMMUNITY UPDATES</p>
              <h2 id="feed-heading">Your feed starts here</h2>
              <p>
                Join a conversation or explore a community to see what everyone
                is sharing.
              </p>
            </div>
            <a className="text-link" href="#communities">Explore communities</a>
          </section>
        </main>
      </section>
      <Footer />
    </div>
  )
}

export default App
