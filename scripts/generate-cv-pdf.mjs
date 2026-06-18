import fs from 'node:fs';
import path from 'node:path';
import { renderToFile } from '@react-pdf/renderer';
import { buildCliPdfData } from '../src/data/cvPdfData.js';
import { createCvPdfElement } from '../src/data/cvPdfDocumentFactory.js';

const outputDir = path.resolve('generated');
fs.mkdirSync(outputDir, { recursive: true });

for (const lang of ['da', 'en']) {
  const pdfData = buildCliPdfData(lang);
  const suffix = lang === 'da' ? 'da' : 'en';
  const outputFile = path.join(outputDir, `CV_${suffix}_V.Olszowski.pdf`);

  await renderToFile(
    createCvPdfElement(pdfData, 'cli'),
    outputFile
  );

  console.log(`PDF generated: ${outputFile}`);
}
