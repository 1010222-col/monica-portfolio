'use client';
import { useState } from 'react';
import { projects } from './projects';
import { ConceptVisual } from './ConceptVisual';
export function FeaturedWork() {
  const [selected, setSelected] = useState(0);
  return <section className="featured reveal" aria-labelledby="featured-heading"><div className="featured-header"><h2 id="featured-heading">Featured work</h2><span>CHOOSE A PROJECT <span aria-hidden="true">↗</span></span></div><div className="featured-layout"><div className="featured-options" role="group" aria-label="Choose a project preview">{projects.map((p,i) => <button key={p.number} type="button" aria-pressed={selected === i} aria-controls="featured-preview" onMouseEnter={() => setSelected(i)} onFocus={() => setSelected(i)} onClick={() => setSelected(i)}><span>{p.number}</span>{p.title}<span className="option-arrow" aria-hidden="true">↗</span></button>)}</div><div id="featured-preview" className="featured-preview"><div key={selected} className="preview-image"><ConceptVisual kind={projects[selected].visual} /></div><a href={`#project-${projects[selected].number}`}>Explore {projects[selected].category} <span aria-hidden="true">↗</span></a></div></div></section>;
}
