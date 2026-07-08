import { education } from '../data/education'
import { awards, certifications } from '../data/awards'
import Reveal from './Reveal'

export default function Credentials() {
  return (
    <section id="credentials" className="section">
      <div className="section-inner">
        <Reveal as="div" className="section-head">
          <p className="section-eyebrow">Education &amp; recognition</p>
          <h2 className="section-title">Credentials</h2>
        </Reveal>

        <div className="credentials-grid">
          <Reveal as="div" className="credentials-col">
            <h3 className="credentials-col-title">Education</h3>
            <ul className="education-list">
              {education.map((e) => (
                <li key={e.degree} className="education-item">
                  <h4>{e.degree}</h4>
                  <p className="education-org">{e.org}</p>
                  <p className="education-year">{e.year}{e.detail ? ` \u00b7 ${e.detail}` : ''}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" delay={80} className="credentials-col">
            <h3 className="credentials-col-title">Awards</h3>
            <ul className="award-list">
              {awards.map((a) => (
                <li key={a.title}>
                  <h4>{a.title}</h4>
                  <p>{a.org}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" delay={160} className="credentials-col">
            <h3 className="credentials-col-title">Certifications</h3>
            <ul className="cert-list">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
