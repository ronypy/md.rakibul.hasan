import { experience, typeLabels } from '../data/experience'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <Reveal as="div" className="section-head">
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Between industry and the lab, twice over</h2>
        </Reveal>

        <ol className="timeline">
          {experience.map((item, i) => {
            return (
              <Reveal
                as="li"
                key={item.title + item.period}
                delay={Math.min(i * 50, 200)}
                className={`timeline-item timeline-${item.type}`}
              >
                <div className="timeline-rail">
                  <span className="timeline-dot" />
                </div>
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span className="timeline-type">{typeLabels[item.type]}</span>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-org">{item.org}</p>
                  <ul className="timeline-bullets">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
