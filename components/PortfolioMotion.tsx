'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function PortfolioMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const lenis = new Lenis({ duration: 1.25, smoothWheel: true, anchors: true });
      const tick = (time: number) => lenis.raf(time * 1000);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(tick);
      const bubbles = gsap.utils.toArray<HTMLElement>('.portfolio-drop-bubble');
      const rotations = [-13, 11, 8, -11];
      const drop = gsap.fromTo(bubbles,
        { y: -430, autoAlpha: 0, rotation: i => rotations[i] - 18 },
        { y: 0, autoAlpha: 1, rotation: i => rotations[i], duration: 1.15, stagger: .22, ease: 'bounce.out',
          scrollTrigger: { trigger: '.portfolio-contact-footer', start: 'top 72%', toggleActions: 'play none none reverse' } });
      // Keyboard users reveal the bubbles immediately when focusing a contact link.
      const reveal = () => drop.progress(1);
      const footer = document.querySelector('.portfolio-contact-footer');
      footer?.addEventListener('focusin', reveal);
      return () => {
        footer?.removeEventListener('focusin', reveal);
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });
    media.add('(min-width: 801px) and (min-height: 701px) and (prefers-reduced-motion: no-preference)', () => {
      const cards = gsap.utils.toArray<HTMLElement>('.cascade-card');
      const last = cards.at(-1);
      if (!last) return;
      cards.forEach((card, index) => {
        ScrollTrigger.create({ trigger: card, start: 'top 18%', endTrigger: last, end: 'bottom 65%', pin: true, pinSpacing: false, invalidateOnRefresh: true });
        gsap.set(card.querySelector('.project-card'), { transformPerspective: 1200 });
        gsap.to(card.querySelector('.project-card'), {
          y: () => -(cards.length - index) * window.innerHeight * .14,
          scale: .8 + .05 * index, rotationZ: [-1.7, 1.1, -.8][index], rotationX: [1.2, -.9, 1.1][index], ease: 'none',
          scrollTrigger: { trigger: card, start: 'top 18%', endTrigger: last, end: 'bottom 65%', scrub: true, invalidateOnRefresh: true },
        });
      });
    });
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    document.querySelectorAll<HTMLImageElement>('#work img').forEach(img => img.addEventListener('load', refresh));
    document.querySelectorAll('#work details').forEach(details => details.addEventListener('toggle', refresh));
    refresh();
    return () => {
      window.removeEventListener('load', refresh);
      document.querySelectorAll('#work img').forEach(img => img.removeEventListener('load', refresh));
      document.querySelectorAll('#work details').forEach(details => details.removeEventListener('toggle', refresh));
      media.revert();
    };
  }, []);
  return null;
}
