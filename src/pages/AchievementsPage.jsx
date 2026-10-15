import HackathonMoments from '../components/HackathonMoments'
import { profile } from '../data/profile'

const hackathonImageModules = import.meta.glob(
  '../assets/hackathonimages/*.{png,jpg,jpeg,webp,gif,PNG,JPG,JPEG,WEBP,GIF}',
  { eager: true, import: 'default' },
)

const awardImageModules = import.meta.glob(
  '../assets/awards/*.{png,jpg,jpeg,webp,gif,PNG,JPG,JPEG,WEBP,GIF}',
  { eager: true, import: 'default' },
)

function getGalleryImages(modules) {
  return Object.entries(modules)
    .map(([path, src]) => ({
      id: path,
      src,
      alt: 'Photo',
    }))
    .sort((a, b) => a.id.localeCompare(b.id))
}

export default function AchievementsPage() {
  const { certifications, awards, hackathons } = profile
  const hackathonImages = getGalleryImages(hackathonImageModules)
  const awardImages = getGalleryImages(awardImageModules)

  const showAwardsPlaceholder =
    awards.length === 0 && awardImages.length === 0

  return (
    <div className="achievements-page">
      <h2 className="content-heading">Achievements</h2>

      <section className="achievements-section" aria-labelledby="certifications-heading">
        <h3 id="certifications-heading" className="achievements-subheading">
          Certifications
        </h3>
        <ul className="certification-list">
          {certifications.map((cert) => (
            <li key={cert.id} className="certification-item">
              <div className="certification-badge">{cert.code}</div>
              <div className="certification-body">
                <p className="certification-title">{cert.title}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-link"
                >
                  View credential on Microsoft Learn
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="achievements-section achievements-section--moments"
        aria-labelledby="awards-heading"
      >
        <h3 id="awards-heading" className="achievements-subheading">
          Awards
        </h3>

        {awards.length > 0 && (
          <ul className="award-list award-list--with-photos">
            {awards.map((award) => (
              <li key={award.id} className="award-item">
                <span className="award-title">{award.title}</span>
                {(award.year || award.organization) && (
                  <span className="award-meta">
                    {[award.organization, award.year].filter(Boolean).join(' · ')}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}

        {showAwardsPlaceholder && (
          <p className="achievements-placeholder">
            Award names will appear here—send your list to add them, or edit{' '}
            <code>awards</code> in <code>src/data/profile.js</code>.
          </p>
        )}

        {awardImages.length > 0 && (
          <div className="awards-photos">
            <HackathonMoments
              images={awardImages}
              emptyHint="Add photos to src/assets/awards."
            />
          </div>
        )}
      </section>

      <section
        className="achievements-section achievements-section--moments"
        aria-labelledby="hackathons-heading"
      >
        <p className="moments-eyebrow" id="hackathons-heading">
          Hackathons &amp; tech summits
        </p>
        <HackathonMoments
          images={hackathonImages}
          description={hackathons.description}
          emptyHint="Add photos to src/assets/hackathonimages."
        />
      </section>
    </div>
  )
}
