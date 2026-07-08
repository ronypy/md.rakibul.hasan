import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <Reveal className="hero-copy">
          <h2 className="hero-headline">{profile.headline}</h2>
          <p className="hero-subhead">{profile.subhead}</p>

          <dl className="hero-stats">
            {profile.stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
