import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import cvData from '../data/cvData'
import './Header.css'

const Header = () => {
  const { personalInfo } = cvData

  return (
    <header className="header section">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src={"/src/assets/ProfilBillede.PNG"} alt="Profil billede" className="profile-avatar" />
          </div>
          
          <div className="profile-info">
            <h1 className="profile-name">{personalInfo.name}</h1>
            <h2 className="profile-title">{personalInfo.title}</h2>
            <p className="profile-summary">{personalInfo.summary}</p>
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <MapPin size={18} className="contact-icon" />
            <span>{personalInfo.address}</span>
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
      
      {/* Decorative background element */}
      <div className="header-decoration"></div>
    </header>
  )
}

export default Header