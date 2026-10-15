import { useEffect, useMemo, useState } from 'react'

const STACK_LAYOUT = [
  { rotate: -16, translateX: -28, zIndex: 1 },
  { rotate: 0, translateX: 0, zIndex: 2 },
  { rotate: 16, translateX: 28, zIndex: 3 },
]

function pickPreviewImages(images) {
  if (images.length <= 3) return images
  const mid = Math.floor(images.length / 2)
  return [images[0], images[mid], images[images.length - 1]]
}

export default function HackathonMoments({
  images,
  description,
  emptyHint = 'Add photos to the folder (PNG, JPG, or WEBP). They will appear here automatically.',
}) {
  const [expanded, setExpanded] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState(null)

  const previewImages = useMemo(() => pickPreviewImages(images), [images])

  useEffect(() => {
    if (!lightboxSrc) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxSrc(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxSrc])

  if (images.length === 0) {
    return (
      <p className="achievements-placeholder">{emptyHint}</p>
    )
  }

  return (
    <div className="moments-block">
      {description ? (
        <p className="moments-description">{description}</p>
      ) : null}

      {!expanded && (
        <div className="moments-stack-wrap">
          <ul className="moments-stack" aria-label="Event photo preview">
            {previewImages.map((image, index) => {
              const layout = STACK_LAYOUT[index] ?? STACK_LAYOUT[1]
              return (
                <li
                  key={image.id}
                  className="moments-stack-card"
                  style={{
                    zIndex: layout.zIndex,
                    transform: `translateX(${layout.translateX}px) rotate(${layout.rotate}deg)`,
                  }}
                >
                  <button
                    type="button"
                    className="moments-photo-btn"
                    onClick={() => setLightboxSrc(image)}
                    aria-label="View photo"
                  >
                    <img src={image.src} alt="" loading="lazy" />
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      {expanded && (
        <ul className="moments-gallery">
          {images.map((image) => (
            <li key={image.id} className="moments-gallery-item">
              <button
                type="button"
                className="moments-photo-btn"
                onClick={() => setLightboxSrc(image)}
                aria-label="View photo"
              >
                <img src={image.src} alt="" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {images.length > 3 && (
        <button
          type="button"
          className="moments-see-all"
          onClick={() => setExpanded((open) => !open)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show stack' : `See all ${images.length}`}
          <span className="moments-see-all-chevron" aria-hidden="true">
            {expanded ? '‹' : '›'}
          </span>
        </button>
      )}

      {lightboxSrc && (
        <div
          className="moments-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo preview"
          onClick={() => setLightboxSrc(null)}
          onKeyDown={(e) => e.key === 'Escape' && setLightboxSrc(null)}
        >
          <button
            type="button"
            className="moments-lightbox-close"
            onClick={() => setLightboxSrc(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={lightboxSrc.src}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
