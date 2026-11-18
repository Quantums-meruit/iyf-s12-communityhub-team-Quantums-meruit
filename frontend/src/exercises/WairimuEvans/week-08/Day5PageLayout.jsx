function Day5PageLayout() {
  return (
    <article className="challenge-card">
      <h3>Day 5: Component composition and layout</h3>

      <section className="sample-layout">
        <header>
          <h4>CommunityHub</h4>
        </header>

        <nav aria-label="Example navigation">
          <a href="#home">Home</a>
          <a href="#community">Community</a>
          <a href="#profile">Profile</a>
        </nav>

        <main>
          <h4>Welcome to the community</h4>
          <p>This is the main content area.</p>
        </main>

        <aside>
          <h4>Quick information</h4>
          <p>Connect and share with others.</p>
        </aside>

        <footer>
          <p>CommunityHub example layout</p>
        </footer>
      </section>
    </article>
  )
}

export default Day5PageLayout
