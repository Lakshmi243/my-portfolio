import { useState } from 'react'
import { profile } from '../data/profile'

export default function ExperiencePage() {
  const [openId, setOpenId] = useState(profile.experience[0]?.id)

  return (
    <div className="experience-list">
      {profile.experience.map((job) => {
        const isOpen = openId === job.id
        const companyLine = job.client
          ? `${job.company} · ${job.client}`
          : job.company

        return (
          <section key={job.id} className="experience-item">
            <button
              type="button"
              className="experience-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : job.id)}
            >
              <div className="experience-trigger-text">
                <span className="experience-role">{job.role}</span>
                <span className="experience-company">{companyLine}</span>
              </div>
              <span className="experience-meta">
                {job.period} · {job.location}
              </span>
            </button>
            {isOpen && (
              <div className="experience-body">
                <ul>
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="experience-expertise">
                  <strong>Technologies:</strong> {job.expertise}
                </p>
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}
