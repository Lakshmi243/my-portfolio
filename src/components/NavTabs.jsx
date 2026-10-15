import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'About', end: true },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/achievements', label: 'Achievements' },
]

export default function NavTabs() {
  return (
    <nav className="tab-nav" role="tablist" aria-label="Portfolio sections">
      {tabs.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          role="tab"
          className={({ isActive }) =>
            `tab-nav-item${isActive ? ' is-active' : ''}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
