import { profile } from '../data/profile'

const BASE = import.meta.env.BASE_URL

// Single résumé download. (Kept the component name so existing call sites
// don't need to change.)
export default function ResumeMenu({ variant = 'solid' }) {
  return (
    <a
      className={`btn ${variant === 'solid' ? 'btn-solid' : 'btn-ghost'} resume-btn`}
      href={`${BASE}${profile.resume}`}
      download
    >
      Résumé
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 1v9m0 0L4.5 6.5M8 10l3.5-3.5M2 13.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
