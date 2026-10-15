import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { profile } from '../data/profile'
import Footer from './Footer'
import Hero from './Hero'
import NavTabs from './NavTabs'
import ThemeToggle from './ThemeToggle'

const sectionTitles = {
  '/': 'About',
  '/experience': 'Experience',
  '/skills': 'Skills',
  '/projects': 'Projects',
  '/achievements': 'Achievements',
}

export default function Layout() {
  const { pathname } = useLocation()
  const section = sectionTitles[pathname] ?? 'Portfolio'

  useEffect(() => {
    document.title =
      pathname === '/'
        ? `${profile.fullName} - ${profile.role}`
        : `${section} | ${profile.fullName}`
  }, [pathname, section])

  return (
    <div className="site">
      <div className="site-split">
        <div className="site-panel site-panel--main">
          <NavTabs />
          <main className="content-card content-card--panel">
            <Outlet />
          </main>
          <Footer />
        </div>

        <aside className="site-panel site-panel--sidebar" aria-label="Profile">
          <div className="sidebar-toolbar">
            <ThemeToggle />
          </div>
          <Hero />
        </aside>
      </div>
    </div>
  )
}
