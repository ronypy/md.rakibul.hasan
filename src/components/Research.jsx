import { publications } from '../data/publications'
import { education } from '../data/education'
import { profile } from '../data/profile'
import Reveal from './Reveal'

const phd = education[0]

// Map a publication's status to a display label + pill class.
function statusPill(status = '') {
  const s = status.toLowerCase()
  if (s.includes('review')) return { label: 'Under review', className: 'pub-status-review' }
  if (s.includes('accept')) return { label: 'Accepted', className: 'pub-status-accepted' }
  return { label: 'Published', className: 'pub-status-published' }
}

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="section-inner">
        <Reveal as="div" className="section-head">
          <p className="section-eyebrow">Research &amp; publications</p>
          <h2 className="section-title">Turning database tuning into a decision problem</h2>
        </Reveal>

        <Reveal as="div" className="dissertation-card">
          <p className="dissertation-label">Dissertation</p>
          <p className="dissertation-title">{phd.dissertation.replace('Dissertation: ', '')}</p>
          <p className="dissertation-meta">{phd.extra}</p>
        </Reveal>

        <ul className="pub-list">
          {publications.map((pub, i) => (
            <Reveal as="li" key={pub.title} delay={Math.min(i * 40, 200)} className="pub-item">
              <div className="pub-venue">
                <span className="pub-badge">
                  {pub.venue} {pub.year}
                </span>
                {(() => {
                  const pill = statusPill(pub.status)
                  return <span className={`pub-status ${pill.className}`}>{pill.label}</span>
                })()}
              </div>
              <div className="pub-body">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-note">{pub.note}</p>
                <div className="pub-links">
                  {pub.doi && (
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="pub-link">
                      View paper &rarr;
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <p className="pub-footnote">
          Full list with abstracts on{' '}
          <a href={profile.scholar} target="_blank" rel="noopener noreferrer" className="inline-link">
            Google Scholar
          </a>.
        </p>
      </div>
    </section>
  )
}
