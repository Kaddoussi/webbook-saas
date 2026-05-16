/* WebBook SaaS — Boot loader (place EARLY in <head>) */
(function () {
  var css = `
  #wb-loader{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;
    background:radial-gradient(ellipse at center,#1a1325 0%,#0a0613 100%);
    transition:opacity .55s ease,visibility .55s ease;font-family:'Fraunces','Space Grotesk',serif}
  #wb-loader.is-hidden{opacity:0;visibility:hidden;pointer-events:none}
  #wb-loader .loader-inner{display:flex;flex-direction:column;align-items:center;gap:1.25rem}
  .wb-loader-book{width:120px;height:90px;position:relative;perspective:800px}
  .wb-loader-book .page{position:absolute;top:0;bottom:0;width:50%;
    background:linear-gradient(135deg,#fffaf2,#fef3c7);border-radius:4px 0 0 4px;
    transform-origin:right center;box-shadow:0 6px 18px -8px rgba(0,0,0,.4)}
  .wb-loader-book .page.left{left:0;animation:wbBookL 1.6s ease-in-out infinite}
  .wb-loader-book .page.right{left:50%;transform-origin:left center;border-radius:0 4px 4px 0;animation:wbBookR 1.6s ease-in-out infinite}
  .wb-loader-book .spine{position:absolute;top:-4px;bottom:-4px;left:calc(50% - 2px);width:4px;
    background:linear-gradient(180deg,#7c3aed,#f43f5e);border-radius:2px;z-index:2}
  @keyframes wbBookL{0%,100%{transform:rotateY(0deg)}50%{transform:rotateY(-25deg)}}
  @keyframes wbBookR{0%,100%{transform:rotateY(0deg)}50%{transform:rotateY(25deg)}}
  #wb-loader .loader-text{font-weight:700;font-size:1.1rem;letter-spacing:-.01em;
    background:linear-gradient(90deg,#7c3aed,#f43f5e,#f59e0b,#7c3aed);-webkit-background-clip:text;background-clip:text;color:transparent;
    background-size:200% 100%;animation:wbSlide 2.6s linear infinite}
  #wb-loader .loader-bar{width:220px;height:3px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden;position:relative}
  #wb-loader .loader-bar::after{content:"";position:absolute;inset:0;width:40%;
    background:linear-gradient(90deg,transparent,#7c3aed,#f43f5e,transparent);animation:wbBar 1.4s ease-in-out infinite}
  @keyframes wbSlide{0%{background-position:0 0}100%{background-position:200% 0}}
  @keyframes wbBar{0%{transform:translateX(-100%)}100%{transform:translateX(350%)}}
  @media(prefers-reduced-motion:reduce){
    .wb-loader-book .page,#wb-loader .loader-text,#wb-loader .loader-bar::after{animation:none!important}
  }`;
  var style = document.createElement('style');
  style.id = 'wb-loader-css';
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);

  function build() {
    if (document.getElementById('wb-loader')) return;
    if (!document.body) return setTimeout(build, 10);
    var loader = document.createElement('div');
    loader.id = 'wb-loader';
    loader.setAttribute('aria-hidden', 'true');
    loader.innerHTML =
      '<div class="loader-inner">' +
        '<div class="wb-loader-book" aria-hidden="true">' +
          '<div class="page left"></div>' +
          '<div class="spine"></div>' +
          '<div class="page right"></div>' +
        '</div>' +
        '<div class="loader-text">Opening your WebBook…</div>' +
        '<div class="loader-bar" role="progressbar" aria-label="Loading"></div>' +
      '</div>';
    document.body.appendChild(loader);
  }
  if (document.body) build();
  else document.addEventListener('DOMContentLoaded', build, { once: true });

  function hide() {
    var l = document.getElementById('wb-loader');
    if (!l) return;
    setTimeout(function () { l.classList.add('is-hidden'); }, 200);
    setTimeout(function () { l.parentNode && l.parentNode.removeChild(l); }, 1200);
  }
  if (document.readyState === 'complete') setTimeout(hide, 700);
  else window.addEventListener('load', function () { setTimeout(hide, 400); });
  setTimeout(hide, 6000);
})();
