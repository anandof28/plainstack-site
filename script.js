(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('js-enabled');
  const toggle = document.querySelector('.menu-button');
  const menu = document.querySelector('#mobile-nav');
  function closeMenu(){
    if (!menu || !toggle) return;
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }
  if(toggle && menu){
    toggle.addEventListener('click', () => {
      const nowOpen = menu.hidden;
      menu.hidden = !nowOpen;
      toggle.setAttribute('aria-expanded', String(nowOpen));
      toggle.setAttribute('aria-label', nowOpen ? 'Close menu' : 'Open menu');
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if(event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => {
      if(!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
    window.addEventListener('resize', () => { if(window.innerWidth > 1050) closeMenu(); });
  }
  const year = document.getElementById('year');
  if(year) year.textContent = String(new Date().getFullYear());
  const revealItems = [...document.querySelectorAll('.reveal')];
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const observer = new IntersectionObserver(entries => {
      for(const entry of entries) if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }, {rootMargin:'0px 0px 20px 0px', threshold:0.015});
    revealItems.forEach(element => observer.observe(element));
  } else revealItems.forEach(element => element.classList.add('visible'));
  const navLinks = [...document.querySelectorAll('.nav-links a')];
  const targets = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window && navLinks.length) {
    const navObserver = new IntersectionObserver(entries => {
      for(const entry of entries) if(entry.isIntersecting){
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    }, {rootMargin:'-23% 0px -65% 0px'});
    targets.forEach(target => navObserver.observe(target));
  }
})();
