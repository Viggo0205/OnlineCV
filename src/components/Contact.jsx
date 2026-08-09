import { Mail, Phone, MapPin } from 'lucide-react'
import cvData from '../data/cvData'
import { useLanguage } from './LanguageProvider'
import CVPDFExportLazy from './CVPDFExportLazy'
import './Contact.css'

const Contact = () => {
  const { lang, label, t } = useLanguage()
  const { personalInfo } = cvData

  return (
    <section id="contact" className="contact section">
      <h2 className="section-title">
        <Mail className="section-title-icon" />
        {label('contact')}
      </h2>

      <div className="contact-content">
        <div className="contact-info-card card">
          <h3 className="card-title">{label('contactInfo')}</h3>

          <div className="contact-details">
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div className="contact-text">
                <span className="contact-label">{label('address')}</span>
                <span className="contact-value">{t(personalInfo.address)}</span>
              </div>
            </div>

            <div className="contact-item">
              <Phone className="contact-icon" />
              <div className="contact-text">
                <span className="contact-label">{label('phone')}</span>
                <a href={`tel:+45${personalInfo.phone}`} className="contact-value contact-link">
                  +45 {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <Mail className="contact-icon" />
              <div className="contact-text">
                <span className="contact-label">{label('email')}</span>
                <a href={`mailto:${personalInfo.email}`} className="contact-value contact-link">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="download-card card">
          <h3 className="card-title">{label('downloadCv')}</h3>
          <p className="download-description">{label('downloadCvDesc')}</p>
          <div className="download-actions">
            <CVPDFExportLazy key={lang} />
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <p className="footer-text">{label('contactFooter')}</p>
      </div>
    </section>
  )
}

export default Contact
