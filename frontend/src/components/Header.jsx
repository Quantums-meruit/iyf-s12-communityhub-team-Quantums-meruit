import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <Link className="site-brand" to="/" aria-label="CommunityHub home">
        <span className="site-brand-mark" aria-hidden="true">C</span>
        <span>CommunityHub</span>
      </Link>

      <nav className="header-nav" aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'is-active' : undefined}>
          Home
        </NavLink>
        <NavLink to="/posts" className={({ isActive }) => isActive ? 'is-active' : undefined}>
          Posts
        </NavLink>
        <NavLink to="/create" className={({ isActive }) => isActive ? 'is-active' : undefined}>
          Create post
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'is-active' : undefined}>
          About
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
