import { focusAreas } from '../data/focusAreas'
import Reveal from './Reveal'

export default function FocusAreas() {
  return (
    <section id="focus" className="section">
      <div className="section-inner">
        <Reveal as="div" className="section-head">
          <p className="section-eyebrow">What I work on</p>
          <h2 className="section-title">Three threads, one instinct for signal and reward</h2>
        </Reveal>

        <div className="focus-grid">
          {focusAreas.map((area, i) => (
            <Reveal key={area.label} delay={i * 80} className="focus-card">
              <span className="focus-tag">{area.tag}</span>
              <h3>{area.label}</h3>
              <p>{area.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
