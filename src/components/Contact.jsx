import React from 'react'
import { Mail, Phone, MapPin, Download } from 'lucide-react'
import cvData from '../data/cvData'
import './Contact.css'

const Contact = () => {
  const { personalInfo } = cvData

  const handlePrint = () => {
    window.print()
  }

  return (
    <section className="contact section">
      <h2 className="section-title">
        <Mail className="section-title-icon" />
        Kontakt
      </h2>

      <div className="contact-content">
        <div className="contact-info-card card">
          <h3 className="card-title">Kontaktoplysninger</h3>
          
          <div className="contact-details">
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div className="contact-text">
                <span className="contact-label">Adresse</span>
                <span className="contact-value">{personalInfo.address}</span>
              </div>
            </div>

            <div className="contact-item">
              <Phone className="contact-icon" />
              <div className="contact-text">
                <span className="contact-label">Telefon</span>
                <a href={`tel:+45${personalInfo.phone}`} className="contact-value contact-link">
                  +45 {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <Mail className="contact-icon" />
              <div className="contact-text">
                <span className="contact-label">E-mail</span>
                <a href={`mailto:${personalInfo.email}`} className="contact-value contact-link">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="download-card card">
          <h3 className="card-title">Download CV</h3>
          <p className="download-description">
            Download mit CV som PDF eller print denne side direkte fra din browser.
          </p>
          
          <button className="download-btn btn btn-primary" onClick={handlePrint}>
            <Download size={18} />
            Download/Print PDF
          </button>
        </div>
      </div>

      <div className="contact-footer">
        <p className="footer-text">
          Tak fordi du tog dig tid til at læse mit CV. Jeg ser frem til at høre fra dig!
        </p>
      </div>
    </section>
  )
}

export default Contact