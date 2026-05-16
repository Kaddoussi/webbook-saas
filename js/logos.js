/* WebBook SaaS — SVG asset library
 * Exposes window.WBLogos with helpers:
 *   WBLogos.master(size)              -> master open-book + spark logo
 *   WBLogos.wordmark(size)            -> master + "WebBook" type
 *   WBLogos.feature(slug, size)       -> animated feature icon (one of 12)
 *   WBLogos.audience(slug, size)      -> audience icon (authors/readers/orgs)
 *   WBLogos.FEATURES                  -> array of feature metadata
 *
 * BOOT LOADER: This file is loaded earliest on every page. We use it as the
 * boot vehicle for the page loader (so it shows BEFORE page paint).
 */
(function bootLoader() {
  if (window.__wbBoot) return;
  window.__wbBoot = true;
  var css = "#wb-loader{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,#1a1325 0%,#0a0613 100%);transition:opacity .55s ease,visibility .55s ease;font-family:'Fraunces','Space Grotesk',serif}#wb-loader.is-hidden{opacity:0;visibility:hidden;pointer-events:none}#wb-loader .loader-inner{display:flex;flex-direction:column;align-items:center;gap:1.25rem}.wb-loader-book{width:120px;height:90px;position:relative;perspective:800px}.wb-loader-book .page{position:absolute;top:0;bottom:0;width:50%;background:linear-gradient(135deg,#fffaf2,#fef3c7);border-radius:4px 0 0 4px;transform-origin:right center;box-shadow:0 6px 18px -8px rgba(0,0,0,.4)}.wb-loader-book .page.left{left:0;animation:wbBookL 1.6s ease-in-out infinite}.wb-loader-book .page.right{left:50%;transform-origin:left center;border-radius:0 4px 4px 0;animation:wbBookR 1.6s ease-in-out infinite}.wb-loader-book .spine{position:absolute;top:-4px;bottom:-4px;left:calc(50% - 2px);width:4px;background:linear-gradient(180deg,#7c3aed,#f43f5e);border-radius:2px;z-index:2}@keyframes wbBookL{0%,100%{transform:rotateY(0deg)}50%{transform:rotateY(-25deg)}}@keyframes wbBookR{0%,100%{transform:rotateY(0deg)}50%{transform:rotateY(25deg)}}#wb-loader .loader-text{font-weight:700;font-size:1.1rem;letter-spacing:-.01em;background:linear-gradient(90deg,#7c3aed,#f43f5e,#f59e0b,#7c3aed);-webkit-background-clip:text;background-clip:text;color:transparent;background-size:200% 100%;animation:wbSlide 2.6s linear infinite}#wb-loader .loader-bar{width:220px;height:3px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden;position:relative}#wb-loader .loader-bar::after{content:\"\";position:absolute;inset:0;width:40%;background:linear-gradient(90deg,transparent,#7c3aed,#f43f5e,transparent);animation:wbBar 1.4s ease-in-out infinite}@keyframes wbSlide{0%{background-position:0 0}100%{background-position:200% 0}}@keyframes wbBar{0%{transform:translateX(-100%)}100%{transform:translateX(350%)}}@media(prefers-reduced-motion:reduce){#wb-loader *{animation:none!important}}";
  var s = document.createElement('style'); s.id='wb-loader-css'; s.textContent = css;
  (document.head || document.documentElement).appendChild(s);

  function build() {
    if (document.getElementById('wb-loader')) return;
    if (!document.body) return setTimeout(build, 10);
    var l = document.createElement('div');
    l.id = 'wb-loader'; l.setAttribute('aria-hidden','true');
    l.innerHTML = '<div class="loader-inner">' +
      '<div class="wb-loader-book" aria-hidden="true">' +
        '<div class="page left"></div><div class="spine"></div><div class="page right"></div>' +
      '</div>' +
      '<div class="loader-text">Opening your WebBook…</div>' +
      '<div class="loader-bar" role="progressbar" aria-label="Loading"></div></div>';
    document.body.appendChild(l);
  }
  if (document.body) build(); else document.addEventListener('DOMContentLoaded', build, { once:true });

  function hide() {
    var l = document.getElementById('wb-loader'); if (!l) return;
    setTimeout(function(){ l.classList.add('is-hidden'); }, 200);
    setTimeout(function(){ l.parentNode && l.parentNode.removeChild(l); }, 1200);
  }
  if (document.readyState === 'complete') setTimeout(hide, 700);
  else window.addEventListener('load', function(){ setTimeout(hide, 400); });
  setTimeout(hide, 6000);
})();

