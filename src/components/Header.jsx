import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Heart, Gamepad2, Dumbbell, Target } from 'lucide-react'
import cvData from '../data/cvData'
import './Header.css'

const Header = ({ lang = 'da', setLang }) => {
  const { personalInfo, personalProfile } = cvData
  // Map both Danish and English interests to Lucide React icons
  const interestIcons = {
    'Computer spil med venner': Gamepad2,
    'Fitness træning': Dumbbell,
    'Airsoft i weekenderne': Target,
    'Sociale aktiviteter med venner': Heart,
    'Computer games with friends': Gamepad2,
    'Fitness training': Dumbbell,
    'Airsoft on weekends': Target,
    'Social activities with friends': Heart
  }

  return (
    <header className="header section">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src={"/OnlineCV/ProfilBillede.PNG"} alt="Profil billede" className="profile-avatar" />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{personalInfo.name}</h1>
            <h2 className="profile-title">{typeof personalInfo.title === 'object' ? (personalInfo.title[lang] || personalInfo.title['da']) : personalInfo.title}</h2>
            <p className="profile-summary">{typeof personalInfo.summary === 'object' ? (personalInfo.summary[lang] || personalInfo.summary['da']) : personalInfo.summary}</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <MapPin size={18} className="contact-icon" />
            <span>{typeof personalInfo.address === 'object' ? (personalInfo.address[lang] || personalInfo.address['da']) : personalInfo.address}</span>
          </div>
          <div className="contact-item">
            <Phone size={18} className="contact-icon" />
            <a href={`tel:+45${personalInfo.phone}`} className="contact-link">
              +45 {personalInfo.phone}
            </a>
          </div>
          <div className="contact-item">
            <Mail size={18} className="contact-icon" />
            <a href={`mailto:${personalInfo.email}`} className="contact-link">
              {personalInfo.email}
            </a>
          </div>
          <div className="contact-item">
            <Github size={18} className="contact-icon" />
            <a href={personalInfo.github} className="contact-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div className="contact-item">
            <Linkedin size={18} className="contact-icon" />
            <a href={personalInfo.linkedin} className="contact-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      {/* Interests horizontal row */}
      <div className="interests-horizontal-row" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', margin: '2rem 0 1.5rem 0', flexWrap: 'wrap' }}>
        {personalProfile.interests[lang].map((interest, index) => {
          const IconComponent = interestIcons[interest] || Heart
          return (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              <IconComponent className="interest-icon" size={24} />
              <span className="interest-text">{interest}</span>
            </div>
          )
        })}
      </div>
      {/* Highlights row */}
      <div className="personal-highlights">
        <div className="profile-card-row">
          {personalProfile.highlights[lang].map((item, idx) => (
            <div className="profile-card" key={idx}>
              <div className="profile-card-title">{item.title}</div>
              <div className="profile-card-text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative background element */}
      <div className="header-decoration"></div>
    </header>
  )
}

export default Header