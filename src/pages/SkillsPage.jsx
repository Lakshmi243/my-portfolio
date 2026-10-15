import { profile } from '../data/profile'

export default function SkillsPage() {
  const { skills } = profile

  return (
    <div className="skills-page">
      {skills.map((group) => (
        <section key={group.title}>
          <h2 className="content-heading">{group.title}</h2>
          <ul className="skill-chips">
            {group.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
