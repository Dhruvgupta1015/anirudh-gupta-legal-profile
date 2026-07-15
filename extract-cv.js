const fs = require('fs');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function extractText() {
    const data = new Uint8Array(fs.readFileSync('c:\\Users\\dhruv\\OneDrive\\Desktop\\Anirudh Gupta (CV).pdf'));
    
    const doc = await pdfjsLib.getDocument({ data }).promise;
    console.log('Pages:', doc.numPages);
    
    let fullText = '';
    for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += `\n=== PAGE ${i} ===\n` + pageText;
    }
    
    console.log(fullText);
}

extractText().catch(err => console.error('Error:', err.message));
