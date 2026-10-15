import { profile } from '../data/profile'

function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function AboutPage() {
  const { about, contact, location } = profile

  return (
    <article className="prose">
      <h2 className="content-heading">{about.greeting}</h2>
      <p className="lead">
        <RichText text={about.intro} />
      </p>
      <p>
        Over <strong>{about.experienceYears} years</strong>, I&apos;ve delivered
        solutions for global clients. Core strengths:
      </p>
      <ul className="highlight-pills">
        {about.highlightTools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      {about.paragraphs.map((para) => (
        <p key={para}>
          <RichText text={para} />
        </p>
      ))}
      {contact && (
        <p className="about-contact">
          <strong>Contact:</strong>{' '}
          {location}
          {contact.phones?.length > 0 && (
            <>
              {' · '}
              {contact.phones.join(' · ')}
            </>
          )}
          {contact.email && (
            <>
              {' · '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </>
          )}
        </p>
      )}
    </article>
  )
}
