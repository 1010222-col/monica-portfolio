'use client';
import { useEffect, useState } from 'react';
export function Navigation() {
  const [active, setActive] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id); }, { rootMargin: '-15% 0px -35% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <header className="site-header"><a href="#top" className="wordmark" aria-label="Monica Lasprilla, homepage">MONICA LASPRILLA</a><nav aria-label="Main navigation">{['Work', 'About', 'Approach', 'Contact'].map(label => <a key={label} href={`#${label.toLowerCase()}`} aria-current={active === label.toLowerCase() ? 'location' : undefined}>{label}</a>)}</nav><a className="nav-cta" href="mailto:monicalaspguar@gmail.com">Let’s work together <span aria-hidden="true">↗</span></a></header>;
}
