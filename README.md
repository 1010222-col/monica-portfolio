# Monica Lasprilla — Portfolio

A local, unpublished portfolio homepage built with Next.js App Router, TypeScript, and Tailwind CSS 4. Requires Node.js 20.9+.

## Run and preview

```bash
cd /workspace/monica-portfolio
npm install
npm run dev
```

Open http://localhost:3000 in your browser. If the development environment runs remotely, use its forwarded port 3000 preview. Stop the server with Ctrl+C.

## Validate a production build

```bash
npm run typecheck
npm run build
npm start
```

The project uses the standard Next.js configuration and is suitable for Vercel. Nothing has been deployed or published.

The scripts select Next.js’s supported webpack mode because Turbopack’s compilation worker cannot bind its required port in this environment. Production build and TypeScript checks passed. Browser-based visual and interaction QA remains unverified: the managed environment does not expose the required browser tool, so no preview server was launched here.

## Editing guide

- `app/page.tsx`: homepage content and project data.
- `app/globals.css`: color and typography tokens in `@theme`, responsive layouts, interaction styles, reduced-motion support.
- `components/Navigation.tsx`: anchor navigation with active-section tracking.
- `components/ProjectCard.tsx`: reusable folder card with native keyboard-accessible disclosure.
- `components/SectionHeading.tsx`: shared section labels.
- `app/layout.tsx`: page title and search description.

The editorial font stack uses Georgia and the sans-serif stack uses Arial, with system fallbacks. No third-party font requests, images, analytics, or UI libraries are required.

## Intentional placeholders

Project previews contain only supplied responsibilities. They expand in place; no case study pages or invented results are presented. Replace these disclosures with case-study links when those pages are written.

The contact CTA highlights an explicit pending-email message. It does not send a message or open a fictitious address. Once Monica confirms her email, replace the CTA href with her `mailto:` address and update the placeholder copy.


## Approved revision status

The homepage now uses a 1.7-second oversized name-to-navigation entrance, one Selected Work section, and large sticky project cards. Short viewports and reduced-motion preferences use a readable non-sticky sequence. All three existing project images are retained.

Portrait cutout is pending: supply a transparent-background PNG made from `public/images/04_monica_original_profile.jpeg`, preserving the original face and hair. The original JPEG remains in use until a faithful cutout is available. The Jazzi Creates screenshot was not included with the revision request; implementation follows the supplied written layout specification.

Local production preview: http://127.0.0.1:3002 (while the preview server is running). Build: `npm run build`. Type check: `npm run typecheck`. To start this preview: `npm run start -- --port 3002`. No publication or GitHub push was performed.


## Animation merge

GSAP and Lenis are installed as local dependencies. `components/PortfolioMotion.tsx` owns card pinning/cascading, smooth scrolling, and footer bubble drops. `components/ContactFooter.tsx` replaces the former contact section and footer. Current project data and image assets are reused. Reduced motion disables the effects; narrow or short screens use sequential cards. GSAP match-media cleanup removes only this component’s effects and destroys its Lenis instance.

Latest local preview: http://127.0.0.1:3004. Production build and TypeScript validation passed. No deployment or push was performed.
