import { NavLink } from 'react-router-dom'
import UserCard from './UserCard.jsx'

function Sidebar({ user }) {
  return (
    <aside className="sidebar" aria-label="Community navigation">
      <section className="sidebar-section">
        <h2>Explore</h2>

        <nav className="sidebar-nav" aria-label="Explore">
          <NavLink
            className={({ isActive }) =>
              `sidebar-link${isActive ? ' is-active' : ''}`
            }
            to="/"
            end
          >
            <span aria-hidden="true">#</span>
            <span>Home feed</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `sidebar-link${isActive ? ' is-active' : ''}`
            }
            to="/posts"
          >
            <span aria-hidden="true">+</span>
            <span>All posts</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `sidebar-link${isActive ? ' is-active' : ''}`
            }
            to="/create"
          >
            <span aria-hidden="true">✎</span>
            <span>Create post</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `sidebar-link${isActive ? ' is-active' : ''}`
            }
            to="/about"
          >
            <span aria-hidden="true">i</span>
            <span>About</span>
          </NavLink>
        </nav>
      </section>

      <section className="sidebar-section" id="communities">
        <h2>Your communities</h2>
        <p className="sidebar-empty">
          Your joined communities will appear here.
        </p>
      </section>

      {user && <UserCard user={user} />}

      <p className="sidebar-note">
        Find your people. Share what matters.
      </p>
    </aside>
  )
}

export default Sidebar
