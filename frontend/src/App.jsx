import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <section className="app-layout" aria-label="Community feed layout">
        <Sidebar />
        <main className="main-content" id="feed">
          <section className="welcome-card" id="home">
            <p className="eyebrow">YOUR SPACE, YOUR PEOPLE</p>
            <h1>Welcome to your community.</h1>
            <p>
              A place to connect, share ideas, and keep up with the groups you
              care about.
            </p>
          </section>
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
