/**
 * Journey — Timeline expand/collapse interactions
 */

import { experiences, journeyYears } from './data.js';

export function initJourney() {
  const container = document.getElementById('journey-timeline');
  if (container) {
    let html = '';
    
    journeyYears.forEach(yearGroup => {
      html += `
        <div class="timeline__year reveal">
          <div class="timeline__marker"></div>
          <div class="timeline__year-label">${yearGroup.year}</div>
          <div class="timeline__theme">${yearGroup.theme}</div>
      `;
      
      yearGroup.ids.forEach(id => {
        const exp = experiences.find(e => e.id === id);
        if (!exp) return;
        
        const subtitleParts = [exp.role, exp.subtitle].filter(Boolean);
        const subtitleText = subtitleParts.join(' \u00b7 ');
        const subtitleHtml = subtitleText ? `<div class="experience-entry__subtitle">${subtitleText}</div>` : '';
        const tagClass = exp.category === 'regulatory' ? 'tag' : 'tag tag--steel';
        
        const detailsHtml = exp.details
          .map(d => `<div class="experience-entry__detail-item">${d}</div>`)
          .join('');
          
        html += `
          <div class="experience-entry">
            <div class="experience-entry__header">
              <div class="experience-entry__header-main">
                <div class="experience-entry__org">${exp.organisation}</div>
                ${subtitleHtml}
                <div class="experience-entry__meta">
                  <span class="experience-entry__period">${exp.period}</span>
                  <span class="${tagClass}">${exp.categoryLabel || exp.category}</span>
                </div>
              </div>
              <span class="experience-entry__toggle" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M5 8l5 5 5-5"/>
                </svg>
              </span>
            </div>
            <div class="experience-entry__details">
              <div class="experience-entry__details-inner">
                ${detailsHtml}
              </div>
            </div>
          </div>
        `;
      });
      
      html += `</div>`;
    });
    
    container.innerHTML = html;
  }

  // Attach event listeners
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
