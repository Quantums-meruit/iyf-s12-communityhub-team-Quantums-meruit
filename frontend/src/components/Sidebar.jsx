import UserCard from './UserCard.jsx'

// Collects the feed and community links beside the main content.
function Sidebar({ user }) {
  return (
    <aside className="sidebar" aria-label="Community navigation">
      <section className="sidebar-section">
        <h2>Explore</h2>
        <nav className="sidebar-nav" aria-label="Explore">
          <a className="sidebar-link is-active" href="#feed" aria-current="page">
            <span aria-hidden="true">#</span>
            <span>Home feed</span>
          </a>
          <a className="sidebar-link" href="#communities">
            <span aria-hidden="true">+</span>
            <span>Discover communities</span>
          </a>
        </nav>
      </section>
      <section className="sidebar-section" id="communities">
        <h2>Your communities</h2>
        <p className="sidebar-empty">Your joined communities will appear here.</p>
      </section>
      {user && <UserCard user={user} />}
      <p className="sidebar-note">Find your people. Share what matters.</p>
    </aside>
  )
}

export default Sidebar
