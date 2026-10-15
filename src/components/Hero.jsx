import { profile } from '../data/profile'
import SocialLinks from './SocialLinks'

export default function Hero() {
  const { firstName, role, location, contact } = profile

  return (
    <header className="hero">
      <h1 className="hero-title">Hi, I&apos;m {firstName}</h1>
      <p className="hero-subtitle">
        <span className="role-badge">{role}</span>
      </p>
      {location && <p className="hero-location">{location}</p>}
      {contact?.email && (
        <p className="hero-contact">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      )}
      <SocialLinks />
    </header>
  )
}
