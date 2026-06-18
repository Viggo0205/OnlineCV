import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download } from 'lucide-react';
import { buildWebPdfData } from '../data/cvPdfData';
import { CVPdfDocument } from './CVPdfDocument';

const CVPDFExport = ({ lang = 'da' }) => {
  const pdfData = buildWebPdfData(lang);

  return (
    <PDFDownloadLink
      document={<CVPdfDocument data={pdfData} variant="web" />}
      fileName={`CV_${lang}.pdf`}
      className="btn btn-outline"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5em',
        textDecoration: 'none',
        height: '40px',
        minHeight: '40px',
        padding: '0 1em',
        boxSizing: 'border-box',
        verticalAlign: 'middle',
      }}
    >
      <Download size={16} />
      <span>{lang === 'en' ? 'Download PDF' : 'Download PDF'}</span>
    </PDFDownloadLink>
  );
};

export default CVPDFExport;
