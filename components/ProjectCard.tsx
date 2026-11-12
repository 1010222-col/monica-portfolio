import { ConceptVisual } from './ConceptVisual';
import type { Project } from './projects';
export function ProjectCard({ project }: { project: Project }) {
  return <div className="cascade-card"><article id={`project-${project.number}`} className={`project-card ${project.className}`} aria-labelledby={`title-${project.number}`}>
    <header className="project-card-heading"><div><p className="project-label">{project.category}</p><h3 id={`title-${project.number}`}>{project.title}</h3></div><span className="project-number">({project.number})</span></header>
    <div className="project-card-body"><div className="project-copy"><p className="project-opening">{project.opening}</p><p className="project-description">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    <details className="project-preview"><summary>My involvement <span aria-hidden="true">↗</span></summary><div className="preview-content"><ul>{project.responsibilities.map(item => <li key={item}>{item}</li>)}</ul><p className="case-study-note">Full case study coming soon.</p></div></details>
    {project.number === '03' && <a className="video-link" href="https://www.youtube.com/watch?v=MyJoM7abfT4" target="_blank" rel="noreferrer">Watch the music video ↗</a>}</div><ConceptVisual kind={project.visual} /></div>
  </article></div>;
}
