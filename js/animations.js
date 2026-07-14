/**
 * Animations — Scroll reveals and counter animations
 */

export function initAnimations() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal observer
  const revealElements = document.querySelectorAll('.reveal');

  if (prefersReducedMotion) {
    // Show all immediately
    revealElements.forEach(el => el.classList.add('revealed'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Counter animation for evidence cards
  const counterElements = document.querySelectorAll('[data-count]');

  if (prefersReducedMotion) {
    counterElements.forEach(el => {
      el.textContent = el.getAttribute('data-count');
    });
  } else {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));
  }
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'), 10);
  if (isNaN(target)) {
    element.textContent = element.getAttribute('data-count');
    return;
  }

  const duration = 1200;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(update);
}
