import { Mail, Phone, MapPin } from 'lucide-react'
import cvData from '../data/cvData'
import CVPDFExportLazy from './CVPDFExportLazy'
import './Contact.css'

const Contact = ({ lang = 'da' }) => {
  const { personalInfo } = cvData

  return (
    <section id="contact" className="contact section">
      <h2 className="section-title">
        <Mail className="section-title-icon" />
        {lang === 'da' ? 'Kontakt' : 'Contact'}
      </h2>

      <div className="contact-content">
        <div className="contact-info-card card">
          <h3 className="card-title">{lang === 'da' ? 'Kontaktoplysninger' : 'Contact Information'}</h3>
          
          <div className="contact-details">
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div className="contact-text">
                <span className="contact-label">{lang === 'da' ? 'Adresse' : 'Address'}</span>
                <span className="contact-value">{typeof personalInfo.address === 'object' ? (personalInfo.address[lang] || personalInfo.address['da']) : personalInfo.address}</span>
              </div>
            </div>

            <div className="contact-item">
              <Phone className="contact-icon" />
              <div className="contact-text">
                <span className="contact-label">{lang === 'da' ? 'Telefon' : 'Phone'}</span>
                <a href={`tel:+45${personalInfo.phone}`} className="contact-value contact-link">
                  +45 {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <Mail className="contact-icon" />
              <div className="contact-text">
                <span className="contact-label">{lang === 'da' ? 'E-mail' : 'Email'}</span>
                <a href={`mailto:${personalInfo.email}`} className="contact-value contact-link">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="download-card card">
          <h3 className="card-title">{lang === 'da' ? 'Download CV' : 'Download CV'}</h3>
          <p className="download-description">
            {lang === 'da'
              ? 'Download mit CV som PDF.'
              : 'Download my CV as PDF.'}
          </p>
          <div style={{ marginTop: '1rem' }}>
            <CVPDFExportLazy key={lang} lang={lang} />
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <p className="footer-text">
          {lang === 'da'
            ? 'Tak fordi du tog dig tid til at læse mit CV. Jeg ser frem til at høre fra dig!'
            : 'Thank you for taking the time to read my CV. I look forward to hearing from you!'}
        </p>
      </div>
    </section>
  )
}

export default Contact