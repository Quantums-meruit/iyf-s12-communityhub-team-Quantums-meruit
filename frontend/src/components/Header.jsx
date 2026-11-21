import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <Link className="site-brand" to="/" aria-label="CommunityHub home">
        <span className="site-brand-mark" aria-hidden="true">C</span>
        <span>CommunityHub</span>
      </Link>

      <nav className="header-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/create">Create post</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Header
