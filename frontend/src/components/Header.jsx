function Header() {
  return (
    <header className="site-header">
      <a className="site-brand" href="#home" aria-label="CommunityHub home">
        <span className="site-brand-mark" aria-hidden="true">C</span>
        <span>CommunityHub</span>
      </a>
      <nav className="header-nav" aria-label="Main navigation">
        <a href="#feed">Feed</a>
        <a href="#communities">Communities</a>
        <a href="#about">About</a>
      </nav>
    </header>
  )
}

export default Header
