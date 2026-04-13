import { scrollTo } from './smooth-scroll.js';

export function initNavigation() {
  const nav = document.getElementById('nav');
  const hero = document.getElementById('hero');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Nav background on scroll
  if (nav && hero) {
    const navObserver = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle('nav--scrolled', !entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    navObserver.observe(hero);
  }

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        scrollTo(target);
      }

      // Close mobile menu if open
      if (mobileMenu && mobileMenu.classList.contains('mobile-menu--open')) {
        closeMobileMenu();
      }
    });
  });

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('mobile-menu--open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    hamburger.classList.add('hamburger--active');
    mobileMenu.classList.add('mobile-menu--open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    hamburger.classList.remove('hamburger--active');
    mobileMenu.classList.remove('mobile-menu--open');
    document.body.style.overflow = '';
  }
}
