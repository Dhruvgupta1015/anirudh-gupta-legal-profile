/**
 * Three Pillars — Interactive SVG triangular relationship visual
 */

import { pillarsData } from './data.js';

export function initPillars() {
  // Desktop SVG interaction
  const nodes = document.querySelectorAll('.pillars__node');
  const panel = document.querySelector('.pillars__evidence-panel');
  const panelTitle = document.querySelector('.pillars__evidence-title');
  const panelList = document.querySelector('.pillars__evidence-list');
  const lines = document.querySelectorAll('.pillars__line');

  let selectedPillar = 'research'; // Default state
  let hoveredPillar = null;
  let focusedPillar = null;

  function getEffectivePillar() {
    return focusedPillar || hoveredPillar || selectedPillar;
  }

  function renderPillarState() {
    const key = getEffectivePillar();
    const data = pillarsData[key];
    if (!data) return;

    // Update panel
    panelTitle.textContent = data.title;
    panelList.innerHTML = data.evidence
      .map(item => `<li class="pillars__evidence-item">${item}</li>`)
      .join('');

    // Show panel (always visible now since we have a default state)
    panel.classList.add('visible');

    // Highlight active node
    nodes.forEach(n => {
      if (n.getAttribute('data-pillar') === key) {
        n.classList.add('active');
      } else {
        n.classList.remove('active');
      }
    });

    // Highlight connected lines
    lines.forEach(line => {
      const connects = line.getAttribute('data-connects');
      if (connects && connects.includes(key)) {
        line.classList.add('active');
      } else {
        line.classList.remove('active');
      }
    });
  }

  if (nodes.length && panel) {
    const visualContainer = document.querySelector('.pillars__visual');

    // Clear hover state only when leaving the entire interaction region
    if (visualContainer) {
      visualContainer.addEventListener('mouseleave', () => {
        hoveredPillar = null;
        renderPillarState();
      });
    }

    nodes.forEach(node => {
      const pillarKey = node.getAttribute('data-pillar');

      node.addEventListener('mouseenter', () => {
        hoveredPillar = pillarKey;
        renderPillarState();
      });

      // Removed node-level mouseleave to allow seamless movement to panel

      node.addEventListener('focus', () => {
        focusedPillar = pillarKey;
        renderPillarState();
      });

      node.addEventListener('blur', () => {
        if (focusedPillar === pillarKey) focusedPillar = null;
        renderPillarState();
      });

      node.addEventListener('click', () => {
        selectedPillar = pillarKey;
        renderPillarState();
      });

      // Keyboard support
      node.setAttribute('tabindex', '0');
      node.setAttribute('role', 'button');
      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectedPillar = pillarKey;
          renderPillarState();
        }
      });
    });

    // Initialize default state
    renderPillarState();
  }

  // Mobile stacked accordions
  const stackedItems = document.querySelectorAll('.pillars__stacked-item');
  stackedItems.forEach(item => {
    // Populate data dynamically
    const key = item.getAttribute('data-pillar');
    if (key && pillarsData[key]) {
      const ul = item.querySelector('.pillars__evidence-list');
      if (ul) {
        ul.innerHTML = pillarsData[key].evidence
          .map(ev => `<li class="pillars__evidence-item">${ev}</li>`)
          .join('');
      }
    }

    const header = item.querySelector('.pillars__stacked-header');
    if (header) {
      header.addEventListener('click', () => {
        const isExpanded = item.classList.contains('expanded');
        // Close all
        stackedItems.forEach(i => i.classList.remove('expanded'));
        // Toggle clicked
        if (!isExpanded) {
          item.classList.add('expanded');
        }
      });

      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          header.click();
        }
      });
    }
  });

  // Animate SVG lines on scroll
  const svgContainer = document.querySelector('.pillars__visual');
  if (svgContainer) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          svgContainer.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(svgContainer);
  }
}
