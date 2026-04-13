import '../styles/main.css';
import 'lenis/dist/lenis.css';

import { initSmoothScroll } from './smooth-scroll.js';
import { initScrollAnimations } from './scroll-animations.js';
import { initNavigation } from './navigation.js';
import { initHero } from './hero.js';
import { initTestimonials } from './testimonials.js';
import { initI18n } from './i18n.js';

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initNavigation();
  initHero();
  initScrollAnimations();
  initTestimonials();
  initI18n();
});
