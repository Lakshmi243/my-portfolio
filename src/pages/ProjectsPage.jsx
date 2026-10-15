import { profile } from '../data/profile'

export default function ProjectsPage() {
  const { projects } = profile

  return (
    <article className="prose projects-page">
      <h2 className="content-heading content-heading-center">
        {projects.headline}
      </h2>
      <p className="text-center">{projects.description}</p>
    </article>
  )
}
