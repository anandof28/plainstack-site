# Plainstack — updated website

A complete, responsive, static rebuild of the Plainstack public homepage, using the new geometric stacked-P logo.

## What is included
- `index.html` — semantic full-page site: hero, philosophy, curiosity, products, lab, beyond the screen, independence, footer
- `styles.css` — mobile-first responsive styling, animations, reduced-motion support
- `main.js` — mobile navigation, scroll reveals and current year
- `assets/logo-light.svg` — header logo for light background
- `assets/logo-dark.svg` — footer logo for dark background
- `assets/symbol.svg` — large brand symbol
- `assets/favicon.ico`, PNG icons — browser and phone icons
- `assets/social-preview.png` — Open Graph preview image
- `site.webmanifest`, `robots.txt`, `sitemap.xml` — web metadata
- `previews/desktop.png`, `previews/mobile.png` — local visual screenshots

## Preview locally
From the directory containing `index.html` run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`. You can also double-click `index.html` for a basic offline preview; serving the folder locally is recommended for the most reliable behavior.

## Deploy
This is a self-contained static site with no build process.

- **Netlify**: drag the website folder to the Netlify deploy area (or connect it to a repository).
- **Vercel**: import a repository with this folder at the root; choose "Other" framework; no build command; output directory `.`.
- **GitHub Pages**: publish the files from your configured root and retain the `.nojekyll` file. The site already uses relative asset paths, so it can also be published under a project subpath.
- **Traditional web hosting**: upload all root files and the `assets` folder into the site's document root (often `public_html/`).

The previous site must be backed up before replacing it. DNS and domain settings do not need to change if the current hosting service is kept.

## Edit brand content
- Hero and other text: `index.html`
- Colors: variables at the top of `styles.css`
- Logos: replace SVG files in `assets/`, maintaining the same filenames.
- Social sharing image: `assets/social-preview.png`

## Important notes
- The published website at `plainstack.tech` has **not** been changed. This package is a rebuild from publicly accessible homepage content, not an edit to an unseen source repository.
- No email address, product launch date, prices, store, or social media URL was invented.
- Google Fonts are optional: system font fallbacks are defined. The page otherwise has no runtime third-party dependencies or analytics.
- Verify any platform-specific deployment requirements against your host.
