import { lazy, Suspense } from 'react'
import { Download } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const CVPDFExport = lazy(() => import('./CVPDFExport'))

const fallbackStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5em',
  height: '40px',
  minHeight: '40px',
  padding: '0 1em',
  boxSizing: 'border-box',
  verticalAlign: 'middle',
}

function CVPDFExportFallback() {
  const { label } = useLanguage()

  return (
    <span className="btn btn-outline nav-pdf-btn" style={fallbackStyle} aria-hidden="true">
      <Download size={16} />
      <span className="nav-pdf-label">{label('downloadPdf')}</span>
    </span>
  )
}

const CVPDFExportLazy = () => (
  <Suspense fallback={<CVPDFExportFallback />}>
    <CVPDFExport />
  </Suspense>
)

export default CVPDFExportLazy
