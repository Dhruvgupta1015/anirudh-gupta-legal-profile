/**
 * Research — Publication index category filters
 */

export function initResearch() {
  const filterPills = document.querySelectorAll('.filter-pill[data-category]');
  const pubEntries = document.querySelectorAll('.pub-entry[data-category]');

  if (!filterPills.length || !pubEntries.length) return;

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const category = pill.getAttribute('data-category');

      // Update active pill
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      // Filter entries
      pubEntries.forEach(entry => {
        const entryCategory = entry.getAttribute('data-category');
        if (category === 'all' || entryCategory === category) {
          entry.style.display = '';
          // Re-trigger reveal if needed
          requestAnimationFrame(() => {
            entry.style.opacity = '1';
            entry.style.transform = 'translateY(0)';
          });
        } else {
          entry.style.display = 'none';
        }
      });

      // Update count display
      const visibleCount = document.querySelectorAll('.pub-entry[data-category]:not([style*="display: none"])').length;
      const countEl = document.querySelector('.research__count');
      if (countEl) {
        countEl.textContent = `${visibleCount} publication${visibleCount !== 1 ? 's' : ''}`;
      }
    });
  });
}
