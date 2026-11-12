'use client';
import { useEffect, useState } from 'react';
const title = 'Monica Lasprilla | Creative Project Manager';
export function StudioEffects() {
  const [intro, setIntro] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animation: Animation | undefined;
    let overlay: HTMLDivElement | null = null;
    let cancelled = false;
    if (!motion.matches && window.scrollY < 30) {
      const wordmark = document.querySelector<HTMLElement>('.site-header .wordmark');
      if (wordmark) {
        overlay = document.createElement('div');
        overlay.className = 'name-intro';
        overlay.setAttribute('aria-hidden', 'true');
        const name = document.createElement('span');
        name.textContent = 'MONICA LASPRILLA';
        overlay.append(name);
        document.body.append(overlay);
        const target = wordmark.getBoundingClientRect();
        const origin = name.getBoundingClientRect();
        const scale = target.width / origin.width;
        wordmark.style.opacity = '0';
        setIntro(true);
        animation = name.animate([
          { transform: 'translate(0, 0) scale(1)', offset: 0 },
          { transform: 'translate(0, 0) scale(1)', offset: 0.18 },
          { transform: `translate(${target.left-origin.left}px, ${target.top-origin.top}px) scale(${scale})`, offset: 1 },
        ], { duration: 1700, easing: 'cubic-bezier(.65,0,.25,1)', fill: 'forwards' });
        overlay.animate([{ background: '#FCF4F0' }, { background: '#FCF4F0', offset: .5 }, { background: 'transparent' }], { duration: 1800, fill: 'forwards' });
        const finish = () => { overlay?.remove(); wordmark.style.opacity = ''; if (!cancelled) setIntro(false); };
        animation.finished.then(finish).catch(finish);
      }
    }

    const onVisibility = () => { document.title = document.hidden ? 'Wait, come back! 👀' : title; };
    document.addEventListener('visibilitychange', onVisibility);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(element => { if (!reduced) { element.classList.add('will-reveal'); observer.observe(element); } });
    return () => { cancelled = true; animation?.cancel(); overlay?.remove(); document.querySelector<HTMLElement>('.site-header .wordmark')?.style.removeProperty('opacity'); document.removeEventListener('visibilitychange', onVisibility); observer.disconnect(); elements.forEach(element => element.classList.remove('will-reveal')); document.title = title; };
  }, []);
  return intro ? <style>{`.hero-copy, .hero-art { animation: name-in .55s 1.1s both; }`}</style> : null;
}
