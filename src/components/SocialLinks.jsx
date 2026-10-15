import { profile } from '../data/profile'

const items = [
  { key: 'github', label: 'GitHub', icon: 'github-icon' },
  { key: 'linkedin', label: 'LinkedIn', icon: 'linkedin-icon' },
  { key: 'email', label: 'Email', icon: 'mail-icon' },
  { key: 'resume', label: 'View Resume', icon: 'resume-icon' },
]

export default function SocialLinks({ className = '' }) {
  const { links } = profile

  return (
    <nav className={`social-links ${className}`} aria-label="Social links">
      {items.map(({ key, label, icon }) => (
        <a
          key={key}
          href={links[key]}
          target={key === 'email' ? undefined : '_blank'}
          rel={key === 'email' ? undefined : 'noopener noreferrer'}
          download={key === 'resume' ? 'AnanthalakshmiP_Resume.docx' : undefined}
          aria-label={label}
          title={label}
        >
          <svg role="presentation" aria-hidden="true" width="20" height="20">
            <use href={`/icons.svg#${icon}`} />
          </svg>
        </a>
      ))}
    </nav>
  )
}
