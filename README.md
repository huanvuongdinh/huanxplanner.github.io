# Huan Vuong — Personal Website

Static, bilingual (EN / VI), responsive from 360px → 4K.

## What's in this package

```
site/
├── index.html              # Home
├── projects.html           # Projects index
├── cv.html                 # CV
├── blog.html               # Journal / blog index
├── contact.html            # Contact
├── projects/               # Individual project detail pages
├── Components.jsx          # All React components (loaded via Babel in-browser)
├── i18n.js                 # Language toggle helper (EN / VI)
├── projects-data.js        # Project detail data
├── landing.css             # Page styles
├── colors_and_type.css     # Design tokens (colors + typography)
└── assets/                 # Logo + favicons
```

The site is **static HTML/CSS/JS** — no build step, no server, no database.
JSX is transpiled in the browser by Babel Standalone, which keeps the source
directly editable but means **first paint waits a few hundred ms** for
Babel + the JSX file to load. Acceptable for a small personal site; if you
ever want faster TTI, you can pre-compile `Components.jsx` to plain JS once
with `npx babel Components.jsx -o Components.js` and swap the script tag.

## Deploy

Any static host works. The folder is the document root.

### Netlify (drag & drop)
1. Go to https://app.netlify.com/drop
2. Drag the entire `site/` folder onto the page
3. Done — you'll get a `*.netlify.app` URL immediately. Add a custom domain in Site settings → Domain management.

### Vercel
```bash
cd site
npx vercel --prod
```

### Cloudflare Pages
1. Push `site/` to a GitHub repo (or upload via the Pages dashboard)
2. Build command: *(leave empty)*
3. Build output directory: `/` (or `site` if you committed the parent)

### GitHub Pages
1. Push to a repo
2. Settings → Pages → deploy from branch → choose the branch and `/site` (or move contents to `/` and use `/`)

### Plain shared hosting / VPS
Upload the contents of `site/` to your web root (`public_html/`, `/var/www/html/`, etc).
That's it. No `.htaccess` required.

## Custom domain

Point an `A` record (or `CNAME`) at your host's IP / target. Most hosts auto-issue Let's Encrypt SSL.

## Local preview

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

Or any other static server (`npx serve`, `caddy file-server`, etc).

## Editing content

- **Copy & translations** — open `Components.jsx`. Each user-facing string is wrapped `t('English', 'Tiếng Việt')`. Edit either side; the language toggle in the header switches them.
- **Projects list** — `Components.jsx` → `ProjectsIndex`.
- **Project detail pages** — `projects-data.js` (data) + `projects/<slug>.html` (page wiring).
- **Colors & fonts** — `colors_and_type.css`.
- **Layout & spacing** — `landing.css`. Spacing uses `clamp()` so it scales fluidly between mobile and 4K. Breakpoints: 1100px (tablet), 860px (mobile-nav cutover), 640px (single-column).

## Bilingual notes

- Language is stored in `localStorage` under `hxp.lang` (`'en'` or `'vi'`). It persists across pages.
- The `<html lang>` attribute is updated on toggle for accessibility / SEO.
- All Vietnamese copy is currently a working translation — please review with a native speaker before public launch.

## Browser support

Modern evergreen browsers (Chrome, Safari, Firefox, Edge — last 2 versions).
Uses `clamp()`, CSS Grid, modern flexbox. No IE11.

---

© 2026 Huan Vuong