(function () {
  const FEATURES = [
    { slug:'instant-publish', name:'Instant Publish',   color:'#7c3aed', accent:'#a855f7', desc:'Turn a manuscript into a live WebBook in 60 seconds.' },
    { slug:'ai-companion',    name:'AI Companion',      color:'#06b6d4', accent:'#0891b2', desc:'Each WebBook ships with its own reader-side AI guide.' },
    { slug:'live-update',     name:'Live Updates',      color:'#f59e0b', accent:'#f97316', desc:'Edit once. Every reader sees the latest version.' },
    { slug:'multilingual',    name:'Multilingual',      color:'#10b981', accent:'#059669', desc:'Auto-translate while preserving voice and citations.' },
    { slug:'interactive',     name:'Interactive Pages', color:'#f43f5e', accent:'#e11d48', desc:'Embed quizzes, charts, audio, and 3D demos.' },
    { slug:'voice-narration', name:'Voice Narration',   color:'#8b5cf6', accent:'#7c3aed', desc:'Studio-quality audiobook generated automatically.' },
    { slug:'reader-analytics',name:'Reader Insights',   color:'#0ea5e9', accent:'#0284c7', desc:'See which chapters land — and which need work.' },
    { slug:'monetize',        name:'Monetize',          color:'#eab308', accent:'#ca8a04', desc:'Paywalls, subscriptions, gifting, communities.' },
    { slug:'community',       name:'Reader Community',  color:'#ec4899', accent:'#db2777', desc:'Annotations, book clubs, Q&A by chapter.' },
    { slug:'accessibility',   name:'Accessible',        color:'#14b8a6', accent:'#0d9488', desc:'WCAG 2.2 AA. Dyslexia-friendly typography.' },
    { slug:'citations',       name:'Smart Citations',   color:'#6366f1', accent:'#4f46e5', desc:'Versioned, exportable, scholarly-grade.' },
    { slug:'export',          name:'Export Anywhere',   color:'#ef4444', accent:'#dc2626', desc:'Print, PDF, ePub, podcast feed — one click.' }
  ];

  // ----------- MASTER LOGO -----------
  // Open book with a spark / page-flip animation
  function master(size = 48) {
    return `
<svg viewBox="0 0 200 200" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WebBook SaaS">
  <defs>
    <linearGradient id="wbBookGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="55%" stop-color="#f43f5e"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
    <linearGradient id="wbPageGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fffaf2"/>
      <stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
    <radialGradient id="wbSpark" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
      <stop offset="60%" stop-color="#f59e0b" stop-opacity=".9"/>
      <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- background tile -->
  <rect x="6" y="6" width="188" height="188" rx="44" fill="url(#wbBookGrad)" opacity=".14"/>
  <!-- left page (static) -->
  <path d="M40 60 L96 50 L96 150 L40 158 Z" fill="url(#wbPageGrad)" opacity=".95"/>
  <!-- right page (animated flip) -->
  <path data-page-flip d="M104 50 L160 60 L160 158 L104 150 Z" fill="url(#wbPageGrad)" opacity=".95"/>
  <!-- spine -->
  <rect data-spine-pulse x="96" y="48" width="8" height="106" rx="3" fill="url(#wbBookGrad)"/>
  <!-- text lines -->
  <g stroke="#7c3aed" stroke-width="2" opacity=".55" stroke-linecap="round">
    <line x1="50" y1="78"  x2="88" y2="76"/>
    <line x1="50" y1="92"  x2="84" y2="90"/>
    <line x1="50" y1="106" x2="86" y2="104"/>
    <line x1="50" y1="120" x2="78" y2="118"/>
    <line x1="112" y1="78"  x2="150" y2="80"/>
    <line x1="112" y1="92"  x2="146" y2="94"/>
    <line x1="112" y1="106" x2="148" y2="108"/>
    <line x1="112" y1="120" x2="140" y2="122"/>
  </g>
  <!-- spark / AI dot -->
  <circle cx="155" cy="48" r="22" fill="url(#wbSpark)"/>
  <path d="M155 36 L158 46 L168 48 L158 50 L155 60 L152 50 L142 48 L152 46 Z" fill="#fff"/>
</svg>`;
  }

  function wordmark(size = 36) {
    return `
<span style="display:inline-flex; align-items:center; gap:.55rem;">
  ${master(size)}
  <span style="font-family:'Fraunces','Space Grotesk', serif; font-weight:700; letter-spacing:-.02em; font-size:1.15rem;">
    Web<span style="background:linear-gradient(135deg,#7c3aed,#f43f5e,#f59e0b); -webkit-background-clip:text; background-clip:text; color:transparent;">Book</span>
  </span>
</span>`;
  }

  // ----------- FEATURE ICONS -----------
  const FEATURE_GLYPHS = {
    'instant-publish':  `<path d="M50 18 L72 50 L58 50 L58 78 L42 78 L42 50 L28 50 Z"/>
                         <path d="M30 84 L70 84" stroke-width="3"/>`,
    'ai-companion':     `<circle cx="50" cy="46" r="20"/>
                         <circle cx="42" cy="44" r="3" fill="#fff"/>
                         <circle cx="58" cy="44" r="3" fill="#fff"/>
                         <path d="M40 56 Q50 64 60 56"/>
                         <path d="M30 70 L70 70 L66 84 L34 84 Z"/>`,
    'live-update':      `<path d="M30 50 A 22 22 0 1 1 70 50"/>
                         <path d="M70 50 L78 42 L78 58 Z" fill="#fff" stroke="none"/>
                         <path d="M70 60 A 22 22 0 1 1 30 60"/>
                         <path d="M30 60 L22 68 L22 52 Z" fill="#fff" stroke="none"/>`,
    'multilingual':     `<circle cx="50" cy="50" r="28"/>
                         <path d="M22 50 L78 50"/>
                         <path d="M50 22 Q34 50 50 78 Q66 50 50 22"/>`,
    'interactive':      `<rect x="26" y="28" width="48" height="36" rx="4"/>
                         <path d="M30 76 L70 76" stroke-width="3"/>
                         <circle cx="42" cy="46" r="3" fill="#fff"/>
                         <path d="M50 40 L62 52 L50 52 Z" fill="#fff" stroke="none"/>`,
    'voice-narration':  `<rect x="44" y="22" width="12" height="32" rx="6"/>
                         <path d="M32 50 A 18 18 0 0 0 68 50"/>
                         <path d="M50 68 L50 80"/>
                         <path d="M40 80 L60 80"/>`,
    'reader-analytics': `<path d="M22 78 L22 30"/>
                         <path d="M22 78 L78 78"/>
                         <rect x="32" y="56" width="8" height="22" fill="#fff" stroke="none"/>
                         <rect x="46" y="44" width="8" height="34" fill="#fff" stroke="none"/>
                         <rect x="60" y="32" width="8" height="46" fill="#fff" stroke="none"/>`,
    'monetize':         `<circle cx="50" cy="50" r="26"/>
                         <path d="M50 32 L50 68"/>
                         <path d="M58 40 Q42 40 42 48 Q42 56 58 56 Q42 56 42 64 Q42 72 58 68" stroke-width="3"/>`,
    'community':        `<circle cx="38" cy="40" r="10"/>
                         <circle cx="62" cy="40" r="10"/>
                         <path d="M22 76 Q38 60 54 76"/>
                         <path d="M46 76 Q62 60 78 76"/>`,
    'accessibility':    `<circle cx="50" cy="30" r="8"/>
                         <path d="M30 44 L70 44"/>
                         <path d="M50 44 L50 60"/>
                         <path d="M50 60 L36 80 M50 60 L64 80"/>`,
    'citations':        `<path d="M30 30 L52 30 L60 38 L60 78 L30 78 Z"/>
                         <path d="M52 30 L52 38 L60 38"/>
                         <path d="M38 50 L52 50 M38 60 L52 60 M38 70 L46 70"/>`,
    'export':           `<path d="M50 22 L50 60"/>
                         <path d="M38 36 L50 22 L62 36" fill="none"/>
                         <path d="M28 56 L28 78 L72 78 L72 56"/>`
  };

  function feature(slug, size = 64) {
    const f = FEATURES.find(x => x.slug === slug);
    if (!f) return '';
    const id = `wb-${slug}`;
    return `
<svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${f.name}">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${f.color}"/>
      <stop offset="100%" stop-color="${f.accent}"/>
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#${id})"/>
  <g data-glyph fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${FEATURE_GLYPHS[slug] || ''}</g>
</svg>`;
  }

  // ----------- AUDIENCE ICONS -----------
  function audience(slug, size = 64) {
    const map = {
      authors:       { color:'#7c3aed', accent:'#f43f5e', glyph:`<path d="M30 70 L40 60 L70 30 L78 38 L48 68 L38 78 Z"/><path d="M28 76 L72 76"/>` },
      readers:       { color:'#06b6d4', accent:'#0ea5e9', glyph:`<path d="M22 28 L50 36 L78 28 L78 76 L50 84 L22 76 Z"/><path d="M50 36 L50 84"/>` },
      organizations: { color:'#f59e0b', accent:'#f97316', glyph:`<rect x="22" y="28" width="20" height="50"/><rect x="58" y="40" width="20" height="38"/><path d="M22 78 L78 78"/>` }
    };
    const a = map[slug]; if (!a) return '';
    const id = `wb-aud-${slug}`;
    return `
<svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${slug}">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${a.color}"/>
      <stop offset="100%" stop-color="${a.accent}"/>
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#${id})"/>
  <g data-glyph fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${a.glyph}</g>
</svg>`;
  }

  // ----------- AUTO-RENDER -----------
  function renderAuto() {
    document.querySelectorAll('[data-wb-logo]').forEach(el => {
      const kind = el.dataset.wbLogo;
      const size = parseInt(el.dataset.size || '48', 10);
      el.innerHTML = kind === 'wordmark' ? wordmark(size) : master(size);
      el.classList.add('wb-svg-anim');
    });
    document.querySelectorAll('[data-wb-icon]').forEach(el => {
      const slug = el.dataset.wbIcon;
      const size = parseInt(el.dataset.size || '64', 10);
      el.innerHTML = feature(slug, size);
    });
    document.querySelectorAll('[data-wb-audience]').forEach(el => {
      const slug = el.dataset.wbAudience;
      const size = parseInt(el.dataset.size || '64', 10);
      el.innerHTML = audience(slug, size);
    });
  }

  window.WBLogos = { master, wordmark, feature, audience, FEATURES, renderAuto };
  document.addEventListener('DOMContentLoaded', renderAuto);
})();
