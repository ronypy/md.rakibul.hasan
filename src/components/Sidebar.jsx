import { profile } from '../data/profile'
import ResumeMenu from './ResumeMenu'

const BASE = import.meta.env.BASE_URL

const ICONS = {
  email: (
    <path d="M2 4h16v12H2V4zm0 0l8 6 8-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  linkedin: (
    <path d="M3.6 2.2a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8zM2.3 6.3h2.6V17H2.3V6.3zM7 6.3h2.5v1.5h.04c.35-.66 1.2-1.36 2.47-1.36 2.64 0 3.13 1.74 3.13 4V17h-2.6v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V17H6.94V6.3z" fill="currentColor" />
  ),
  github: (
    <path d="M10 1.5a8.5 8.5 0 00-2.69 16.56c.43.08.58-.18.58-.4v-1.5c-2.37.52-2.87-1.14-2.87-1.14-.39-.98-.95-1.24-.95-1.24-.77-.53.06-.52.06-.52.86.06 1.31.88 1.31.88.76 1.3 1.99.93 2.48.71.08-.55.3-.93.54-1.14-1.89-.22-3.88-.95-3.88-4.2 0-.93.33-1.69.88-2.29-.09-.22-.38-1.08.08-2.26 0 0 .72-.23 2.35.87a8.2 8.2 0 014.28 0c1.63-1.1 2.35-.87 2.35-.87.46 1.18.17 2.04.08 2.26.55.6.88 1.36.88 2.29 0 3.26-1.99 3.98-3.89 4.19.31.26.58.78.58 1.57v2.33c0 .23.15.49.59.4A8.5 8.5 0 0010 1.5z" fill="currentColor" />
  ),
  scholar: (
    <path d="M10 2L1 7l9 5 7.5-4.17V13H19V7L10 2zM4 11.5V14c0 1.66 2.69 3 6 3s6-1.34 6-3v-2.5l-6 3.33-6-3.33z" fill="currentColor" />
  ),
}

function Social({ href, label, icon }) {
  const external = !href.startsWith('mailto:')
  return (
    <a
      className="sidebar-social"
      href={href}
      aria-label={label}
      title={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <svg width="20" height="20" viewBox="0 0 20 20">{icon}</svg>
    </a>
  )
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <img
          src={`${BASE}profile-headshot.png`}
          alt={profile.name}
          className="sidebar-photo"
        />
        <h1 className="sidebar-name">{profile.name}</h1>
        <p className="sidebar-tagline">{profile.eyebrow}</p>
        <p className="sidebar-meta">
          {profile.workAuth}. Based in {profile.location}, open to relocation.
        </p>

        <p className="sidebar-getintouch-label">Get in touch</p>
        <div className="sidebar-socials">
          <Social href={`mailto:${profile.email}`} label="Email" icon={ICONS.email} />
          <Social href={profile.linkedin} label="LinkedIn" icon={ICONS.linkedin} />
          <Social href={profile.github} label="GitHub" icon={ICONS.github} />
          <Social href={profile.scholar} label="Google Scholar" icon={ICONS.scholar} />
        </div>

        <div className="sidebar-resume">
          <ResumeMenu variant="solid" />
        </div>
      </div>
    </aside>
  )
}
