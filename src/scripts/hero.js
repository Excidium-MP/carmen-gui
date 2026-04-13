export function initHero() {
  const hero = document.getElementById('hero');
  const chevron = document.getElementById('heroChevron');

  if (!hero || !chevron) return;

  // Fade chevron when scrolling past hero
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        chevron.classList.remove('chevron--hidden');
      } else {
        chevron.classList.add('chevron--hidden');
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(hero);

  // Click chevron to scroll to next section
  chevron.addEventListener('click', () => {
    const about = document.getElementById('about');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
