import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'
import '../App.css'

const communityMember = {
  name: 'Joseph Kinyanjui',
  username: 'Quantums-meruit',
  bio: 'CommunityHub team lead.',
}

function AppLayout() {
  return (
    <section className="app" aria-label="CommunityHub application">
      <Header />

      <section className="app-layout" aria-label="Community layout">
        <Sidebar user={communityMember} />
        <section className="main-content-wrapper">
          <Outlet />
        </section>
      </section>

      <Footer />
    </section>
  )
}

export default AppLayout
