/* ========================================
   BLAST Lab – Main JavaScript
   ======================================== */

(function () {
  'use strict';

  /* ── Mobile Navigation ── */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav-mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
      }
    });

    // Close on mobile link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  }

  /* ── Active Nav Link ── */
  const path = window.location.pathname;
  const allNavLinks = document.querySelectorAll('.nav__links a, .nav-mobile a');

  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Normalize href: strip ../ prefixes and leading ./
    const normalizedHref = href.replace(/^(\.\.\/)+/, '/').replace(/^\.\//, '/');
    const normalizedPath = path.endsWith('/') ? path : path + '/';

    if (
      normalizedHref === '/' && (path === '/' || path.endsWith('/index.html'))
    ) {
      if (
        !path.includes('/members/') &&
        !path.includes('/research/') &&
        !path.includes('/publications/') &&
        !path.includes('/news/') &&
        !path.includes('/joinus/')
      ) {
        link.classList.add('active');
      }
    } else if (normalizedHref !== '/' && path.includes(normalizedHref.replace(/\/$/, ''))) {
      link.classList.add('active');
    }
  });

  /* ── Publication Tabs ── */
  const tabBtns = document.querySelectorAll('.pub-tab');
  const tabPanels = document.querySelectorAll('.pub-panel');

  if (tabBtns.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = document.getElementById(target);
        if (panel) panel.classList.add('active');
      });
    });
  }

  /* ── Handle hash-based tab on load ── */
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const targetBtn = document.querySelector(`.pub-tab[data-tab="${hash}"]`);
    if (targetBtn) targetBtn.click();
  }

  /* ── Lazy load images ── */
  if ('IntersectionObserver' in window) {
    const lazyImgs = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '100px' });
    lazyImgs.forEach(img => observer.observe(img));
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').substring(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Nav shadow on scroll ── */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 10
        ? '0 2px 12px rgba(0,0,0,.10)'
        : '';
    }, { passive: true });
  }
})();
