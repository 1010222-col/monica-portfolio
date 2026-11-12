export function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="eyebrow section-label"><span className="section-number">{number}</span>{children}</div>;
}
