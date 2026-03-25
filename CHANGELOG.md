# Changelog

All notable changes to this project are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.0.0] — 2026-03-25

First stable release. Full landing page live at [plai.at](https://plai.at).

### Added
- Complete single-file landing page (HTML/CSS/JS, zero dependencies)
- DE/EN language switcher without page reload
- Sections: Hero · About · Experience · Certifications · Skills · AI Tool Stack · AI Philosophy · Projects · Contact
- Scroll-reveal animations via IntersectionObserver
- Scroll progress bar + custom cursor
- Responsive layout — mobile-first, breakpoints at 1100px / 900px / 600px
- Hamburger navigation menu for mobile (≤900px)
- 2-column grid layout on mobile for Skills, Tools, Certifications
- Hero photo appears above text on mobile (order flip)
- Web3Forms contact form with honeypot anti-bot protection
- LinkedIn button as fallback contact channel
- SEO + GEO optimised (JSON-LD Person schema, Open Graph, hreflang)
- GitHub Pages deployment with custom domain (plai.at)
- HTTPS via GitHub Pages SSL

### Content
- Experience: Stellv. IT-Leiter @ Haberkorn (2020–2024), AI Lab / Career Break (2025–heute)
- Projects: Claude MCP Ecosystem, Red Team Arsenal (incl. Patient-Test, Model Advisor)
- Certifications: AZ-104, AI-900, MS-102, KI-Grundlagen, AI-Grundlagen
- Skills: Azure, Microsoft 365, Entra ID, Intune, Defender, Copilot, OpenClaw, Claude Code u.a.
- AI Philosophy section
- Availability + remote preference in About section

### Fixed
- Removed Cloudflare email obfuscation (incompatible with GitHub Pages)
- Restored truncated HTML from git after local file corruption
- Scroll-reveal made JS-dependent to prevent invisible content on load
- Replaced emojis with professional text abbreviations (cert badges, fact icons)
- Removed city-level location (Dornbirn) — only Vorarlberg, Österreich visible
- PLAI.AT reframed from "Gründer" to personal AI lab / Spielwiese

---

## [0.1.0] — 2026-03-24 *(pre-release)*

- Initial commit: base HTML structure, photo embedded as base64
- DNS setup: A-records für GitHub Pages, CNAME für www
- Custom domain plai.at konfiguriert via IONOS
