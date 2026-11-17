function Sidebar() {
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
        <nav className="sidebar-nav" aria-label="Your communities">
          <a className="sidebar-link" href="#design">
            <span className="community-dot dot-violet" aria-hidden="true" />
            <span>Design Circle</span>
          </a>
          <a className="sidebar-link" href="#technology">
            <span className="community-dot dot-blue" aria-hidden="true" />
            <span>Tech Connect</span>
          </a>
          <a className="sidebar-link" href="#garden">
            <span className="community-dot dot-green" aria-hidden="true" />
            <span>Gardeners' Corner</span>
          </a>
        </nav>
      </section>
      <p className="sidebar-note">Find your people. Share what matters.</p>
    </aside>
  )
}

export default Sidebar
