/* Minimal chrome behaviour lifted from the source JS: large/small header switch at 1100.01px
   (the source toggles the `hidden` attribute on .shl/.shs/.shct), header-height variables,
   short header once #intersection-trigger passes 50px under the viewport top (observed restore at
   scrollY ≤ 120 on a 170px header), tabs (the set gains --open once a tab is chosen), hero video toggle. */
(() => {
  const b = document.body; const html = document.documentElement;
  const header = document.getElementById('site-header');
  const shl = document.getElementById('site-header-large');
  const shs = document.getElementById('site-header-small');
  const shct = document.getElementById('site-header-content-top');
  const mq = window.matchMedia('(min-width: 1100.01px)');
  const vars = () => {
    const large = mq.matches; const short = b.classList.contains('--sh-short');
    const h = large ? 170 : 112; const s = large ? 92 : 60;
    html.style.setProperty('--site-header-height', `${short ? s : h}px`);
    html.style.setProperty('--site-header-offset', `${h}px`);
    html.style.setProperty('--scroll-short-offset', `${s}px`);
  };
  const size = () => {
    const large = mq.matches;
    b.classList.toggle('--sh-large', large); b.classList.toggle('--sh-small', !large);
    if (header) header.hidden = false;
    if (shl) shl.hidden = !large; if (shs) shs.hidden = large; if (shct) shct.hidden = large;
    vars();
  };
  size(); mq.addEventListener('change', size);
  const trig = document.getElementById('intersection-trigger');
  if (trig) new IntersectionObserver((e) => { b.classList.toggle('--sh-short', !e[0].isIntersecting); vars(); },
    { root: document, rootMargin: '-50px 0px 0px 0px', threshold: 1 }).observe(trig);
  document.querySelectorAll('.c-tabset').forEach((set) => {
    const tabs = [...set.querySelectorAll('.c-tabset__tab')]; const panels = [...set.querySelectorAll('.c-tabset__panel')];
    tabs.forEach((t, i) => t.addEventListener('click', () => {
      set.classList.add('--open');
      tabs.forEach((x, j) => { x.classList.toggle('--active', i === j); x.setAttribute('aria-selected', String(i === j)); });
      panels.forEach((p, j) => { p.hidden = i !== j; });
    }));
  });
  document.querySelectorAll('.c-hero-home').forEach((hero) => {
    const v = hero.querySelector('video'); const btn = hero.querySelector('.c-hero-home__video-toggle');
    if (!v || !btn) return;
    btn.addEventListener('click', () => { const paused = !hero.classList.contains('--paused'); hero.classList.toggle('--paused', paused); if (paused) v.pause(); else v.play(); });
  });
})();
/* Carousel grid (lifted from the source's Splide mount rule): below 2 × min + gap + 48 px of
   container width (328/24 → 728) the grid becomes a one-slide swipe carousel with dots + arrows. */
(() => {
  document.querySelectorAll('.c-layout-carousel-grid').forEach((grid) => {
    const sp = grid.querySelector('.splide'); if (!sp) return;
    const track = sp.querySelector('.splide__track'); const list = sp.querySelector('.splide__list');
    const slides = [...list.children]; const pag = sp.querySelector('.splide__pagination');
    const prev = sp.querySelector('.c-layout-carousel-grid-arrow--prev'); const next = sp.querySelector('.c-layout-carousel-grid-arrow--next');
    const min = 328; const gap = 24; const bp = 2 * min + gap + 48; let idx = 0; let mounted = false;
    prev?.setAttribute('aria-label', 'Previous slide'); next?.setAttribute('aria-label', 'Next slide');
    const go = (i) => {
      idx = Math.max(0, Math.min(slides.length - 1, i));
      const w = slides[0].getBoundingClientRect().width + gap;
      list.style.transform = `translateX(${-idx * w}px)`;
      slides.forEach((s, j) => { s.classList.toggle('is-active', j === idx); s.classList.toggle('is-visible', j === idx); });
      [...pag.querySelectorAll('button')].forEach((bt, j) => { bt.classList.toggle('is-active', j === idx); bt.setAttribute('aria-selected', String(j === idx)); });
      if (prev) prev.disabled = idx === 0; if (next) next.disabled = idx === slides.length - 1;
    };
    const mount = () => {
      mounted = true; sp.classList.add('--stackable');
      if (sp.classList.contains('--stacked')) return;
      sp.classList.add('is-initialized', 'is-overflow', 'is-active');
      slides.forEach((s, j) => { s.setAttribute('role', 'group'); s.setAttribute('aria-roledescription', 'slide'); s.setAttribute('aria-label', `${j + 1} of ${slides.length}`); });
      if (grid.classList.contains('--edge')) { track.style.paddingLeft = '16px'; track.style.paddingRight = '16px'; }
      const inner = track.clientWidth - parseFloat(getComputedStyle(track).paddingLeft) - parseFloat(getComputedStyle(track).paddingRight);
      slides.forEach((s) => { s.style.width = '100%'; s.style.marginRight = `${gap}px`; s.style.flexShrink = '0'; });
      pag.innerHTML = slides.map((s, j) => `<li role="presentation"><button class="splide__pagination__page" type="button" role="tab" aria-label="Go to slide ${j + 1}"></button></li>`).join('');
      pag.querySelectorAll('button').forEach((bt, j) => bt.addEventListener('click', () => go(j)));
      go(idx);
    };
    const unmount = () => {
      mounted = false; sp.classList.remove('--stackable'); sp.classList.remove('is-active');
      list.style.transform = ''; pag.innerHTML = ''; track.style.paddingLeft = ''; track.style.paddingRight = ''; slides.forEach((s) => { s.style.width = ''; s.style.marginRight = ''; s.style.flexShrink = ''; s.classList.remove('is-active', 'is-visible'); });
    };
    prev?.addEventListener('click', () => go(idx - 1)); next?.addEventListener('click', () => go(idx + 1));
    const swipe = grid.querySelector('.c-layout-carousel-grid__swipe'); const stack = grid.querySelector('.c-layout-carousel-grid__stack');
    swipe?.addEventListener('click', () => { sp.classList.remove('--stacked'); swipe.classList.add('--active'); stack?.classList.remove('--active'); mount(); });
    stack?.addEventListener('click', () => { sp.classList.add('--stacked'); stack.classList.add('--active'); swipe?.classList.remove('--active'); unmount(); sp.classList.add('--stackable'); });
    const check = () => { const w = grid.offsetWidth; if (w < bp && !mounted) mount(); else if (w >= bp && mounted) unmount(); };
    new ResizeObserver(check).observe(grid); check();
  });
})();
