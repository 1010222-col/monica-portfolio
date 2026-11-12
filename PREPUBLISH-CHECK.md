# Pre-publication check — November 12, 2026

Status: production source is ready for publication. No deployment performed.

- Ran the package script `npm run build` using the installed Node runtime and a temporary npm CLI. Passed, including TypeScript validation.
- Tested the optimized `next start` build at http://127.0.0.1:3005.
- All five rendered images loaded successfully. The transparent portrait loaded at both desktop and mobile sizes.
- System font stack Arial/Helvetica/sans-serif reports loaded; there are no external font downloads.
- Desktop GSAP registered three pins; scrolling changed the cards' transform matrices and visually produced the cascade. All four contact bubbles revealed at their final positions. No browser errors or warnings were reported.
- Document width matched the viewport at 320, 390, 768, 1024, and 1440 pixels. Fixed one mobile-only collision between the invitation and Say hi bubble below 421px, without changing desktop visuals. Rebuilt and confirmed no overlap at 390px.
- Email links consistently target monicalaspguar@gmail.com with correctly encoded subjects. No email was sent and mailbox deliverability was not tested.
- YouTube oEmbed resolves MyJoM7abfT4 as “Arrabalero - Sueño Con La Luna (Video Oficial)”. No social-profile links are present.
- Source/config secret-pattern scans found no matches; no environment or private-key files were present at the project root. This is a pattern-based check, not a guarantee against all possible secrets.
- Added ignore rules for archives, local screenshots, reference mockup, logs, and .vercel metadata. Verified 11 representative paths are ignored in a temporary Git repository.
- The working folder has no .git directory: actual tracked files and Git history cannot be audited until a repository is initialized or connected. No repository, commit, push, Vercel project, or deployment was created.

Browser checks used responsive viewport sizes, not physical mobile hardware or a deployed Vercel environment.
