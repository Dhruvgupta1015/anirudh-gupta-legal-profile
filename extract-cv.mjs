import { getDocument } from 'pdfjs-dist/build/pdf.mjs';
import fs from 'fs';

async function extractText() {
    const data = new Uint8Array(fs.readFileSync('c:\\Users\\dhruv\\OneDrive\\Desktop\\ANII WEB\\Anirudh Gupta (CV).pdf'));
    
    console.log('Buffer size:', data.length, 'bytes');
    
    const doc = await getDocument({ data }).promise;
    console.log('Pages:', doc.numPages);
    
    let fullText = '';
    for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const textContent = await page.getTextContent();
        
        // Group items by their y-coordinate to reconstruct lines
        const items = textContent.items;
        let currentY = null;
        let line = '';
        
        for (const item of items) {
            const y = Math.round(item.transform[5]);
            if (currentY !== null && Math.abs(y - currentY) > 3) {
                fullText += line.trim() + '\n';
                line = '';
            }
            currentY = y;
            line += item.str + ' ';
        }
        if (line.trim()) {
            fullText += line.trim() + '\n';
        }
        fullText += `\n--- END PAGE ${i} ---\n\n`;
    }
    
    console.log(fullText);
}

extractText().catch(err => console.error('Error:', err));
