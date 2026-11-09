/* eCeez site-wide lead form: modal, inline contact form, and page-bottom CTA band.
   Works on the compiled React site without touching its bundle. Posts to Netlify Forms ("site-audit"). */
(function () {
  if (window.__eczLead) return; window.__eczLead = 1;
  var FORM = 'site-audit';
  var GFORM = 'docs.google.com/forms/d/e/1FAIpQLSecd8M7';
  var KEYS = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','oppref'];
  var uid = 0;

  var css = '\
.ecz,.ecz *{box-sizing:border-box}\
.ecz{font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;color:#111113;line-height:1.5}\
.ecz-card{text-align:left;color:#111113;background:#fff;border:1px solid #E2E0D3;border-radius:28px;padding:clamp(1.25rem,3vw,2rem);position:relative}\
.ecz .ecz-card h2{margin:.2rem 0 .3rem!important;font-size:1.65rem!important;line-height:1.1!important;font-weight:700!important;letter-spacing:-.04em!important;color:#111113!important;text-align:left!important}\
.ecz .ecz-lead{margin:0 0 1rem!important;color:#5F5F58!important;font-size:.97rem!important}\
.ecz-f{margin-bottom:.8rem}\
.ecz-f label{display:block;font-weight:600;font-size:.88rem;margin-bottom:.3rem}\
.ecz-f label small{font-weight:500;color:#5F5F58}\
.ecz-f input,.ecz-f select,.ecz-f textarea{width:100%;font:inherit;font-size:1rem;color:#111113;background:#FAF9F5;border:1.5px solid #E2E0D3;border-radius:14px;padding:.8rem 1rem;min-height:3rem;margin:0;transition:border-color .15s,box-shadow .15s}\
.ecz-f textarea{min-height:5rem;resize:vertical}\
.ecz-f select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'8\' fill=\'none\' stroke=\'%23111113\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M1 1l6 6 6-6\'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 1rem center;padding-right:2.5rem}\
.ecz-f input:focus,.ecz-f select:focus,.ecz-f textarea:focus{outline:0;border-color:#111113;background:#fff;box-shadow:0 0 0 4px rgba(220,248,99,.85)}\
.ecz-f.bad input{border-color:#C62828;background:#FFF6F5}\
.ecz-err{display:none;color:#B42318;font-size:.85rem;margin-top:.3rem;font-weight:500}\
.ecz-f.bad .ecz-err{display:block}\
.ecz-btn{display:flex;width:100%;align-items:center;justify-content:center;gap:.6rem;border:0;border-radius:999px;background:#111113;color:#DCF863;font:600 1.05rem/1 Inter,sans-serif;padding:1.1rem 1.5rem;cursor:pointer;transition:background .15s}\
.ecz-btn:hover{background:#2a2a2e}.ecz-btn[disabled]{opacity:.7;cursor:wait}\
.ecz-note{margin:.8rem 0 0;text-align:center;font-size:.88rem;color:#5F5F58}\
.ecz-fail{margin-top:.8rem;padding:.8rem 1rem;border-radius:12px;background:#FFF1EF;color:#B42318;font-size:.92rem}\
.ecz-hp{position:absolute!important;left:-9999px!important;height:0;overflow:hidden}\
.ecz-ok{text-align:center;padding:1.5rem .5rem}\
.ecz-ok i{display:inline-grid;place-items:center;width:56px;height:56px;border-radius:50%;background:#DCF863;margin-bottom:1rem;font-style:normal;font-size:1.6rem;font-weight:700}\
.ecz-ok h3{margin:0 0 .5rem;font-size:1.5rem;font-weight:700;letter-spacing:-.03em}\
.ecz-ok p{margin:0;color:#47474a}\
.ecz-badge{display:inline-block;background:#DCF863;border:1.5px solid #111113;border-radius:999px;padding:.25rem .75rem;font-size:.78rem;font-weight:700;margin-bottom:.5rem}\
/* floating button */\
.ecz-fab{position:fixed;right:1rem;bottom:calc(1rem + env(safe-area-inset-bottom));z-index:90;display:inline-flex;align-items:center;gap:.5rem;border:0;border-radius:999px;background:#DCF863;color:#111113;font:700 .95rem/1 Inter,sans-serif;padding:.95rem 1.25rem;cursor:pointer;box-shadow:0 0 0 1.5px #111113,0 14px 30px -10px rgba(17,17,19,.5);transition:translate .25s,opacity .25s}\
.ecz-fab:hover{background:#E6FF7A}\
.ecz-fab.off{translate:0 140%;opacity:0;pointer-events:none}\
/* dialog */\
dialog.ecz-dlg{border:0;padding:0;background:transparent;max-width:min(520px,calc(100% - 1.5rem));width:100%;max-height:calc(100% - 1.5rem);overflow:visible}\
dialog.ecz-dlg::backdrop{background:rgba(17,17,19,.65);backdrop-filter:blur(3px)}\
.ecz-dlg .ecz-card{max-height:calc(100vh - 2rem);overflow:auto;box-shadow:0 40px 80px -30px rgba(0,0,0,.6)}\
.ecz-x{position:absolute;right:14px;top:14px;width:38px;height:38px;border-radius:50%;border:1.5px solid #111113;background:#fff;cursor:pointer;font-size:1.3rem;line-height:1;color:#111113}\
.ecz-x:hover{background:#DCF863}\
/* bottom band */\
.ecz-band{padding:clamp(2rem,5vw,4rem) 0;background:transparent;animation:eczIn .45s ease both}@keyframes eczIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}\
.ecz-band-in{width:min(1180px,100% - 2rem);margin:0 auto;background:#111113;color:#fff;border-radius:clamp(26px,4vw,48px);padding:clamp(1.5rem,4vw,3.5rem);display:grid;gap:2rem;grid-template-columns:1fr;align-items:center}\
@media(min-width:900px){.ecz-band-in{grid-template-columns:1.05fr .95fr;gap:4rem}}\
.ecz-band-in>div>h2{margin:0;font-size:clamp(2rem,4.6vw,3.8rem);line-height:1.04;font-weight:700;letter-spacing:-.05em;color:#fff}\
.ecz-band-in>div>h2 em{font-style:normal;background:#DCF863;color:#111113;padding:0 .12em;border-radius:.14em}\
.ecz-band-in>div>p.sub{margin:1.1rem 0 0;color:#C9C9C0;font-size:1.1rem;max-width:28rem}\
.ecz-inline{max-width:640px}\
';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ---- campaign data ---- */
  var data = {};
  try { data = JSON.parse(sessionStorage.getItem('eceez_lp') || '{}'); } catch (e) {}
  try {
    var q = new URLSearchParams(location.search);
    KEYS.forEach(function (k) { if (q.get(k)) data[k] = q.get(k); });
    if (!data.landing) data.landing = location.href;
    sessionStorage.setItem('eceez_lp', JSON.stringify(data));
  } catch (e) {}

  function track(n, p) { try { window.gtag && gtag('event', n, p || {}); } catch (e) {} }

  function formHTML(title, lead, badge) {
    var id = 'ecz' + (++uid);
    return '<div class="ecz-card">' + (badge ? '<span class="ecz-badge">' + badge + '</span>' : '') +
      '<h2>' + title + '</h2><p class="ecz-lead">' + lead + '</p>' +
      '<form class="ecz-form" name="' + FORM + '" method="POST" action="/" novalidate>' +
      '<input type="hidden" name="form-name" value="' + FORM + '">' +
      '<p class="ecz-hp" aria-hidden="true"><label>Leave empty <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>' +
      '<input type="hidden" name="page_path"><input type="hidden" name="landing_page"><input type="hidden" name="referrer">' +
      KEYS.map(function (k) { return '<input type="hidden" name="' + k + '">'; }).join('') +
      '<div class="ecz-f"><label for="' + id + 's">Your store URL</label><input id="' + id + 's" name="store_url" type="text" inputmode="url" autocomplete="url" placeholder="yourstore.com" required><span class="ecz-err" role="alert"></span></div>' +
      '<div class="ecz-f"><label for="' + id + 'e">Work email</label><input id="' + id + 'e" name="email" type="email" autocomplete="email" placeholder="you@yourbrand.com" required><span class="ecz-err" role="alert"></span></div>' +
      '<div class="ecz-f"><label for="' + id + 'n">Your name</label><input id="' + id + 'n" name="name" type="text" autocomplete="name" placeholder="First and last name" required><span class="ecz-err" role="alert"></span></div>' +
      '<div class="ecz-f"><label for="' + id + 'g">What should we look at first?</label><select id="' + id + 'g" name="goal">' +
        '<option>More sales from my traffic</option><option>Custom Shopify development</option><option>A faster store</option><option>Rank higher on Google</option><option>A new design or rebuild</option><option>Move to Shopify</option><option>Not sure yet</option></select></div>' +
      '<div class="ecz-f"><label for="' + id + 'm">Your idea or goal <small>(optional)</small></label><textarea id="' + id + 'm" name="message" rows="3" placeholder="e.g. Lots of visitors, few add to cart. We also want to launch a subscription offer."></textarea></div>' +
      '<button class="ecz-btn" type="submit">Get my free audit</button>' +
      '<p class="ecz-note">Free. No obligation. We reply within 24 hours.</p>' +
      '<div class="ecz-fail" role="alert" hidden>Something went wrong. Email <a href="mailto:support@eceez.com?subject=Free%20store%20audit">support@eceez.com</a> and we will pick it up.</div>' +
      '</form></div>';
  }

  function wire(root) {
    var f = root.querySelector('form'); if (!f || f.__w) return; f.__w = 1;
    f.page_path.value = location.pathname;
    f.landing_page.value = data.landing || location.href;
    f.referrer.value = document.referrer || '';
    KEYS.forEach(function (k) { if (data[k] && f.elements[k]) f.elements[k].value = data[k]; });
    var started = false;
    f.addEventListener('focusin', function () { if (!started) { started = true; track('form_start', { form: FORM, page: location.pathname }); } });
    function bad(el, msg) { var w = el.closest('.ecz-f'); if (msg) { w.classList.add('bad'); w.querySelector('.ecz-err').textContent = msg; } else { w.classList.remove('bad'); } }
    ['store_url', 'email', 'name'].forEach(function (k) { f.elements[k].addEventListener('input', function () { bad(this); }); });
    f.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var fail = f.querySelector('.ecz-fail'); fail.hidden = true;
      if (f.elements['bot-field'].value) return;
      var s = f.elements.store_url, e = f.elements.email, n = f.elements.name, ok = true, first = null;
      var sv = s.value.trim();
      if (!sv || /\s/.test(sv) || sv.indexOf('.') < 1) { bad(s, 'Enter your store address, for example yourstore.com'); ok = false; first = first || s; } else bad(s);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.value.trim())) { bad(e, 'Enter a valid email so we can reply'); ok = false; first = first || e; } else bad(e);
      if (n.value.trim().length < 2) { bad(n, 'Enter your name'); ok = false; first = first || n; } else bad(n);
      if (!ok) { first.focus(); return; }
      var btn = f.querySelector('.ecz-btn'); btn.disabled = true; btn.textContent = 'Sending...';
      fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(f)).toString() })
        .then(function (r) {
          if (!r.ok) throw new Error('http ' + r.status);
          track('generate_lead', { lead_source: 'site_form', page_path: location.pathname });
          try { window.fbq && fbq('track', 'Lead'); } catch (x) {}
          try { window.oaiq && oaiq('measure', 'lead_created', { type: 'customer_action' }); } catch (x) {}
          var card = f.closest('.ecz-card');
          card.innerHTML = '<div class="ecz-ok"><i>&#10003;</i><h3>Thanks. We have your store.</h3><p>We will review it and reply within 24 hours. Check your spam folder just in case.</p></div>';
        })
        .catch(function () { btn.disabled = false; btn.textContent = 'Get my free audit'; fail.hidden = false; track('form_error', { page: location.pathname }); });
    });
  }

  /* ---- modal ---- */
  var dlg;
  function openModal(src) {
    if (!dlg) {
      dlg = document.createElement('dialog'); dlg.className = 'ecz ecz-dlg'; dlg.setAttribute('aria-label', 'Free store audit');
      dlg.innerHTML = formHTML('Get your free store audit', 'Takes 30 seconds. We review your store and tell you what to fix first.', 'Free audit') ;
      var x = document.createElement('button'); x.type = 'button'; x.className = 'ecz-x'; x.setAttribute('aria-label', 'Close'); x.innerHTML = '&times;';
      dlg.querySelector('.ecz-card').appendChild(x);
      x.addEventListener('click', function () { dlg.close(); });
      dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
      document.body.appendChild(dlg); wire(dlg);
    }
    if (!dlg.open) { dlg.showModal(); track('form_open', { source: src || '' }); }
    var i = dlg.querySelector('input[name="store_url"]'); i && i.focus();
  }

  /* intercept every old Google Form link + any [data-ecz-open] */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="' + GFORM + '"],[data-ecz-open]');
    if (!a) return;
    e.preventDefault(); e.stopPropagation();
    openModal(a.getAttribute('data-ecz-open') || (a.textContent || '').trim().slice(0, 40));
  }, true);

  /* ---- floating button ---- */
  var fab;
  function ensureFab() {
    if (fab && document.body.contains(fab)) return;
    fab = document.createElement('button'); fab.type = 'button'; fab.className = 'ecz ecz-fab';
    fab.innerHTML = 'Free store audit'; fab.addEventListener('click', function () { openModal('floating_button'); });
    document.body.appendChild(fab);
  }
  function fabVisibility() {
    if (!fab) return;
    var forms = document.querySelectorAll('.ecz-inline,.ecz-band'), hide = false;
    for (var i = 0; i < forms.length; i++) { var r = forms[i].getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) hide = true; }
    fab.classList.toggle('off', hide || scrollY < 250);
  }
  addEventListener('scroll', fabVisibility, { passive: true });

  /* ---- placements ---- */
  function scan() {
    ensureFab();
    var path = location.pathname.replace(/\/$/, '') || '/';
    if (path.indexOf('/lp/') === 0 || path.indexOf('/admin') === 0) { fab.style.display = 'none'; return; }
    fab.style.display = '';

    // Contact page: swap the Google Form button for the inline form
    var btns = document.querySelectorAll('a[href*="' + GFORM + '"]');
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      if (/Apply for Strategy Call/i.test(b.textContent) && !b.__ecz) {
        b.__ecz = 1; b.style.display = 'none';
        var w = document.createElement('div'); w.className = 'ecz ecz-inline';
        w.innerHTML = formHTML('Get your free store audit', 'Tell us about your store and your goal. We reply within 24 hours.', 'Free audit');
        b.parentNode.insertBefore(w, b.nextSibling); wire(w);
      }
    }
    var onContact = path === '/contact';
    var band = document.querySelector('.ecz-band');
    var footer = document.querySelector('footer');
    // Only place the band once the page content has really rendered (page is taller than ~1.3 screens above the footer).
    // This stops it flashing at the top while the page is still loading.
    var tall = false;
    if (footer) {
      var edge = (band && band.nextElementSibling === footer) ? band : footer;
      tall = (edge.getBoundingClientRect().top + window.scrollY) > window.innerHeight * 1.3;
    }
    if (onContact || !footer || !tall) { if (band) band.remove(); }
    else if (!band || band.nextElementSibling !== footer) {
      if (band) band.remove();
      band = document.createElement('section'); band.className = 'ecz ecz-band';
      band.innerHTML = '<div class="ecz-band-in"><div><h2>Find out what is <em>holding your store back.</em></h2><p class="sub">Send your store URL and tell us your goal. We will tell you what to fix first, free.</p></div>' +
        formHTML('Get your free store audit', 'No obligation. We reply within 24 hours.', 'Free audit') + '</div>';
      footer.parentNode.insertBefore(band, footer); wire(band);
    }
    fabVisibility();
  }
  var t;
  function sched() { clearTimeout(t); t = setTimeout(scan, 350); }
  new MutationObserver(sched).observe(document.documentElement, { childList: true, subtree: true });
  addEventListener('popstate', sched);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan); else scan();
})();
