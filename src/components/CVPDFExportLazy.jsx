import { lazy, Suspense } from 'react';
import { Download } from 'lucide-react';

const CVPDFExport = lazy(() => import('./CVPDFExport'));

const fallbackStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5em',
  height: '40px',
  minHeight: '40px',
  padding: '0 1em',
  boxSizing: 'border-box',
  verticalAlign: 'middle',
};

function CVPDFExportFallback({ lang = 'da' }) {
  return (
    <span className="btn btn-outline" style={fallbackStyle} aria-hidden="true">
      <Download size={16} />
      <span>{lang === 'en' ? 'Download PDF' : 'Download PDF'}</span>
    </span>
  );
}

const CVPDFExportLazy = ({ lang = 'da' }) => (
  <Suspense fallback={<CVPDFExportFallback lang={lang} />}>
    <CVPDFExport lang={lang} />
  </Suspense>
);

export default CVPDFExportLazy;
