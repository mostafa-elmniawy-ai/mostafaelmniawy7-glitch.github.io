/* Portfolio interactions: vanilla JS, no dependencies */
(() => {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);

  // Footer year
  $('#yr').textContent = new Date().getFullYear();

  // Mobile menu
  const burger = $('.burger'), menu = $('#menu');
  const setMenu = open => { menu.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); };
  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });

  // Fade-in on scroll
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: .12 });
    items.forEach(el => io.observe(el));
  } else items.forEach(el => el.classList.add('in'));

  // Contact form -> opens the visitor's email app (no backend)
  $('#form').addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(e.target);
    const body = `${d.get('message')}\n\nFrom: ${d.get('name')} (${d.get('email')})`;
    location.href = `mailto:mostafaelmniawy7@gmail.com?subject=${encodeURIComponent('Portfolio inquiry from ' + d.get('name'))}&body=${encodeURIComponent(body)}`;
  });

  // Hero: connected-nodes background on canvas
  const cv = $('#net'), ctx = cv.getContext('2d');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let w, h, pts = [];
  const resize = () => {
    w = cv.width = cv.offsetWidth; h = cv.height = cv.offsetHeight;
    pts = Array.from({ length: Math.min(60, Math.floor(w / 24)) }, () => ({
      x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35
    }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    pts.forEach((p, i) => {
      p.x = (p.x + p.vx + w) % w; p.y = (p.y + p.vy + h) % h;
      ctx.fillStyle = 'rgba(0,217,255,.7)'; ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 6.3); ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 130) { ctx.strokeStyle = `rgba(0,217,255,${.22 * (1 - d / 130)})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
      }
    });
    requestAnimationFrame(draw);
  };
  addEventListener('resize', resize); resize(); draw();
})();
