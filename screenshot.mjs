import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = 'https://anirudh-gupta-legal-profile.vercel.app/';
const outputDir = path.join(process.cwd(), 'qa-evidence');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const sections = [
    { id: '#hero', name: 'hero' },
    { id: '#profile', name: 'profile' },
    { id: '#journey', name: 'journey' },
    { id: '#experience-distribution', name: 'experience-distribution' },
    { id: '#institutional-exposure', name: 'institutional-exposure' },
    { id: '#research', name: 'research' },
    { id: '#advocacy', name: 'advocacy' },
    { id: '#leadership', name: 'leadership' },
    { id: '#credentials', name: 'credentials' },
    { id: '#contact', name: 'contact' }
];

async function takeScreenshots() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Desktop
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    // Disable smooth scrolling
    await page.addStyleTag({content: 'html { scroll-behavior: auto !important; }'});
    
    for (const section of sections) {
        const element = await page.$(section.id);
        if (element) {
            await element.screenshot({ path: path.join(outputDir, `desktop-${section.name}.png`) });
        }
    }
    
    // Mobile
    await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
    await page.reload({ waitUntil: 'networkidle0' });
    await page.addStyleTag({content: 'html { scroll-behavior: auto !important; }'});
    
    for (const section of sections) {
        const element = await page.$(section.id);
        if (element) {
            await element.screenshot({ path: path.join(outputDir, `mobile-${section.name}.png`) });
        }
    }
    
    await browser.close();
    console.log('Screenshots captured successfully.');
}

takeScreenshots().catch(console.error);
