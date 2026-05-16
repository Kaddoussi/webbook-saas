/* WebBook SaaS — Renders nav + footer on every page.
 * Place <div data-shell></div> at top and <div data-shell-foot></div> at bottom.
 * Set <body data-prefix=""> for root pages, or data-prefix="../" for /pages/.
 */
(function () {
  function navHTML(prefix) {
    return `
    <header class="fixed top-0 inset-x-0 z-50" data-brand-id-hide>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3">
        <nav class="wb-glass rounded-2xl flex items-center justify-between px-4 sm:px-6 py-3 relative">
          <a href="${prefix}index.html" class="flex items-center gap-2 group" aria-label="WebBook SaaS home">
            <span class="relative inline-flex w-9 h-9 items-center justify-center">
              <span data-wb-logo="master" data-size="36" class="block"></span>
            </span>
            <span class="brand-id-text font-display font-bold text-lg tracking-tight text-slate-900 dark:text-white" style="font-family: 'Fraunces','Space Grotesk', serif;">
              Web<span class="wb-gradient-text">Book</span>
            </span>
          </a>

          <ul data-mega-host data-prefix="${prefix}" class="hidden lg:flex items-center gap-7 text-sm font-medium"></ul>

          <div class="flex items-center gap-1.5">
            <button class="nav-icon-btn wb-btn-ghost text-slate-700 dark:text-slate-200" data-aside-toggle="wb-aside-lang" aria-label="Choose language" title="Language">
              <i data-lucide="languages" class="w-5 h-5"></i>
              <span class="ring-pulse"></span>
            </button>
            <button class="nav-icon-btn wb-btn-ghost text-slate-700 dark:text-slate-200" data-aside-toggle="wb-aside-user" aria-label="User account" title="Account">
              <i data-lucide="user-circle" class="w-5 h-5"></i>
            </button>
            <button data-theme-toggle class="nav-icon-btn wb-btn-ghost" aria-label="Toggle theme">
              <i data-theme-icon="sun" data-lucide="sun" class="w-5 h-5"></i>
              <i data-theme-icon="moon" data-lucide="moon" class="w-5 h-5 hidden"></i>
            </button>
            <a href="${prefix}pages/join.html" class="hidden sm:inline-flex wb-btn-primary rounded-lg px-4 py-2 text-sm font-semibold items-center gap-1 ml-1">
              Start free <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
            <button data-mobile-toggle class="lg:hidden wb-btn-ghost rounded-lg w-10 h-10 flex items-center justify-center" aria-label="Menu"><i data-lucide="menu" class="w-5 h-5"></i></button>
          </div>
        </nav>
        <div id="mobileMenu" class="hidden lg:hidden wb-glass rounded-2xl mt-2 p-4 max-h-[80vh] overflow-y-auto">
          <div data-mega-mobile></div>
          <a href="${prefix}pages/join.html" class="wb-btn-primary rounded-lg px-4 py-2 text-sm font-semibold inline-flex mt-3">Start free</a>
        </div>
      </div>
    </header>`;
  }

  function footHTML(prefix) {
    const p = prefix;
    const inPages = p === '../';
    const link = (slug) => inPages ? slug : `pages/${slug}`;
    return `
    <footer class="border-t border-slate-200/60 dark:border-white/5 pt-16 pb-8 mt-16 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-6 gap-10">
        <div class="md:col-span-2">
          <a href="${p}index.html" class="flex items-center gap-2">
            <span data-wb-logo="master" data-size="40" class="block"></span>
            <span class="font-display font-bold text-lg text-slate-900 dark:text-white" style="font-family: 'Fraunces','Space Grotesk', serif;">Web<span class="wb-gradient-text">Book</span></span>
          </a>
          <p class="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-sm">
            <strong>From manuscript to a living, breathing, multilingual WebBook in 60 seconds.</strong> Built for authors who want millions of readers — not boring PDFs.
          </p>
          <form data-newsletter class="mt-5 flex max-w-sm" aria-label="Newsletter signup">
            <input type="email" required placeholder="you@email.com" class="flex-1 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/10 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:border-violet-500" />
            <button type="submit" class="wb-btn-primary rounded-r-lg px-4 text-sm font-semibold">Subscribe</button>
          </form>
          <p class="mt-3 text-xs text-slate-500">Monthly tips for authors. No noise. Unsubscribe anytime.</p>
        </div>

        <div>
          <h4 class="font-semibold text-slate-900 dark:text-white text-sm">Product</h4>
          <ul class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="${link('what-is-webbook.html')}" class="hover:text-violet-500">What is a WebBook?</a></li>
            <li><a href="${link('how-it-works.html')}" class="hover:text-violet-500">How it works</a></li>
            <li><a href="${link('features.html')}" class="hover:text-violet-500">All features</a></li>
            <li><a href="${link('demo.html')}" class="hover:text-violet-500">Live demo</a></li>
            <li><a href="${link('pricing.html')}" class="hover:text-violet-500">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-slate-900 dark:text-white text-sm">For You</h4>
          <ul class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="${link('for-authors.html')}" class="hover:text-violet-500">For authors</a></li>
            <li><a href="${link('for-readers.html')}" class="hover:text-violet-500">For readers</a></li>
            <li><a href="${link('for-organizations.html')}" class="hover:text-violet-500">For orgs</a></li>
            <li><a href="${link('use-education.html')}" class="hover:text-violet-500">Education</a></li>
            <li><a href="${link('use-publishers.html')}" class="hover:text-violet-500">Publishers</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-slate-900 dark:text-white text-sm">Resources</h4>
          <ul class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="${link('handbook.html')}" class="hover:text-violet-500">Author handbook</a></li>
            <li><a href="${link('academy.html')}" class="hover:text-violet-500">Academy</a></li>
            <li><a href="${link('showcase.html')}" class="hover:text-violet-500">Showcase</a></li>
            <li><a href="${link('blog.html')}" class="hover:text-violet-500">Blog</a></li>
            <li><a href="${link('faqs.html')}" class="hover:text-violet-500">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-slate-900 dark:text-white text-sm">Company</h4>
          <ul class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="${link('about.html')}" class="hover:text-violet-500">About</a></li>
            <li><a href="${link('contact.html')}" class="hover:text-violet-500">Contact</a></li>
            <li><a href="${link('join.html')}" class="hover:text-violet-500">Start free</a></li>
            <li><a href="${link('privacy.html')}" class="hover:text-violet-500">Privacy</a></li>
            <li><a href="${link('terms.html')}" class="hover:text-violet-500">Terms</a></li>
          </ul>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 mt-12 pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-wrap items-center justify-between gap-4">
        <p class="text-xs text-slate-500">© 2026 WebBook SaaS · Books that breathe · Built for authors.</p>
        <div class="flex items-center gap-3 text-slate-500">
          <a href="${link('blog.html')}" class="hover:text-violet-500" aria-label="Blog"><i data-lucide="rss" class="w-4 h-4"></i></a>
          <a href="${link('showcase.html')}" class="hover:text-violet-500" aria-label="Showcase"><i data-lucide="sparkles" class="w-4 h-4"></i></a>
          <a href="${link('academy.html')}" class="hover:text-violet-500" aria-label="Academy"><i data-lucide="graduation-cap" class="w-4 h-4"></i></a>
          <a href="${link('contact.html')}" class="hover:text-violet-500" aria-label="Contact"><i data-lucide="mail" class="w-4 h-4"></i></a>
        </div>
      </div>
    </footer>`;
  }

  function loadOnce(src) {
    if (document.querySelector(`script[data-auto-src="${src}"]`)) return;
    const s = document.createElement('script');
    s.src = src; s.dataset.autoSrc = src; s.defer = true;
    document.head.appendChild(s);
  }
  function loadCssOnce(href) {
    if (document.querySelector(`link[data-auto-css="${href}"]`)) return;
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = href; l.dataset.autoCss = href;
    document.head.appendChild(l);
  }

  function renderShell() {
    const prefix = document.body && document.body.dataset.prefix || '';
    loadCssOnce(`${prefix}css/enhancements.css`);
    loadOnce(`${prefix}js/enhancements.js`);

    const head = document.querySelector('[data-shell]');
    const foot = document.querySelector('[data-shell-foot]');
    if (head && !head.dataset.shellRendered) {
      head.innerHTML = navHTML(prefix);
      head.dataset.shellRendered = '1';
    }
    if (foot && !foot.dataset.shellRendered) {
      foot.innerHTML = footHTML(prefix);
      foot.dataset.shellRendered = '1';
    }
    if (window.WBLogos) try { window.WBLogos.renderAuto(); } catch(e){}
    if (window.lucide) try { lucide.createIcons(); } catch(e){}
    document.dispatchEvent(new CustomEvent('shell:rendered'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderShell);
  } else {
    renderShell();
  }
})();
