/* WebBook SaaS — Mega-menu rendered from JS.
 * Built for AUTHORS first: turn book content into a WebBook in 60 seconds.
 * Top-level: Product · For Authors · For Readers · For Orgs · Resources · Pricing
 */
(function () {
  const NAV = {
    product: {
      title: 'Product',
      groups: [
        { heading: 'WebBook technology', items: [
          { i: 'sparkles',   t: 'What is a WebBook?',  d: 'A book that breathes, talks, and grows.', href: 'pages/what-is-webbook.html' },
          { i: 'bot',        t: 'WebBook Agent',       d: 'AI co-author that ships your book.',      href: 'pages/webbook-agent.html' },
          { i: 'zap',        t: 'How it works',        d: 'Manuscript → live WebBook in 60s.',        href: 'pages/how-it-works.html' },
          { i: 'layers',     t: 'All features',        d: '12 capabilities your readers will love.',  href: 'pages/features.html' },
          { i: 'play',       t: 'Live demo',           d: 'Read a real WebBook right now.',           href: 'pages/demo.html' }
        ]},
        { heading: 'Capabilities', items: [
          { i: 'bot',        t: 'Reader AI Companion', d: 'Personal guide for every reader.',         href: 'pages/feature-ai.html' },
          { i: 'globe',      t: 'Multilingual',        d: 'Reach a global audience automatically.',   href: 'pages/feature-multilingual.html' },
          { i: 'mic',        t: 'Voice Narration',     d: 'Studio-quality audiobook included.',       href: 'pages/feature-voice.html' },
          { i: 'bar-chart-3',t: 'Reader Insights',     d: 'See what works, chapter by chapter.',      href: 'pages/feature-analytics.html' }
        ]}
      ],
      promo: {
        tag: 'New',
        title: '60-second publishing',
        body: 'Drop your manuscript. We turn it into a living, multilingual, narrated WebBook before your coffee cools.',
        href: 'pages/how-it-works.html'
      }
    },

    authors: {
      title: 'For Authors',
      groups: [
        { heading: 'Write & ship', items: [
          { i: 'feather',    t: 'For authors',         d: 'A modern home for your craft.',            href: 'pages/for-authors.html' },
          { i: 'rocket',     t: 'Launch in a minute',  d: 'From draft to live URL.',                   href: 'pages/how-it-works.html' },
          { i: 'book-marked',t: 'Living book',         d: 'Edit forever. No re-uploads.',             href: 'pages/feature-live.html' },
          { i: 'wand-2',     t: 'AI co-writer',        d: 'Polish, summarize, translate.',            href: 'pages/feature-ai.html' }
        ]},
        { heading: 'Grow & earn', items: [
          { i: 'users',      t: 'Audience builder',    d: 'Newsletter, community, book club.',         href: 'pages/feature-community.html' },
          { i: 'wallet',     t: 'Monetization',        d: 'Subscriptions, gifts, paywalls.',          href: 'pages/feature-monetize.html' },
          { i: 'bar-chart-3',t: 'Reader analytics',    d: 'Where readers stop. Why.',                  href: 'pages/feature-analytics.html' },
          { i: 'share-2',    t: 'Sharing kit',         d: 'Quotes, audiograms, snippets.',             href: 'pages/feature-share.html' }
        ]}
      ],
      promo: {
        tag: 'Story',
        title: 'From PDF to 200k readers',
        body: 'How indie author Lina A. turned a dusty manuscript into a living WebBook — and her best-selling year.',
        href: 'pages/case-author.html'
      }
    },

    readers: {
      title: 'For Readers',
      groups: [
        { heading: 'A new way to read', items: [
          { i: 'book-open',  t: 'For readers',         d: 'Books that listen, explain, evolve.',      href: 'pages/for-readers.html' },
          { i: 'bot',        t: 'Ask the book',       d: 'AI companion in every WebBook.',           href: 'pages/feature-ai.html' },
          { i: 'languages',  t: 'In your language',    d: 'Auto-translated, voice & text.',           href: 'pages/feature-multilingual.html' },
          { i: 'headphones', t: 'Listen anywhere',     d: 'Audiobook included by default.',           href: 'pages/feature-voice.html' }
        ]},
        { heading: 'Read deeper', items: [
          { i: 'highlighter',t: 'Annotations',         d: 'Highlights, notes, bookmarks.',            href: 'pages/feature-annotations.html' },
          { i: 'message-circle', t:'Book club',         d: 'Discuss by chapter, not by chance.',       href: 'pages/feature-community.html' },
          { i: 'accessibility', t: 'Accessible',        d: 'WCAG AA. Dyslexia-friendly mode.',         href: 'pages/feature-accessibility.html' },
          { i: 'download',   t: 'Take it offline',     d: 'PDF, ePub, podcast feed.',                 href: 'pages/feature-export.html' }
        ]}
      ],
      promo: {
        tag: 'Free',
        title: 'Read sample WebBooks',
        body: 'Browse a small library of WebBooks across fiction, non-fiction, and learning.',
        href: 'pages/library.html'
      }
    },

    organizations: {
      title: 'For Orgs',
      groups: [
        { heading: 'Use cases', items: [
          { i: 'building-2',t: 'For organizations',    d: 'Knowledge bases that learn.',              href: 'pages/for-organizations.html' },
          { i: 'graduation-cap', t: 'Education',       d: 'Living textbooks for schools.',            href: 'pages/use-education.html' },
          { i: 'briefcase',  t: 'Enterprise',          d: 'Manuals, onboarding, playbooks.',          href: 'pages/use-enterprise.html' },
          { i: 'library',    t: 'Publishers',          d: 'Modernize your backlist.',                  href: 'pages/use-publishers.html' }
        ]},
        { heading: 'Trust & scale', items: [
          { i: 'shield-check',t: 'Security',           d: 'SSO, SOC 2, audit logs.',                  href: 'pages/security.html' },
          { i: 'puzzle',     t: 'Integrations',        d: 'Notion, Google Docs, Word, Markdown.',     href: 'pages/integrations.html' },
          { i: 'globe',      t: 'Custom domains',      d: 'yourbook.com — your brand.',                href: 'pages/feature-domains.html' },
          { i: 'workflow',   t: 'API & webhooks',      d: 'Automate publishing pipelines.',           href: 'pages/api.html' }
        ]}
      ],
      promo: {
        tag: 'Enterprise',
        title: 'Books that scale with your team',
        body: '50+ author seats, audit logs, custom AI guardrails, dedicated CSM.',
        href: 'pages/contact.html'
      }
    },

    resources: {
      title: 'Resources',
      groups: [
        { heading: 'Learn', items: [
          { i: 'book-open',  t: 'Author handbook',     d: 'Make a great WebBook.',                    href: 'pages/handbook.html' },
          { i: 'graduation-cap', t: 'Academy',          d: 'Free 30-min courses.',                      href: 'pages/academy.html' },
          { i: 'help-circle',t: 'FAQs',                d: 'Everything authors ask.',                  href: 'pages/faqs.html' },
          { i: 'rss',        t: 'Blog',                d: 'Field notes from writers.',                href: 'pages/blog.html' }
        ]},
        { heading: 'Build', items: [
          { i: 'sparkles',   t: 'Showcase',            d: 'WebBooks live now.',                       href: 'pages/showcase.html' },
          { i: 'play',       t: 'Live demo',           d: 'See a WebBook in action.',                  href: 'pages/demo.html' },
          { i: 'compass',    t: 'About',               d: 'Why we built WebBook SaaS.',               href: 'pages/about.html' },
          { i: 'mail',       t: 'Contact',             d: 'Talk to a real human.',                    href: 'pages/contact.html' }
        ]},
        { heading: 'Library', items: [
          { i: 'layout-grid',t: 'Sections',            d: '20+ ready-to-copy sections.',              href: 'pages/sections.html' },
          { i: 'sparkles',   t: 'Heroes',              d: 'Animated hero variants.',                  href: 'pages/heros.html' },
          { i: 'layout',     t: 'Blocks',              d: 'Every block in one page.',                 href: 'pages/blocks.html' },
          { i: 'book',       t: 'Documentation',       d: 'Reuse the WebBook kit.',                   href: 'pages/documentations.html' }
        ]}
      ],
      promo: {
        tag: 'Live',
        title: 'Watch a WebBook get born',
        body: '90-second demo: paste, click, ship. Then meet the AI reader companion.',
        href: 'pages/demo.html'
      }
    },

    pricing: {
      title: 'Pricing',
      groups: [
        { heading: 'Plans', items: [
          { i: 'tag',        t: 'Pricing',             d: 'Simple. Author-friendly.',                 href: 'pages/pricing.html' },
          { i: 'gift',       t: 'Free forever',        d: 'Ship your first WebBook free.',            href: 'pages/pricing.html#free' },
          { i: 'feather',    t: 'Author plan',         d: 'For working writers.',                      href: 'pages/pricing.html#author' },
          { i: 'building-2', t: 'Team & Enterprise',   d: 'Multi-seat, SSO, SLAs.',                    href: 'pages/pricing.html#team' }
        ]},
        { heading: 'Get started', items: [
          { i: 'rocket',     t: 'Launch your WebBook', d: 'Start in under a minute.',                  href: 'pages/join.html' },
          { i: 'log-in',     t: 'Sign in',             d: 'Open your studio.',                         href: 'pages/join.html#signin' },
          { i: 'mail',       t: 'Talk to sales',       d: 'For teams of 5+.',                          href: 'pages/contact.html' }
        ]}
      ],
      promo: {
        tag: 'Free',
        title: 'Your first WebBook on us',
        body: 'No card. No watermark. Keep your readers, your data, your rights.',
        href: 'pages/join.html'
      }
    }
  };

  function buildItem(it, prefix) {
    return `
      <a href="${prefix}${it.href}" class="group flex items-start gap-3 p-3 rounded-xl hover:bg-violet-500/5 transition">
        <span class="mt-0.5 w-9 h-9 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-rose-500 group-hover:text-white transition">
          <i data-lucide="${it.i}" class="w-4 h-4"></i>
        </span>
        <span>
          <span class="block text-sm font-semibold text-slate-900 dark:text-white">${it.t}</span>
          <span class="block text-xs text-slate-500 mt-0.5">${it.d}</span>
        </span>
      </a>`;
  }

  function buildPanel(key, def, prefix) {
    const cols = def.groups.map(g => `
      <div>
        <p class="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-2 px-3">${g.heading}</p>
        <div class="space-y-1">${g.items.map(it => buildItem(it, prefix)).join('')}</div>
      </div>`).join('');

    const promo = def.promo ? `
      <a href="${prefix}${def.promo.href}" class="rounded-2xl p-5 bg-gradient-to-br from-violet-600 via-rose-500 to-amber-500 text-white block hover:brightness-110 transition relative overflow-hidden">
        <div class="absolute inset-0 wb-grid-bg opacity-30"></div>
        <div class="relative">
          <span class="inline-block text-[11px] uppercase tracking-widest bg-white/20 rounded-full px-2 py-0.5">${def.promo.tag}</span>
          <h4 class="font-display font-bold text-lg mt-3">${def.promo.title}</h4>
          <p class="text-sm text-white/85 mt-1.5">${def.promo.body}</p>
          <span class="text-sm font-semibold mt-3 inline-flex items-center gap-1">Read more <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>` : '';

    return `
      <div data-mega-panel="${key}" class="hidden absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(1040px,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] z-50">
        <div class="wb-glass rounded-2xl p-5 shadow-2xl shadow-violet-500/10 wb-mega-panel-enter">
          <div class="grid lg:grid-cols-[1.6fr_1fr] gap-5">
            <div class="grid sm:grid-cols-${ Math.min(def.groups.length, 3) } gap-4">${cols}</div>
            ${promo}
          </div>
        </div>
      </div>`;
  }

  function buildTriggers(prefix) {
    return Object.entries(NAV).map(([key, def]) => `
      <li class="static" data-mega-trigger="${key}">
        <button class="wb-link-underline flex items-center gap-1 py-2">
          ${def.title} <i data-lucide="chevron-down" class="w-4 h-4 transition-transform"></i>
        </button>
        ${buildPanel(key, def, prefix)}
      </li>`).join('');
  }

  function buildMobile(prefix) {
    return Object.entries(NAV).map(([key, def]) => `
      <details class="border-b border-slate-200/60 dark:border-white/5 py-2">
        <summary class="font-semibold py-2 cursor-pointer flex items-center justify-between">
          ${def.title} <i data-lucide="chevron-down" class="w-4 h-4"></i>
        </summary>
        <div class="pl-2 pb-2 space-y-1">
          ${def.groups.flatMap(g => g.items).map(it =>
            `<a href="${prefix}${it.href}" class="block py-1.5 text-sm text-slate-600 dark:text-slate-400">${it.t}</a>`
          ).join('')}
        </div>
      </details>`).join('');
  }

  function buildMegaMenu() {
    const host = document.querySelector('[data-mega-host]');
    const mhost = document.querySelector('[data-mega-mobile]');
    if (!host) return false;
    if (host.dataset.megaBuilt === '1') return true;
    const prefix = host.dataset.prefix || '';
    host.innerHTML = buildTriggers(prefix);
    if (mhost) mhost.innerHTML = buildMobile(prefix);
    host.dataset.megaBuilt = '1';

    const CLOSE_DELAY = 120;
    let closeTimer = null;
    let activeLi = null;

    function closeAll() {
      host.querySelectorAll('[data-mega-panel]').forEach(p => p.classList.add('hidden'));
      host.querySelectorAll('.lucide-chevron-down').forEach(c => c.classList.remove('rotate-180'));
      host.querySelectorAll('[data-mega-trigger]').forEach(li => li.removeAttribute('data-open'));
      activeLi = null;
    }

    host.querySelectorAll('[data-mega-trigger]').forEach(li => {
      const panel  = li.querySelector('[data-mega-panel]');
      const chev   = li.querySelector('.lucide-chevron-down');
      const button = li.querySelector('button');

      const open = () => {
        clearTimeout(closeTimer);
        if (activeLi && activeLi !== li) {
          activeLi.querySelector('[data-mega-panel]')?.classList.add('hidden');
          activeLi.querySelector('.lucide-chevron-down')?.classList.remove('rotate-180');
          activeLi.removeAttribute('data-open');
        }
        panel.classList.remove('hidden');
        chev?.classList.add('rotate-180');
        li.setAttribute('data-open', '');
        button?.setAttribute('aria-expanded', 'true');
        activeLi = li;
      };
      const scheduleClose = () => {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(() => {
          panel.classList.add('hidden');
          chev?.classList.remove('rotate-180');
          li.removeAttribute('data-open');
          button?.setAttribute('aria-expanded', 'false');
          if (activeLi === li) activeLi = null;
        }, CLOSE_DELAY);
      };

      li.addEventListener('mouseenter', open);
      li.addEventListener('mouseleave', scheduleClose);
      panel.addEventListener('mouseenter', () => clearTimeout(closeTimer));
      panel.addEventListener('mouseleave', scheduleClose);

      button?.setAttribute('aria-haspopup', 'true');
      button?.setAttribute('aria-expanded', 'false');
      button.addEventListener('click', e => {
        e.preventDefault();
        panel.classList.contains('hidden') ? open() : scheduleClose();
      });
      li.addEventListener('focusin', open);
      li.addEventListener('focusout', (e) => {
        if (!li.contains(e.relatedTarget)) scheduleClose();
      });
    });

    document.addEventListener('click', (e) => { if (!host.contains(e.target)) closeAll(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });

    if (window.lucide) try { lucide.createIcons(); } catch(e){}
    document.dispatchEvent(new CustomEvent('megamenu:rendered'));
    return true;
  }

  function tryBuild(retry) {
    if (buildMegaMenu()) return;
    if (retry > 0) setTimeout(() => tryBuild(retry - 1), 80);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => tryBuild(20));
  } else {
    tryBuild(20);
  }
  document.addEventListener('shell:rendered', () => tryBuild(5));

  window.WBMega = { build: buildMegaMenu };
})();
