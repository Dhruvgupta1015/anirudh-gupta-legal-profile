import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const BASE_URL = 'https://anirudh-gupta-legal-profile.vercel.app/';
const OUT_DIR = 'C:/Users/dhruv/.gemini/antigravity-ide/brain/e71f69f7-9421-4e19-9f32-83c99dd23916/scratch/screenshots_before';

async function takeScreenshots() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // 1. Full Page Viewports
  const viewports = [
    { width: 1440, height: 900 },
    { width: 1366, height: 768 },
    { width: 1024, height: 768 },
    { width: 768, height: 1024 },
    { width: 430, height: 932 },
    { width: 390, height: 844 },
    { width: 375, height: 667 },
    { width: 320, height: 568 }
  ];

  for (const vp of viewports) {
    await page.setViewport(vp);
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1000)); // wait for animations
    await page.screenshot({ path: path.join(OUT_DIR, `full_${vp.width}x${vp.height}.png`), fullPage: true });
  }

  // Helper for isolated screenshots
  async function elementScreenshot(selector, name, viewport = { width: 1440, height: 900 }) {
    await page.setViewport(viewport);
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1000));
    const element = await page.$(selector);
    if (element) {
      await element.screenshot({ path: path.join(OUT_DIR, `iso_${name}.png`) });
    } else {
      console.log(`Element not found: ${selector}`);
    }
  }

  // 1-4. Hero
  await elementScreenshot('.hero', '1_hero_desktop', { width: 1440, height: 900 });
  await elementScreenshot('.hero', '2_hero_tablet', { width: 768, height: 1024 });
  await elementScreenshot('.hero', '3_hero_mobile_390', { width: 390, height: 844 });
  await elementScreenshot('.hero', '4_hero_mobile_320', { width: 320, height: 568 });

  // 5-6. Professional Direction / Education
  await elementScreenshot('.profile', '5_professional_direction', { width: 1440, height: 900 });
  await elementScreenshot('.evidence', '6_education_evidence', { width: 1440, height: 900 });

  // 7-10. Three Pillars
  await elementScreenshot('.pillars', '7_pillars_desktop', { width: 1440, height: 900 });
  
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
  
  // Research open
  await page.click('.pillars__stacked-item[data-pillar="research"] .pillars__stacked-header');
  await new Promise(r => setTimeout(r, 500));
  let el = await page.$('.pillars');
  if(el) await el.screenshot({ path: path.join(OUT_DIR, '8_pillars_mobile_research.png') });
  
  // Advocacy open
  await page.click('.pillars__stacked-item[data-pillar="advocacy"] .pillars__stacked-header');
  await new Promise(r => setTimeout(r, 500));
  if(el) await el.screenshot({ path: path.join(OUT_DIR, '9_pillars_mobile_advocacy.png') });
  
  // Justice open
  await page.click('.pillars__stacked-item[data-pillar="justice"] .pillars__stacked-header');
  await new Promise(r => setTimeout(r, 500));
  if(el) await el.screenshot({ path: path.join(OUT_DIR, '10_pillars_mobile_justice.png') });

  // 11-12. Legal Journey
  await elementScreenshot('#journey', '11_journey_2025_desktop', { width: 1440, height: 900 });
  await elementScreenshot('#journey', '12_journey_mobile', { width: 390, height: 844 });

  // 13-14. Research Index
  await elementScreenshot('#research', '13_research_desktop', { width: 1440, height: 900 });
  await elementScreenshot('#research', '14_research_320', { width: 320, height: 568 });

  // 15. Featured Research
  await elementScreenshot('.featured-research', '15_featured_research', { width: 1440, height: 900 });

  // 16-17. Advocacy
  await elementScreenshot('.advocacy', '16_advocacy_desktop', { width: 1440, height: 900 });
  await elementScreenshot('.advocacy', '17_advocacy_320', { width: 320, height: 568 });

  // 18. Leadership
  await elementScreenshot('.leadership', '18_leadership', { width: 1440, height: 900 });

  // 19-20. Credentials
  await elementScreenshot('.credentials', '19_credentials_desktop', { width: 1440, height: 900 });
  await elementScreenshot('.credentials', '20_credentials_320', { width: 320, height: 568 });

  // 21-22. Contact
  await elementScreenshot('.contact', '21_contact_desktop', { width: 1440, height: 900 });
  await elementScreenshot('.contact', '22_contact_320', { width: 320, height: 568 });

  // 23. Footer mobile
  await elementScreenshot('.site-footer', '23_footer_mobile', { width: 390, height: 844 });

  await browser.close();
  console.log('Screenshots captured successfully.');
}

takeScreenshots().catch(console.error);
