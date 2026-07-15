/**
 * Journey — Timeline expand/collapse interactions
 */

import { experiences, journeyYears } from './data.js';

export function initJourney() {
  renderExperienceDistribution();
  renderInstitutionalExposure();

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
        
        let customImagesHtml = '';
        if (exp.id === 12) {
          customImagesHtml = `
            <div class="institutional-strip">
              <img src="/assets/images/regulatory-cci-standing.jpg" alt="Anirudh Gupta standing at the Competition Commission of India" loading="lazy">
              <div class="institutional-strip-col-right">
                <img src="/assets/images/regulatory-cci-podium.jpg" alt="Anirudh Gupta at CCI podium" loading="lazy">
                <img src="/assets/images/regulatory-cci-group.jpg" alt="CCI internship group photo" loading="lazy">
                <img src="/assets/images/regulatory-cci-certificate.jpg" alt="Anirudh Gupta receiving CCI certificate" loading="lazy">
              </div>
            </div>
            <div class="editorial-caption" style="margin-bottom:var(--space-6);">Regulatory internship exposure at the Competition Commission of India</div>
          `;
        } else if (exp.id === 13) {
          customImagesHtml = `
            <div class="editorial-figure">
              <img src="/assets/images/regulatory-sebi.jpg" alt="Anirudh Gupta at SEBI" loading="lazy">
              <div class="editorial-caption">Regulatory exposure and legal research at the Securities and Exchange Board of India</div>
            </div>
          `;
        }

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
                ${customImagesHtml}
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

function renderExperienceDistribution() {
  const container = document.getElementById('experience-distribution');
  if (!container) return;

  const counts = {};
  const labels = {};
  experiences.forEach(exp => {
    const cat = exp.category;
    counts[cat] = (counts[cat] || 0) + 1;
    if (!labels[cat]) {
      labels[cat] = exp.categoryLabel || exp.category;
    }
  });

  const total = experiences.length;
  let currentX = 0;
  
  const sortedCategories = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

  const colors = {
    'litigation': 'var(--cobalt)',
    'public-interest': 'rgba(49, 92, 255, 0.8)',
    'research': 'rgba(49, 92, 255, 0.6)',
    'regulatory': 'rgba(49, 92, 255, 0.4)',
    'criminal-justice': 'rgba(49, 92, 255, 0.2)'
  };

  let svgSegments = '';
  let legendHtml = '<div style="display:flex; flex-wrap:wrap; gap:16px; margin-top:12px;" role="list" aria-label="Experience distribution legend">';

  sortedCategories.forEach(cat => {
    const count = counts[cat];
    const width = (count / total) * 100;
    const color = colors[cat] || 'var(--cobalt)';
    
    svgSegments += `<rect x="${currentX}%" y="0" width="${width}%" height="100%" fill="${color}" stroke="#fff" stroke-width="2" />`;
    currentX += width;

    legendHtml += `
      <div style="display:flex; align-items:center; gap:8px;" role="listitem">
        <div style="width:12px; height:12px; background-color:${color}; border-radius:2px;" aria-hidden="true"></div>
        <span style="font-family:var(--font-sans); font-size:var(--text-xs); color:var(--ink-70);">
          <strong>${count}</strong> ${labels[cat]}
        </span>
      </div>
    `;
  });
  legendHtml += '</div>';

  container.innerHTML = `
    <h3 style="font-family:var(--font-sans); font-size:var(--text-sm); font-weight:600; text-transform:uppercase; letter-spacing:0.12em; color:var(--midnight-ink); margin-bottom:12px;">Experience Distribution</h3>
    <svg width="100%" height="24" style="border-radius:var(--radius-sm); overflow:hidden;" aria-label="Experience Distribution: ${total} total experiences mapped across categories" role="img">
      ${svgSegments}
    </svg>
    ${legendHtml}
  `;
}

function renderInstitutionalExposure() {
  const container = document.getElementById('institutional-exposure');
  if (!container) return;

  container.innerHTML = `
    <h3 style="font-family:var(--font-sans); font-size:var(--text-sm); font-weight:600; text-transform:uppercase; letter-spacing:0.12em; color:var(--midnight-ink); margin-bottom:var(--space-6); text-align:center;">Institutional Exposure Map</h3>
    <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:var(--space-6);">
      <div class="evidence-card" style="flex: 1 1 200px;">
        <div class="evidence-card__value evidence-card__value--text">SEBI</div>
        <div class="evidence-card__label">Regulatory Exposure</div>
      </div>
      <div class="evidence-card" style="flex: 1 1 200px;">
        <div class="evidence-card__value evidence-card__value--text">Competition Commission of India</div>
        <div class="evidence-card__label">Regulatory Exposure</div>
      </div>
      <div class="evidence-card" style="flex: 1 1 200px;">
        <div class="evidence-card__value evidence-card__value--text">High Court</div>
        <div class="evidence-card__label">Litigation Exposure</div>
      </div>
      <div class="evidence-card" style="flex: 1 1 200px;">
        <div class="evidence-card__value evidence-card__value--text">Supreme Court of India</div>
        <div class="evidence-card__label">Pro Bono &amp; Court-related Research Exposure</div>
      </div>
      <div class="evidence-card" style="flex: 1 1 200px;">
        <div class="evidence-card__value evidence-card__value--text">DLSA</div>
        <div class="evidence-card__label">Public Interest &amp; Legal Aid Exposure</div>
      </div>
    </div>
    <p style="text-align:center; font-size:var(--text-xs); color:var(--soft-steel); margin-top:var(--space-6);">Institutions encountered through verified internship, research, litigation, and legal-aid experience.</p>
  `;
}
