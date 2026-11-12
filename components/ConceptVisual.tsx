import Image from 'next/image';
const visuals = {
  animation: { src: '/images/02_animated_video_production.png', alt: 'Conceptual healthcare animation editing workspace with neutral medical imagery', caption: 'Concept visual · not client footage' },
  audio: { src: '/images/03_multilingual_campaigns_concept.png', alt: 'Conceptual camera production scene illustrating campaign coordination', caption: 'Concept visual · not client footage' },
  film: { src: '/images/arrabalero.jpg', alt: 'Official Arrabalero music video thumbnail', caption: 'Arrabalero · official video thumbnail' },
};
export function ConceptVisual({ kind }: { kind: keyof typeof visuals }) {
  const visual = visuals[kind];
  return <figure className="project-visual"><Image src={visual.src} alt={visual.alt} width={1672} height={941} sizes="(max-width: 640px) 90vw, 45vw" /><figcaption>{visual.caption}</figcaption></figure>;
}
