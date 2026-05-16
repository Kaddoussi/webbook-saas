# WebBook SaaS — Living, breathing, multilingual books for authors

> Turn any manuscript into a **living, narrated, multilingual, AI-companioned WebBook** in 60 seconds — powered by the **WebBook Agent**.

This is a static, frontend-only site implemented with HTML, Tailwind CSS (CDN), and vanilla JavaScript. It shares architecture with the W5D (root) and 2030B Ecosystem sites: a JS-injected nav/footer shell, a JS-rendered mega-menu, an animated boot loader, animated SVG logos, and animated aside panels for user/language toggles.

---

## ✅ Completed features

### Project & content
- **Replicated W5D shell** into `webbook-saas/` with identical asset architecture (CSS, JS, partials, pages).
- **Full landing page** (`index.html`) with hero, **AI WebBook Agent emphasis section**, problem/promise, three-step "How it works", features grid, audience sections, social proof, and CTA.
- **40 internal pages** under `pages/` (see "URI map" below) including the new **WebBook Agent** spotlight page (`pages/webbook-agent.html`) referencing the WebBook Agent API capabilities.
- **AI-generated WebBook emphasis**: front-and-center on `index.html`, dedicated agent page, and promoted as the second item in the **Product** mega-menu.

### Navbar enhancements
- **Hidden brand-ID text on desktop** (`>=1024px`) via `[data-brand-id-hide]` attribute and CSS rule.
- **Active-state highlighting** for both top-level mega-menu triggers and inner sub-menu links, matched against `location.pathname`.
- **User-profile toggle** (`data-aside-toggle="wb-aside-user"`) with animated slide-in aside (Sign in, Create account, My WebBooks, Analytics, Earnings, Settings).
- **Language toggle** (`data-aside-toggle="wb-aside-lang"`) with 8-language grid, persistence via `localStorage('wb-lang')`, and automatic RTL for Arabic.
- **Animated nav-icon buttons** with hover-lift and pulsing ring animation.
- **Mobile menu** with collapsible accordion built from the same NAV definition.

### Animated logo + page loader
- **Page loader** (`#wb-loader`) with animated open-book SVG, gradient sliding text, and progress bar.
  - Fix: loader CSS + DOM are injected by `js/logos.js` **synchronously, very early in `<head>`**, so the loader is visible **before** the page paints (not after).
  - Hides on `window.load` + 400ms delay; hard 6-second safety timeout.
- **Animated SVG logos** via `window.WBLogos`:
  - `master(size)` — open-book + AI spark, with `data-page-flip` and `data-spine-pulse` animations.
  - `wordmark(size)` — master + "WebBook" gradient text.
  - `feature(slug, size)` — 12 animated feature icons.
  - `audience(slug, size)` — authors / readers / organizations.
  - `renderAuto()` — scans `[data-wb-logo]`, `[data-wb-icon]`, `[data-wb-audience]`.

### Mega-menu (fixed)
- Rendered from a single `NAV` config in `js/megamenu.js` with 5 panels: Product, For Authors, For Readers, For Orgs, Resources, Pricing.
- **Race-condition fix**: megamenu now retries up to 20× and **also rebuilds on the `shell:rendered` event** dispatched by `shell.js`. This ensures the menu appears on every page even when script load order varies.
- Hover-open with 120ms close delay, click-toggle, focus support, ARIA attributes, outside-click and Escape to close.
- Includes promo cards per panel (e.g., "60-second publishing", "From PDF to 200k readers", etc.).
- Mobile: collapsible `<details>` accordion mirrors desktop content.

### Animations for authors
- `[data-wb-anim]` reveal-on-scroll (opacity + translateY + scale).
- `.wb-lift` hover-lift cards.
- `.wb-float-y` floating UI elements (AI bubble, status chips).
- `.wb-typing-dot` typing indicator.
- `.wb-gradient-border` and `.wb-gradient-text`.
- All animations respect `prefers-reduced-motion`.

---

## 🌐 URI map

### Root
| URI | Purpose |
| --- | ------- |
| `index.html` | Landing page (hero, agent emphasis, features, audiences, CTA) |

### Product
| URI | Purpose |
| --- | ------- |
| `pages/what-is-webbook.html` | Concept page |
| `pages/webbook-agent.html` | **AI WebBook Agent** — co-author overview + API |
| `pages/how-it-works.html` | 3-step flow |
| `pages/features.html` | 12-capability grid |
| `pages/demo.html` | Live demo |
| `pages/feature-ai.html` | Reader AI Companion |
| `pages/feature-multilingual.html` | 40 languages |
| `pages/feature-voice.html` | Voice narration |
| `pages/feature-analytics.html` | Reader insights |
| `pages/feature-live.html` | Living updates |
| `pages/feature-community.html` | Reader community |
| `pages/feature-monetize.html` | Monetization |
| `pages/feature-share.html` | Sharing kit |
| `pages/feature-annotations.html` | Annotations |
| `pages/feature-accessibility.html` | Accessibility |
| `pages/feature-export.html` | Export anywhere |
| `pages/feature-domains.html` | Custom domains |

