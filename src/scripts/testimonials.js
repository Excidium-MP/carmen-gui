export function initTestimonials() {
  const carousel = document.getElementById('testimonialCarousel');
  const dotsContainer = document.getElementById('testimonialDots');

  if (!carousel || !dotsContainer) return;

  const testimonials = carousel.querySelectorAll('.testimonial');
  const dots = dotsContainer.querySelectorAll('.testimonials__dot');
  let current = 0;
  let interval;
  let isPaused = false;

  function showTestimonial(index) {
    testimonials.forEach((t) => t.classList.remove('testimonial--active'));
    dots.forEach((d) => d.classList.remove('testimonials__dot--active'));

    testimonials[index].classList.add('testimonial--active');
    dots[index].classList.add('testimonials__dot--active');
    current = index;
  }

  function next() {
    const nextIndex = (current + 1) % testimonials.length;
    showTestimonial(nextIndex);
  }

  function startAutoRotate() {
    interval = setInterval(() => {
      if (!isPaused) next();
    }, 5000);
  }

  // Dot clicks
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.dot, 10);
      showTestimonial(index);
    });
  });

  // Pause on hover
  carousel.addEventListener('mouseenter', () => { isPaused = true; });
  carousel.addEventListener('mouseleave', () => { isPaused = false; });

  startAutoRotate();
}
