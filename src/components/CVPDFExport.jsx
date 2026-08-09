import { PDFDownloadLink } from '@react-pdf/renderer'
import { Download } from 'lucide-react'
import { buildWebPdfData } from '../data/cvPdfData'
import { useLanguage } from './LanguageProvider'
import { CVPdfDocument } from './CVPdfDocument'

const CVPDFExport = () => {
  const { lang, label } = useLanguage()
  const pdfData = buildWebPdfData(lang)

  return (
    <PDFDownloadLink
      document={<CVPdfDocument data={pdfData} variant="web" />}
      fileName={`CV_${lang}.pdf`}
      className="btn btn-outline nav-pdf-btn"
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
      <Download size={16} aria-hidden="true" />
      <span className="nav-pdf-label">{label('downloadPdf')}</span>
    </PDFDownloadLink>
  )
}

export default CVPDFExport
