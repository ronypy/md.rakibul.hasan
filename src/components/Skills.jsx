import { skillGroups } from '../data/skills'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <Reveal as="div" className="section-head">
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">Tools I reach for</h2>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal as="div" key={group.title} delay={i * 60} className="skills-card">
              <h3>{group.title}</h3>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span key={item} className="tag tag-mono">{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
