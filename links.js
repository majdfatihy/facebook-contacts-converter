/* =====================================================================
   links.js — كل روابط التواصل الاجتماعي في مكان واحد. عدّل SITE_LINKS فقط.
   Social links in one place. Edit SITE_LINKS only. Empty string '' hides a button.
   Pages just need an empty <div class="social-links"></div> wherever icons should appear.
   ===================================================================== */
window.SITE_LINKS = {

  /* ---- فيديو شرح الأداة ---- */
  // معرّف الفيديو = الـ 11 حرفاً بعد youtu.be/ أو v= في رابط يوتيوب. اتركه فارغاً '' ليختفي الفيديو من كل الصفحات.
  tutorial: { id: 'QwlORPLlTIE' },

  /* ---- الرسالة الجاهزة التي تُرسل عبر واتساب (العنوان + الرابط + النص) ---- */
  message: {
    title: { ar: 'محوّل جهات اتصال فيسبوك', en: 'Facebook Contacts Converter' },
    text: {
      ar: 'مرحباً، عندي استفسار بخصوص أداة تحويل جهات اتصال فيسبوك.',
      en: 'Hi, I have a question about the Facebook Contacts Converter.'
    },
    url: '' // فارغ = رابط الصفحة الحالية تلقائياً
  },

  /* ---- روابط التواصل (اترك الحقل فارغاً '' لإخفاء الزر) ---- */
  social: {
    youtube:   'https://youtube.com/@majdfatihy',
    facebook:  'https://www.facebook.com/majdfatihyfp',
    instagram: 'https://www.instagram.com/majdfatihy',
    // واتساب: رقمك بالصيغة الدولية بدون + (يفتح محادثة معك برسالة جاهزة) أو 'share'
    whatsapp:  '201066732514',
    // تليجرام: 'share' أو رابط/اسم مستخدمك
    telegram:  'https://t.me/majdfathy'
  },

  // ترتيب ظهور الأيقونات
  order: ['youtube', 'facebook', 'instagram', 'whatsapp', 'telegram']
};

