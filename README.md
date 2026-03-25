# Patrik Pernthaler — Personal Landing Page

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Live](https://img.shields.io/badge/live-plai.at-brightgreen)

Professional personal branding page for Patrik Pernthaler,
IT Leader & AI Transformation Strategist, Vorarlberg, Österreich.

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Features

- DE/EN language switcher (no reload)
- Fully responsive — mobile-first, 3 breakpoints (1100px / 900px / 600px)
- Hamburger navigation on mobile
- SEO + GEO optimised (JSON-LD Person schema, Open Graph, hreflang)
- Scroll progress bar, custom cursor, animated counters
- Web3Forms contact form with honeypot anti-bot protection
- Sections: Hero · About · Experience · Certifications · Skills · AI Tool Stack · AI Philosophy · Projects · Contact

## Tech Stack

Pure HTML/CSS/JS — zero dependencies, zero frameworks.  
Single file deployment, works on any static host.

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Settings → Pages → Branch: `main` / Folder: `/ (root)`
3. Live at: `https://<username>.github.io/<repo>/`

### Custom Domain
Point your domain (e.g. `patrikpernthaler.at`) to GitHub Pages  
and add a `CNAME` file with your domain name.

## Customisation

All content is in `index.html`.  
Search for `data-de=` / `data-en=` attributes to update text.  
Update contact links in the `#contact` section.

## Structure

```
patrik-landing/
├── index.html       ← Complete single-file page (photo embedded)
├── README.md        ← This file
├── .gitignore       ← Standard web gitignore
├── CNAME            ← Custom domain (edit before deploying)
├── assets/          ← Future: separate CSS, JS, images
└── docs/            ← Future: CV PDF, additional documents
```

## Contact

**Patrik Pernthaler**  
p.pernthaler@plai.at  
https://www.linkedin.com/in/p4trik  
https://plai.at
