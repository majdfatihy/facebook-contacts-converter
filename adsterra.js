/*!
 * Adsterra ads loader — ALL Adsterra code lives in THIS single file (no adsterra-frame.html anymore).
 * To disable: set ENABLED=false below, or delete the <script src="adsterra.js"> tag from the pages.
 * Pages only need empty slots like <div data-ad="top"></div>.
 * Only banner / native units are used. Page-level scripts (popunder / push-notification style) were removed.
 */
(function () {
  'use strict';
  var ENABLED = true;

  // ---- Settings ----------------------------------------------------------
  // Floating "support" chip + footer link that open the Smartlink in a new tab.
  // Turned OFF because it opens a new tab (popup-like). Set to true to bring it back.
  var SUPPORT_CHIP = false;
  var SUPPORT_COOLDOWN = 60000;
  var SUPPORT_LINK = 'https://araplhn.org/4/3f093ddf57a8ee45454ef2e9b69b320a';

  // ---- Units (official sizes, never resized) -----------------------------
  var U = {
    b728:  { k: 'b438ca159fef3619cd01dd89663463be', w: 728, h: 90 },
    m300:  { k: '729c9fd7aa7322cef370e2d2f67a5788', w: 300, h: 250 },
    b468:  { k: '1e423ba61e8df2d60437276587320065', w: 468, h: 60 },
    m320:  { k: '7ba3e4b2562ec32fe469244d1c937d74', w: 320, h: 50 },
    s160a: { k: 'fabddc7a40461c7b942294ab544c4344', w: 160, h: 300 },
    s160b: { k: 'd6d837601ee8eae05c4e2f5180e6638d', w: 160, h: 600 },
    native:{ k: '7d74d287d7c8907ca009698fb7e174e7', native: true, h: 280 }
  };

  // slot name -> [unit, minimum viewport width] (first match wins). Each unit is used once per page.
  var P = {
    top:   [['b728', 768], ['m320', 340]],
    mid:   [['m300', 330]],
    end:   [['native', 0]],
    seo:   [['b468', 520]],
    railL: [['s160b', 1340]],
    railR: [['s160a', 1340]]
  };

  if (!ENABLED) return;
  var used = {}, ar = function () { return document.documentElement.lang === 'ar'; };

  // ---- Code that runs INSIDE each ad iframe (was adsterra-frame.html) ----
  // Serialized into the iframe's srcdoc. Must stay self-contained (no outer variables).
  function frameMain(p) {
    var box;
    function say(t) {
      if (!p.dbg) return;
      if (!box) { box = document.createElement('pre'); box.style.cssText = 'font:12px monospace;color:#000;background:#fffc;padding:4px;margin:0;white-space:pre-wrap;position:fixed;left:0;top:0;right:0;z-index:9;max-height:100%;overflow:auto'; document.documentElement.appendChild(box); }
      box.textContent += t + '\n';
    }
    window.__adok = function (ok) { say(ok ? '1) ad script loaded OK' : '1) ad script FAILED to load -> blocked by adblock/DNS/network'); };
    var k = p.k;
    if (!/^[a-f0-9]{32}$/.test(k)) { say('bad key'); return; }
    say('key ' + k.slice(0, 6) + '… size ' + p.w + 'x' + p.h + ' | referrer ' + (document.referrer || '(none)'));
    var tag = ' onload="__adok(1)" onerror="__adok(0)"';
    if (p.n) {
      document.write('<script async="async" data-cfasync="false" src="https://bauval.org/21/' + k + '"' + tag + '><\/script><div id="container-' + k + '"></div>');
    } else {
      window.atOptions = { key: k, format: 'iframe', height: p.h, width: p.w, params: {} };
      document.write('<script src="https://bauval.org/22/' + k + '"' + tag + '><\/script>');
    }
    setTimeout(function () {
      var n = document.getElementsByTagName('iframe').length, c = document.getElementById('container-' + k);
      say('2) after 4s: iframes injected = ' + n + (c ? ' | native container children = ' + c.children.length : ''));
      say(n || (c && c.children.length) ? '=> the network DID return an ad. If blank: "no fill" / site not approved yet in Adsterra.' : '=> script ran but injected nothing: domain not approved for this key, or no ads to serve.');
    }, 4000);
  }

  function frameDoc(u, dbg) {
    var params = { k: u.k, w: u.w || 0, h: u.h, n: u.native ? 1 : 0, dbg: dbg ? 1 : 0 };
    return '<!doctype html><html><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><title>ad</title>' +
      '<style>html,body{margin:0;padding:0;overflow:hidden;background:transparent}</style></head><body><script>(' +
      frameMain.toString() + ')(' + JSON.stringify(params) + ');<\/script></body></html>';
  }

  function css() {
    var s = document.createElement('style');
    s.textContent = '.adx{margin:14px auto;text-align:center;max-width:100%}.adl{display:block;font:11px system-ui,sans-serif;opacity:.65;margin-bottom:3px}' +
      '.adx iframe{border:0;display:block;margin:0 auto;background:transparent;max-width:100%}' +
      '#adsSupport{position:fixed;bottom:calc(14px + env(safe-area-inset-bottom,0px));inset-inline-start:14px;z-index:30;background:#0a7a65;color:#fff;padding:8px 14px;border-radius:99px;font:600 .85rem system-ui,sans-serif;text-decoration:none;box-shadow:0 3px 12px #0004}' +
      '@media print{#adsSupport,.adx{display:none}}';
    document.head.appendChild(s);
  }

  function frame(holder, u) {
    // Pages marked data-ads="open" load the ad plainly (ad code shares this site's origin, so it is NOT isolated).
    // Any other page loads it sandboxed WITHOUT allow-same-origin (isolated, but ads may show blank).
    var f = document.createElement('iframe');
    f.title = 'Advertisement';
    if (document.body.getAttribute('data-ads') !== 'open') {
      f.setAttribute('sandbox', 'allow-scripts allow-popups allow-popups-to-escape-sandbox');
    }
    f.setAttribute('scrolling', 'no');
    f.width = u.native ? '100%' : u.w; f.height = u.h;
    f.srcdoc = frameDoc(u, /[?&]adsdebug=1/.test(location.search));
    holder.appendChild(f);
  }

  function mount(slot) {
    var rules = P[slot.getAttribute('data-ad')] || [], w = window.innerWidth, pick = null;
    for (var i = 0; i < rules.length; i++) if (w >= rules[i][1] && !used[rules[i][0]]) { pick = rules[i][0]; break; }
    if (!pick) return;
    used[pick] = 1;
    var u = U[pick], box = document.createElement('div'), lab = document.createElement('small'), holder = document.createElement('div');
    box.className = 'adx'; lab.className = 'adl'; lab.setAttribute('data-l', '1');
    lab.textContent = ar() ? 'إعلان' : 'Advertisement';
    holder.style.cssText = u.native ? 'width:100%;max-width:728px;height:' + u.h + 'px;margin:0 auto' : 'width:' + u.w + 'px;height:' + u.h + 'px;margin:0 auto';
    box.appendChild(lab); box.appendChild(holder); slot.appendChild(box);
    if (/^rail/.test(slot.getAttribute('data-ad'))) {
      slot.style.cssText = 'position:fixed;top:84px;z-index:3;' + (slot.getAttribute('data-ad') === 'railL' ? 'left:10px' : 'right:10px');
    }
    var go = function () { frame(holder, u); };
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { io.disconnect(); go(); } }, { rootMargin: '300px' });
      io.observe(holder);
    } else go();
  }

  function support() {
    if (!SUPPORT_CHIP) return;
    var txtChip = function () { return ar() ? '☕ ادعم الأداة · رابط راعٍ (إعلان)' : '☕ Support us · Sponsor link (ad)'; };
    var mk = function (id) {
      var a = document.createElement('a');
      if (id) a.id = id;
      a.href = SUPPORT_LINK; a.target = '_blank'; a.rel = 'sponsored noopener noreferrer';
      return a;
    };
    var chip = mk('adsSupport'); chip.textContent = txtChip();
    chip.addEventListener('click', function () {
      chip.style.display = 'none';
      setTimeout(function () { chip.style.display = ''; }, SUPPORT_COOLDOWN);
    });
    document.body.appendChild(chip);
    var foot = document.querySelector('footer'), fl = null;
    if (foot) {
      var d = document.createElement('div'); d.style.marginTop = '6px';
      fl = mk(); fl.style.cssText = 'color:inherit;text-decoration:underline';
      fl.textContent = ar() ? 'ادعم الصفحة بزيارة رابط الراعي (إعلان)' : 'Support this page by visiting a sponsor link (ad)';
      d.appendChild(fl); foot.appendChild(d);
    }
    new MutationObserver(function () {
      chip.textContent = txtChip();
      if (fl) fl.textContent = ar() ? 'ادعم الصفحة بزيارة رابط الراعي (إعلان)' : 'Support this page by visiting a sponsor link (ad)';
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  function init() {
    css();
    [].forEach.call(document.querySelectorAll('[data-ad]'), mount);
    support();
    // keep the "Advertisement" labels in sync with the page language
    new MutationObserver(function () {
      [].forEach.call(document.querySelectorAll('.adl'), function (l) { l.textContent = ar() ? 'إعلان' : 'Advertisement'; });
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }
  function start() { (window.requestIdleCallback || function (f) { setTimeout(f, 1200); })(init); }
  if (document.readyState === 'complete') start(); else addEventListener('load', start);
})();
