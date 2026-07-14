/**
 * Journey — Timeline expand/collapse interactions
 */

export function initJourney() {
  const entries = document.querySelectorAll('.experience-entry');

  entries.forEach(entry => {
    const header = entry.querySelector('.experience-entry__header');
    const details = entry.querySelector('.experience-entry__details');

    if (header && details) {
      header.setAttribute('role', 'button');
      header.setAttribute('tabindex', '0');
      header.setAttribute('aria-expanded', 'false');

      header.addEventListener('click', () => toggleEntry(entry, header));
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleEntry(entry, header);
        }
      });
    }
  });

  function toggleEntry(entry, header) {
    const isExpanded = entry.classList.contains('expanded');

    if (isExpanded) {
      entry.classList.remove('expanded');
      header.setAttribute('aria-expanded', 'false');
    } else {
      entry.classList.add('expanded');
      header.setAttribute('aria-expanded', 'true');
    }
  }
}
