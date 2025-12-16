import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
import { 
  User, 
  Code, 
  Briefcase, 
  FolderOpen, 
  Settings, 
  Mail, 
  Sun, 
  Moon,
  Download,
  Home
} from 'lucide-react'
import { useTheme } from './ThemeProvider'
import CVPDFExport from './CVPDFExport'
import cvData from '../data/cvData'
import './Navigation.css'

const Navigation = ({ lang = 'da', setLang }) => {
  const { theme, toggleTheme } = useTheme()
  // const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navigationItems = [
    { href: '#fullcv', label: { da: 'Fuld CV', en: 'Full CV' }, icon: Home },
    { href: '#personal', label: { da: 'Personlig Info', en: 'Personal Info' }, icon: User },
    { href: '#skills', label: { da: 'Kompetencer', en: 'Skills' }, icon: Code },
    { href: '#experience', label: { da: 'Erfaring', en: 'Experience' }, icon: Briefcase },
    { href: '#projects', label: { da: 'Projekter', en: 'Projects' }, icon: FolderOpen },
    { href: '#system', label: { da: 'Systemudvikling', en: 'System Development' }, icon: Settings },
    { href: '#contact', label: { da: 'Kontakt', en: 'Contact' }, icon: Mail }
  ];

  const handlePrint = () => {
    window.print()
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Victor T. U. Olszowski</h2>
        </div>

        {/* Hamburger menu for small screens */}


        <ul className={`nav-list${menuOpen ? ' open' : ''}`}>
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.href} className="nav-item">
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <IconComponent size={18} />
                  <span className="nav-text">{item.label[lang]}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="nav-right">
          <button
            className="btn btn-secondary"
            onClick={toggleTheme}
            style={{
              height: '40px',
              minHeight: '40px',
              padding: '0 1em',
              boxSizing: 'border-box',
              display: 'inline-flex',
              alignItems: 'center',
              verticalAlign: 'middle'
            }}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <CVPDFExport cvData={{
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
              years: exp.period
            })),
            lang: lang
          }} />
          <button
            className="btn btn-primary"
            onClick={() => {
              const newLang = lang === 'da' ? 'en' : 'da'
              setLang(newLang)
              localStorage.setItem('cv-lang', newLang)
            }}
            style={{ fontWeight: 600 }}
          >
            {lang === 'da' ? 'English' : 'Dansk'}
          </button>
          <button
            className="nav-hamburger"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>

        {/* ...existing code... */}
      </div>
    </nav>
  )
}

export default Navigation
