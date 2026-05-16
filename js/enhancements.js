/* WebBook SaaS — UX enhancements (loader, asides, active states)
 * IMPORTANT: this file may be loaded twice. It guards via window.__wbEnhanced.
 */
(function () {
  if (window.__wbEnhanced) return;
  window.__wbEnhanced = true;

  // ========== 1. PAGE LOADER ==========
  function injectLoader() {
    if (document.getElementById('wb-loader')) return;
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', injectLoader, { once: true });
      return;
    }
    const loader = document.createElement('div');
    loader.id = 'wb-loader';
    loader.setAttribute('aria-hidden', 'true');
    loader.innerHTML = `
      <div class="loader-inner">
        <div class="wb-loader-book" aria-hidden="true">
          <div class="page left"></div>
          <div class="spine"></div>
          <div class="page right"></div>
        </div>
        <div class="loader-text">Opening your WebBook…</div>
        <div class="loader-bar" role="progressbar" aria-label="Loading"></div>
      </div>`;
    document.body.appendChild(loader);
  }
  function hideLoader() {
    const l = document.getElementById('wb-loader');
    if (!l) return;
    setTimeout(() => l.classList.add('is-hidden'), 200);
    setTimeout(() => l.parentNode && l.parentNode.removeChild(l), 1100);
  }
  injectLoader();
  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 700);
  } else {
    window.addEventListener('load', () => setTimeout(hideLoader, 400));
  }
  setTimeout(hideLoader, 6000);

  // ========== 2. ACTIVE STATES ==========
  function currentPageKey() {
    const path = location.pathname.split('/').pop() || 'index.html';
    return (path || 'index.html').toLowerCase();
  }
  function applyActiveStates() {
    const here = currentPageKey();
    document.querySelectorAll('[data-mega-host] [data-mega-trigger]').forEach(li => {
      let hasActive = false;
      li.querySelectorAll('[data-mega-panel] a').forEach(a => {
        const href = (a.getAttribute('href') || '').split('/').pop().split('#')[0].toLowerCase();
        if (href && href === here) { a.setAttribute('data-active-link',''); hasActive = true; }
      });
      if (hasActive) li.setAttribute('data-active','');
    });
    document.querySelectorAll('[data-mega-mobile] a').forEach(a => {
      const href = (a.getAttribute('href') || '').split('/').pop().split('#')[0].toLowerCase();
      if (href === here) a.setAttribute('data-active-link','');
    });
  }

  // ========== 3. ASIDES ==========
  const LANGS = [
    { code:'en', flag:'🇬🇧', name:'English' },
    { code:'fr', flag:'🇫🇷', name:'Français' },
    { code:'es', flag:'🇪🇸', name:'Español' },
    { code:'de', flag:'🇩🇪', name:'Deutsch' },
    { code:'pt', flag:'🇵🇹', name:'Português' },
    { code:'it', flag:'🇮🇹', name:'Italiano' },
    { code:'ar', flag:'🇸🇦', name:'العربية' },
    { code:'zh', flag:'🇨🇳', name:'中文' }
  ];

  function buildAsides() {
    if (!document.body) return;
    if (document.getElementById('wb-aside-host')) return;
    const host = document.createElement('div');
    host.id = 'wb-aside-host';
    host.innerHTML = `
      <div class="wb-aside-backdrop" data-aside-close></div>
      <aside class="wb-aside" id="wb-aside-user" role="dialog" aria-label="Your studio" aria-hidden="true">
        <header>
          <h3>Your studio</h3>
          <button class="wb-btn-ghost rounded-lg w-9 h-9 flex items-center justify-center" data-aside-close aria-label="Close">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </header>
        <div class="aside-body">
          <div class="flex items-center gap-3">
            <span class="user-avatar">A</span>
            <div>
              <p class="font-semibold">Welcome, author</p>
              <p class="text-xs opacity-70">Sign in to open your WebBook studio</p>
            </div>
          </div>
          <div class="mt-5 space-y-2">
            <button class="aside-action" data-aside-act="signin"><i data-lucide="log-in" class="w-4 h-4 text-violet-400"></i><span>Sign in</span></button>
            <button class="aside-action" data-aside-act="signup"><i data-lucide="user-plus" class="w-4 h-4 text-rose-400"></i><span>Create account (free)</span></button>
            <a class="aside-action" href="#"><i data-lucide="library" class="w-4 h-4 text-amber-400"></i><span>My WebBooks</span></a>
            <a class="aside-action" href="#"><i data-lucide="bar-chart-3" class="w-4 h-4 text-cyan-400"></i><span>Reader analytics</span></a>
            <a class="aside-action" href="#"><i data-lucide="wallet" class="w-4 h-4 text-emerald-400"></i><span>Earnings</span></a>
            <a class="aside-action" href="#"><i data-lucide="settings" class="w-4 h-4 text-slate-300"></i><span>Settings</span></a>
          </div>
          <p class="mt-6 text-xs opacity-60">New here? Ship your first WebBook free in under a minute.</p>
        </div>
      </aside>
      <aside class="wb-aside" id="wb-aside-lang" role="dialog" aria-label="Choose language" aria-hidden="true">
        <header>
          <h3>Read in your language</h3>
          <button class="wb-btn-ghost rounded-lg w-9 h-9 flex items-center justify-center" data-aside-close aria-label="Close">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </header>
        <div class="aside-body">
          <p class="text-sm opacity-70 mb-4">Every WebBook auto-translates while preserving the author's voice.</p>
          <div class="lang-grid">
            ${LANGS.map(l => `<button class="lang-item" data-lang="${l.code}" aria-selected="false"><span>${l.flag}</span><span class="font-medium">${l.name}</span></button>`).join('')}
          </div>
        </div>
      </aside>`;
    document.body.appendChild(host);
  }

  function openAside(id) {
    const aside = document.getElementById(id);
    const backdrop = document.querySelector('.wb-aside-backdrop');
    if (!aside) return;
    document.querySelectorAll('.wb-aside').forEach(a => { a.classList.remove('is-open'); a.setAttribute('aria-hidden','true'); });
    aside.classList.add('is-open');
    aside.setAttribute('aria-hidden','false');
    backdrop && backdrop.classList.add('is-open');
  }
  function closeAsides() {
    document.querySelectorAll('.wb-aside').forEach(a => { a.classList.remove('is-open'); a.setAttribute('aria-hidden','true'); });
    document.querySelectorAll('.wb-aside-backdrop').forEach(b => b.classList.remove('is-open'));
  }

  function wireAsides() {
    document.querySelectorAll('[data-aside-toggle]').forEach(btn => {
      if (btn.dataset.asideWired) return;
      btn.dataset.asideWired = '1';
      btn.addEventListener('click', () => openAside(btn.dataset.asideToggle));
    });
    if (!window.__wbAsideGlobal) {
      window.__wbAsideGlobal = true;
      document.addEventListener('click', (e) => { if (e.target.closest('[data-aside-close]')) closeAsides(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAsides(); });
    }
    const stored = localStorage.getItem('wb-lang') || 'en';
    document.querySelectorAll('[data-lang]').forEach(item => {
      if (item.dataset.lang === stored) item.setAttribute('aria-selected','true');
      if (item.dataset.langWired) return;
      item.dataset.langWired = '1';
      item.addEventListener('click', () => {
        document.querySelectorAll('[data-lang]').forEach(x => x.setAttribute('aria-selected','false'));
        item.setAttribute('aria-selected','true');
        localStorage.setItem('wb-lang', item.dataset.lang);
        document.documentElement.setAttribute('lang', item.dataset.lang);
        if (item.dataset.lang === 'ar') document.documentElement.setAttribute('dir','rtl');
        else document.documentElement.removeAttribute('dir');
      });
    });
    document.querySelectorAll('[data-aside-act]').forEach(b => {
      if (b.dataset.actWired) return;
      b.dataset.actWired = '1';
      b.addEventListener('click', () => {
        const act = b.dataset.asideAct;
        if (act === 'signin' || act === 'signup') {
          const prefix = document.body.dataset.prefix || '';
          location.href = prefix + 'pages/join.html';
        }
      });
    });
  }

  function initOnce() {
    buildAsides();
    applyActiveStates();
    wireAsides();
    if (window.lucide) try { lucide.createIcons(); } catch(e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initOnce, 50));
  } else {
    setTimeout(initOnce, 50);
  }
  document.addEventListener('shell:rendered', () => setTimeout(initOnce, 30));
  document.addEventListener('megamenu:rendered', () => setTimeout(applyActiveStates, 30));

  window.WBEnhance = { applyActiveStates, openAside, closeAsides, hideLoader };
})();
