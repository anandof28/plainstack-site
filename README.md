# Plainstack — Complete AI-first Website

A complete, responsive static marketing website for Plainstack, built November 2026.

## Included

- `index.html` — full accessible single-page website with metadata and structured data.
- `styles.css` — entire design system, illustrations, responsive breakpoints, and reduced-motion support.
- `script.js` — mobile navigation, scroll reveals, active nav state, dynamic footer year.
- `assets/` — Plainstack's original multicolor P symbol recreated **exactly from the public GitHub source**, browser icons, and social preview.
- `previews/` — screenshots of the generated site at desktop and mobile widths.
- `robots.txt`, `sitemap.xml`, `site.webmanifest` and `.nojekyll` — static deployment support.

## Content principles

- AI-first is the **operating model**; people remain responsible for product direction, judgment, quality, and security.
- AI-first does **not** mean every Plainstack product requires AI.
- Plainstack develops its **own original products**, not commissioned services.
- Clutterwell is shown **in development**, InventLab is shown **launching soon**.
- No invented sale dates, testimonials, customer counts, or financial claims.

## Preview locally

Start a local web server from this directory:

```bash
python3 -m http.server 8000
```

Visit `http://localhost:8000`.

## Deploy

For a GitHub Pages workflow publishing `main`, copy the site files **into the repository root**, replacing the existing HTML/CSS/JS as needed (the new JS entrypoint is `script.js`). Commit and push after reviewing the site. The existing `.github/workflows/static.yml` in your repository should be kept unchanged; pushing to `main` triggers your existing Pages deployment. Keep your current domain/DNS configuration.

For Netlify/Vercel, this is a plain static site; no build command or node dependencies are needed.

**This ZIP is a new website, not a GitHub commit or live deployment.**

## Fonts and privacy

The site works offline with system fonts. If the browser is online, `styles.css` additionally loads Manrope and DM Sans through Google Fonts. There are no analytics, ad pixels, backend services, external JavaScript, API keys, or client form submissions.


## Mobile layout update (20 November 2026)

The CSS includes viewport overflow protection and mobile-specific footer/button reflow.
It preserves existing site content and brand assets while preventing long footer
links, grid children, and decorative art from stretching the page on small screens.
Tested in Chromium layouts at 320px through desktop widths.

**Publishing:** This is a complete drop-in static website. Deploy the contents of
`plainstack-ai-first-website/` to your existing GitHub Pages repository root.
Do not upload the containing folder itself. GitHub Pages will publish on `main`.
