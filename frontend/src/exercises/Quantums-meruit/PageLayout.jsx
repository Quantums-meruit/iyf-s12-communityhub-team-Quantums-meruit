import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import './daily-challenges.css'

function PageLayout({ children, sidebar }) {
  return (
    <div className="daily-page-layout">
      <Header />
      <div className={`daily-page-layout__body${sidebar ? ' daily-page-layout__body--with-sidebar' : ''}`}>
        {sidebar && <aside className="daily-page-layout__sidebar">{sidebar}</aside>}
        <main className="daily-page-layout__main">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout
