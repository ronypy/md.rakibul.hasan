import { useEffect, useRef, useState } from 'react'

// Wraps children and adds an "in-view" class the first time the element
// scrolls into the viewport. Keeps motion subtle and one-time (no re-trigger
// on scroll back up, so it never feels twitchy).
export default function Reveal({ children, as, className = '', delay = 0 }) {
  const Tag = as || 'div'
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
