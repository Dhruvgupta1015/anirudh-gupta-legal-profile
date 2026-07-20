/**
 * Navigation — Sticky header, smooth scroll, mobile menu
 */

export function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileBackdrop = document.querySelector('.mobile-menu-backdrop');
  const mobileCloseBtn = document.querySelector('#mobile-menu-close');
  const navLinks = document.querySelectorAll('[data-nav-target]');
  const sections = document.querySelectorAll('section[id]');

  // Sticky header on scroll
  let lastScroll = 0;
  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-nav-target');
      const target = document.getElementById(targetId);
      if (target) {
        const headerHeight = header.offsetHeight + 20;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
      // Close mobile menu if open
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  });

  // Mobile menu toggle
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });

    if (mobileBackdrop) {
      mobileBackdrop.addEventListener('click', closeMobileMenu);
    }
    if (mobileCloseBtn) {
      mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }
  }

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    if (mobileBackdrop) mobileBackdrop.classList.add('active');
    mobileBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Focus first link
    const firstLink = mobileMenu.querySelector('.mobile-menu__link');
    if (firstLink) firstLink.focus();
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    if (mobileBackdrop) mobileBackdrop.classList.remove('active');
    mobileBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Active section tracking
  function updateActiveSection() {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    let currentSection = '';
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      const target = link.getAttribute('data-nav-target');
      if (target === currentSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();
}
