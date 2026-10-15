import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p className="site-footer-copy">
        © {year} {profile.fullName}. All rights reserved.
      </p>
    </footer>
  )
}
