# Plainstack — R&D + Original Products Website

Version: 10 November 2026

This is the **complete responsive static website package** based on the previously approved Plainstack site. It preserves the **exact existing Plainstack SVG logo**, favicon assets, brand palette, typography, animations, page layout and product-block visuals. There are no school-project images or advertising for client services.

## Brand and content updates

- Independent research, development and product company (Chennai, India)
- Original physical and digital products — not services
- Four research/product focus areas: Physical AI & humanoid robotics; intelligent devices and electronics; original software & applied AI; in-house 3D design and product manufacturing
- Clearly labelled **research directions**, not commercial products
- Product lifecycle: **Research → Design → Prototype → Validate → Manufacture → Sell**
- Explicitly excludes client software/AI services, custom 3D printing and commissioned projects
- Updated homepage metadata and social-sharing preview

## Files

- `index.html`: the complete accessible homepage
- `styles.css`: responsive CSS and Plainstack theme
- `main.js`: mobile navigation, scroll reveals and automatic year
- `assets/`: original unmodified SVG logo and browser icons, updated social preview
- `site.webmanifest`, `robots.txt`, `sitemap.xml`: metadata
- `DEPLOY.md`: how to publish
- `previews/`: desktop and mobile screenshots of the updated site

## Preview locally

Start a web server in the extracted folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

No npm, package manager or build step is required. Google Fonts are requested by the web page; safe local fallback fonts are specified in CSS. No third-party analytics are included.

## Deployment state

The ZIP is **ready to deploy** but has **not** been uploaded to `plainstack.tech`. You will need to upload the files through your site's existing hosting provider or source repository. Keep the original site's backup.

The public site's hosting/deployment configuration is unknown, so these files are a portable static-site update, not a live code push.
