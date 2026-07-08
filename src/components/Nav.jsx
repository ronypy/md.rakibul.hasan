import { useEffect, useState } from "react";
import ResumeMenu from "./ResumeMenu";

const LINKS = [
  { id: "focus", label: "Focus" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "teaching", label: "Teaching" },
  { id: "credentials", label: "Education" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <button key={link.id} onClick={() => goTo(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <ResumeMenu variant="ghost" />
          <button
            className="nav-burger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="nav-mobile-panel">
          {LINKS.map((link) => (
            <button key={link.id} onClick={() => goTo(link.id)}>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
