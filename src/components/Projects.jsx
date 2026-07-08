import { projects, additionalProjects } from "../data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <Reveal as="div" className="section-head">
          <p className="section-eyebrow">Selected projects</p>
          <h2 className="section-title">Built end to end</h2>
        </Reveal>

        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.title}
              delay={Math.min(i * 60, 240)}
              className="project-card"
            >
              <h3 className="project-title">{p.title}</h3>
              <p className="project-tagline">{p.tagline}</p>
              <p className="project-body">{p.body}</p>
              <p className="project-metric">{p.metric}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <a
                className="project-link"
                href={p.linkHref}
                target={p.linkType === "external" ? "_blank" : undefined}
                rel={
                  p.linkType === "external" ? "noopener noreferrer" : undefined
                }
                onClick={
                  p.linkType === "anchor"
                    ? (e) => {
                        e.preventDefault();
                        document
                          .getElementById("research")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                    : undefined
                }
              >
                {p.linkLabel} &rarr;
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="additional-projects">
          <p className="additional-projects-label">Also built</p>
          <ul>
            {additionalProjects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