### For audiences
| URI | Purpose |
| --- | ------- |
| `pages/for-authors.html` | Author home |
| `pages/for-readers.html` | Reader home |
| `pages/for-organizations.html` | Org home |
| `pages/use-education.html` | Education vertical |
| `pages/use-enterprise.html` | Enterprise vertical |
| `pages/use-publishers.html` | Publishers vertical |
| `pages/case-author.html` | Indie-author case study |

### Resources & Company
| URI | Purpose |
| --- | ------- |
| `pages/library.html` | Sample WebBook library |
| `pages/handbook.html` | Author handbook |
| `pages/academy.html` | Academy |
| `pages/showcase.html` | Showcase |
| `pages/blog.html` | Blog |
| `pages/faqs.html` | FAQs |
| `pages/about.html` | About |
| `pages/contact.html` | Contact |
| `pages/join.html` | Sign-up |
| `pages/pricing.html` | Plans |
| `pages/security.html` | Security |
| `pages/integrations.html` | Integrations |
| `pages/api.html` | Public API reference |
| `pages/privacy.html` | Privacy |
| `pages/terms.html` | Terms |
| `pages/404.html` | 404 |

### Data API (RESTful Table)
- `tables/wb_demo_requests` — demo-request submissions (6 fields).
  - `POST tables/wb_demo_requests` to create.
  - `GET tables/wb_demo_requests?page=1&limit=20` to list.

---

## 🗂 Project structure

```
webbook-saas/
├── index.html
├── css/
│   ├── style.css            (Tailwind extensions, glass, gradients, orbs)
│   └── enhancements.css     (loader, asides, active states, SVG anims)
├── js/
│   ├── logos.js             (boot loader + WBLogos SVG library)
│   ├── megamenu.js          (NAV config + render + interactions)
│   ├── shell.js             (nav + footer injection)
│   ├── enhancements.js      (active states, asides, loader hide)
│   ├── boot.js              (standalone boot loader, reserved)
│   ├── main.js              (theme toggle, mobile menu, scroll reveal)
│   └── api.js               (RESTful Table client + form handlers)
├── partials/                (shared HTML chunks)
└── pages/                   (40 inner pages — see URI map)
```

### Script load order (every page)
```
<script src="../js/logos.js"></script>      ← injects loader synchronously
<script src="../js/megamenu.js"></script>   ← renders mega-menu (retries + listens to shell:rendered)
<script src="../js/shell.js"></script>      ← injects nav/footer, dispatches shell:rendered
<script src="../js/main.js"></script>
<script src="../js/api.js"></script>
```

`shell.js` also auto-loads `css/enhancements.css` and `js/enhancements.js` once.

---

## 🐛 Bugs fixed in this pass

| Bug | Root cause | Fix |
| --- | ---------- | --- |
| Loader appears **after** page paints | `enhancements.js` was loaded async → loader DOM injected after first paint | Boot loader CSS + DOM moved into `js/logos.js` (loaded earliest in `<head>`); injects synchronously |
| **Mega-menu hidden** on many pages | Race: `megamenu.js` ran on `DOMContentLoaded` before `shell.js` injected `[data-mega-host]` | `megamenu.js` retries up to 20× and re-builds on `shell:rendered` event |
| **Animated SVGs** errors / no animation | CSS targeted `.petal` but logos.js produced unclassed elements | Added `data-page-flip`, `data-spine-pulse` hooks; CSS now matches; `prefers-reduced-motion` honored |
| Console errors on inner pages | Missing `wb-loader` CSS until `enhancements.css` finished loading | Inline minimal CSS in boot section of `logos.js` |

---

## ⏳ Not yet implemented / nice-to-have

- Production Tailwind build (currently using CDN — only a console **warning**, not an error).
- Per-WebBook live preview iframe inside the demo page.
- Real OAuth in `pages/join.html` (currently a static form).
- Internationalized strings (the language toggle currently switches `lang`/`dir` only).
- Per-page hero illustrations using the full WBLogos icon library.

## 🚀 Recommended next steps

1. Replace the Tailwind CDN with a built `style.css` to silence the production warning.
2. Wire `pages/demo.html` to embed a sample WebBook (iframe).
3. Add an animated SVG **timeline** to the WebBook Agent page showing reasoning steps.
4. Persist demo-request leads in the `wb_demo_requests` table from the demo & contact pages.
5. Author 5 sample WebBooks (fiction, non-fiction, learning, technical, children's) for the Library.

---

## 🔗 Related sites in this project

- **W5D** (root `/`) — AI agents platform.
- **2030B Ecosystem** (`/2030b-ecosystem/`) — 10 projects, 30 books, 10 currencies.
- **WebBook SaaS** (this folder) — author tooling around AI-generated WebBooks.