(function () {
  var C = window.SITE_LINKS;
  var ICONS = {
    youtube:   '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>',
    facebook:  '<path d="M14 21v-8h2.6l.4-3H14V8.2c0-.9.3-1.5 1.6-1.5H17V4.1C16.7 4.1 15.8 4 14.8 4 12.6 4 11 5.3 11 7.8V10H8.5v3H11v8z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor"/>',
    whatsapp:  '<path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .7c-1-.4-2-1.4-2.4-2.4l.7-1-1-2z"/>',
    telegram:  '<path d="M21.5 4.5 2.8 11.7c-.8.3-.8 1.4 0 1.7l4.7 1.7 1.8 5.7c.2.6.9.8 1.4.4l2.6-2.2 4.6 3.4c.6.4 1.3.1 1.5-.6l3-14.6c.2-.8-.5-1.4-1.2-1.1z"/><path d="m8 14.6 9.5-7.3"/>'
  };
  var LABEL = {
    youtube:   { ar: 'يوتيوب', en: 'YouTube' },
    facebook:  { ar: 'فيسبوك', en: 'Facebook' },
    instagram: { ar: 'انستجرام', en: 'Instagram' },
    whatsapp:  { ar: 'واتساب', en: 'WhatsApp' },
    telegram:  { ar: 'تليجرام', en: 'Telegram' }
  };

  function lang() { return document.documentElement.lang === 'en' ? 'en' : 'ar'; }
  function pick(o) { return typeof o === 'string' ? o : (o && (o[lang()] || o.ar)) || ''; }

  function msg() {
    var m = C.message || {};
    var url = m.url || location.href.split('#')[0];
    return { title: pick(m.title), text: pick(m.text), url: url, full: [pick(m.title), url, pick(m.text)].filter(Boolean).join('\n') };
  }

  function href(key) {
    var v = String((C.social || {})[key] || '').trim();
    if (!v) return '';
    var m = msg();
    if (key === 'whatsapp') {
      var phone = v === 'share' ? '' : v.replace(/\D/g, '');
      return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(m.full);
    }
    if (key === 'telegram') {
      if (v === 'share') return 'https://t.me/share/url?url=' + encodeURIComponent(m.url) + '&text=' + encodeURIComponent([m.title, m.text].filter(Boolean).join('\n'));
      return /^https?:\/\//i.test(v) ? v : 'https://t.me/' + v.replace(/^@/, '');
    }
    return /^https?:\/\//i.test(v) ? v : '';
  }

  var css = '.social-links{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin:0 0 16px}'
    + '.social-links:empty{display:none}'
    + '.social-links a{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;color:var(--tx,inherit);background:var(--card,transparent);border:1px solid var(--bd,rgba(128,128,128,.35));text-decoration:none;transition:transform .2s,background .2s,border-color .2s,color .2s}'
    + '.social-links.on-dark a{color:#fff;background:transparent;border-color:rgba(255,255,255,.45)}'
    + '.social-links a svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}'
    + '.social-links a:hover,.social-links a:focus-visible{transform:translateY(-3px);color:#fff;background:var(--c);border-color:var(--c)}'
    + '.social-links a.youtube{--c:#d40000}.social-links a.facebook{--c:#1877f2}.social-links a.instagram{--c:#e1306c}.social-links a.whatsapp{--c:#128c4a}.social-links a.telegram{--c:#229ed9}'
    + '@media (prefers-reduced-motion:reduce){.social-links a{transition:none}.social-links a:hover{transform:none}}';
  var st = document.createElement('style'); st.id = 'links-css'; st.textContent = css; document.head.appendChild(st);

  function render() {
    var boxes = document.querySelectorAll('.social-links'); if (!boxes.length) return;
    var l = lang(), out = '';
    (C.order || Object.keys(ICONS)).forEach(function (k) {
      var h = href(k); if (!h || !ICONS[k]) return;
      var name = LABEL[k][l];
      out += '<a class="' + k + '" href="' + h.replace(/"/g, '&quot;') + '" target="_blank" rel="noopener noreferrer" aria-label="' + name + '" title="' + name + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[k] + '</svg></a>';
    });
    for (var i = 0; i < boxes.length; i++) boxes[i].innerHTML = out;
  }

  var VT = {
    ar: { play: 'شغّل الفيديو', title: 'شاهد شرح الأداة وطريقة عملها', yt: 'مشاهدة على يوتيوب' },
    en: { play: 'Play video', title: 'Watch how the tool works', yt: 'Watch on YouTube' }
  };
  function videos() {
    var id = String((C.tutorial || {}).id || '').trim(), els = document.querySelectorAll('[data-video]');
    var ok = /^[\w-]{11}$/.test(id), t = VT[lang()];
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (!ok) { el.style.display = 'none'; continue; }
      el.style.display = '';
      if (!el.getAttribute('data-built')) {
        el.setAttribute('data-built', '1');
        el.innerHTML = '<div class="vbox"><button type="button" class="vplay"><span class="vtri" aria-hidden="true"></span><span class="vlab"></span></button></div><p class="vyt"><a target="_blank" rel="noopener noreferrer"></a></p>';
        var box = el.firstChild;
        // thumbnail is requested from YouTube only where data-thumb is set (never on the converter page)
        if (el.getAttribute('data-thumb')) box.style.backgroundImage = 'linear-gradient(#0003,#0003),url(https://i.ytimg.com/vi/' + id + '/hqdefault.jpg)';
        el.querySelector('.vplay').onclick = function () {
          var b = this.parentNode, f = document.createElement('iframe');
          f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
          f.title = VT[lang()].title;
          f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
          f.setAttribute('allowfullscreen', '');
          f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
          b.innerHTML = ''; b.style.backgroundImage = 'none'; b.appendChild(f);
        };
      }
      var lab = el.querySelector('.vlab'), a = el.querySelector('.vyt a');
      if (lab) lab.textContent = t.play;
      a.href = 'https://youtu.be/' + id; a.textContent = t.yt;
    }
  }
  var vcss = '.vbox{position:relative;aspect-ratio:16/9;width:100%;max-width:760px;margin:0 auto;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,#0a5e50,#0a7a65);background-size:cover;background-position:center;border:1px solid var(--bd,rgba(128,128,128,.35))}'
    + '.vbox iframe{position:absolute;inset:0;width:100%;height:100%;border:0}'
    + '.vplay{position:absolute;inset:0;width:100%;border:0;background:transparent;color:#fff;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;font:600 1rem system-ui,sans-serif}'
    + '.vtri{width:68px;height:68px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 4px 18px #0005;transition:transform .2s}'
    + '.vtri::after{content:"";border-style:solid;border-width:11px 0 11px 18px;border-color:transparent transparent transparent #0a7a65;margin-inline-start:4px}'
    + '[dir=rtl] .vtri::after{border-width:11px 18px 11px 0;border-color:transparent #0a7a65 transparent transparent;margin-inline-start:0;margin-inline-end:4px}'
    + '.vplay:hover .vtri,.vplay:focus-visible .vtri{transform:scale(1.08)}.vplay:focus-visible{outline:3px solid #fff;outline-offset:-6px}'
    + '.vlab{text-shadow:0 1px 6px #000a}.vyt{text-align:center;margin:8px 0 0;font-size:.88rem}.vyt a{color:var(--ac,inherit)}';
  var vs = document.createElement('style'); vs.textContent = vcss; document.head.appendChild(vs);

  window.renderSocialLinks = render;
  window.renderVideos = videos;
  videos();
  render();
  new MutationObserver(function () { render(); videos(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
