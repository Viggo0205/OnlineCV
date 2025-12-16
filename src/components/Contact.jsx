
import React from 'react'
import { Mail, Phone, MapPin, Download } from 'lucide-react'
import cvData from '../data/cvData'
import CVPDFExport from './CVPDFExport'
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
            <CVPDFExport
              key={lang} // Force complete remount when language changes
              cvData={{
                name: cvData.personalInfo.name,
                title: typeof cvData.personalInfo.title === 'object' ? (cvData.personalInfo.title[lang] || cvData.personalInfo.title['da']) : cvData.personalInfo.title,
                avatar: '/OnlineCV/ProfilBillede.PNG',
                phone: cvData.personalInfo.phone,
                email: cvData.personalInfo.email,
                address: typeof cvData.personalInfo.address === 'object' ? (cvData.personalInfo.address[lang] || cvData.personalInfo.address['da']) : cvData.personalInfo.address,
                linkedin: cvData.personalInfo.linkedin,
                keySkills: cvData.relevantSkills.generalSkills.flatMap(cat => cat.skills.map(skill => typeof skill === 'object' ? (skill[lang] || skill['da'] || Object.values(skill)[0]) : skill)),
                technicalSkills: [
                  ...cvData.programmingSkills.languages.map(langObj => langObj.name),
                  ...cvData.programmingSkills.tools,
                  ...cvData.programmingSkills.frameworks.map(fw => fw.name)
                ],
                summary: typeof cvData.personalInfo.summary === 'object' ? (cvData.personalInfo.summary[lang] || cvData.personalInfo.summary['da']) : cvData.personalInfo.summary,
                education: [
                  {
                    degree: lang === 'da' ? 'GameIT College' : 'GameIT College',
                    location: 'Viden Djurs',
                    years: '2015-2018',
                    specialization: lang === 'da' ? 'Spiludvikling & IT' : 'Game Development & IT'
                  },
                  {
                    degree: lang === 'da' ? 'Bachelor i Cyber Teknologi' : 'Bachelor of Science in Cyber Technology',
                    location: 'DTU',
                    years: '2019-2022',
                    specialization: lang === 'da' ? 'Programmering, Software, Netværk, Hardware' : 'Programming, Software, Networks, Hardware'
                  },
                  {
                    degree: lang === 'da' ? 'Datamatiker' : 'Computer Science AP',
                    location: 'Zealand',
                    years: lang === 'da' ? '2023– (igangværende)' : '2023– (ongoing)',
                    specialization: lang === 'da' ? 'Softwareudvikling' : 'Software Development'
                  }
                ],
                experience: cvData.experience.map(exp => ({
                  title: typeof exp.title === 'object' ? (exp.title[lang] || exp.title['da'] || Object.values(exp.title)[0]) : exp.title,
                  location: exp.company,
                  years: exp.period,
                  description: typeof exp.description === 'object' ? (exp.description[lang] || exp.description['da'] || Object.values(exp.description)[0]) : exp.description
                })),
                lang: lang
              }}
              style={{
                height: '40px',
                minHeight: '40px',
                padding: '0 1em',
                boxSizing: 'border-box',
                display: 'inline-flex',
                alignItems: 'center',
                verticalAlign: 'middle',
                gap: '0.5em',
                textDecoration: 'none',
                marginTop: '1rem'
              }}
            />
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