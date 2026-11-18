function Day5PageLayout() {
  return (
    <article className="challenge-card">
      <h3>Day 5: Component composition and layout</h3>

      <section
        className="sample-layout"
        aria-labelledby="sample-layout-heading"
      >
        <h4 id="sample-layout-heading">Example page structure</h4>

        <header id="challenge-home">
          <h5>CommunityHub</h5>
        </header>

        <nav aria-label="Example navigation">
          <a href="#challenge-home">Home</a>
          <a href="#challenge-community">Community</a>
          <a href="#challenge-profile">Profile</a>
        </nav>

        <section
          className="sample-layout__main"
          id="challenge-community"
          aria-labelledby="sample-content-heading"
        >
          <h5 id="sample-content-heading">Welcome to the community</h5>
          <p>This is the main content area.</p>
        </section>

        <aside id="challenge-profile" aria-labelledby="sample-aside-heading">
          <h5 id="sample-aside-heading">Quick information</h5>
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
