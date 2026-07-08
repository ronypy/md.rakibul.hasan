import { teaching } from '../data/teaching'
import Reveal from './Reveal'

export default function Teaching() {
  return (
    <section id="teaching" className="section">
      <div className="section-inner">
        <Reveal as="div" className="section-head">
          <p className="section-eyebrow">Teaching</p>
          <h2 className="section-title">Five years in front of a classroom, not just behind a desk</h2>
          <p className="section-lede">{teaching.intro}</p>
        </Reveal>

        <div className="teaching-grid">
          <div className="teaching-courses">
            {teaching.courses.map((c) => (
              <Reveal as="div" key={c.code} className="course-card">
                <div className="course-head">
                  <span className="course-code">{c.code}</span>
                  <span className="course-role">{c.role}</span>
                </div>
                <h3>{c.name}</h3>
                <p className="course-period">{c.period}</p>
                <p className="course-detail">{c.detail}</p>
              </Reveal>
            ))}
          </div>

          <div className="teaching-quotes">
            {teaching.quotes.map((q) => (
              <Reveal as="figure" key={q.source} className="quote-card">
                <blockquote>&ldquo;{q.text}&rdquo;</blockquote>
                <figcaption>&mdash; {q.source}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
