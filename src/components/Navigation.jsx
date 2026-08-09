import { useState } from 'react'
import {
  User,
  Code,
  Briefcase,
  FolderOpen,
  Settings,
  Mail,
  Sun,
  Moon,
  Printer,
  Home
} from 'lucide-react'
import { useTheme } from './ThemeProvider'
import CVPDFExportLazy from './CVPDFExportLazy'
import './Navigation.css'

const Navigation = ({ lang = 'da', setLang }) => {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const navigationItems = [
    { href: '#fullcv', label: { da: 'Fuld CV', en: 'Full CV' }, icon: Home },
    { href: '#personal', label: { da: 'Personlig Info', en: 'Personal Info' }, icon: User },
    { href: '#skills', label: { da: 'Kompetencer', en: 'Skills' }, icon: Code },
    { href: '#experience', label: { da: 'Erfaring', en: 'Experience' }, icon: Briefcase },
    { href: '#projects', label: { da: 'Projekter', en: 'Projects' }, icon: FolderOpen },
    { href: '#system', label: { da: 'Systemudvikling', en: 'System Development' }, icon: Settings },
    { href: '#contact', label: { da: 'Kontakt', en: 'Contact' }, icon: Mail }
  ]

  const handlePrint = () => {
    window.print()
  }

  return (
    <nav className="navigation no-print" aria-label={lang === 'da' ? 'CV navigation' : 'CV navigation'}>
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Victor T. U. Olszowski</h2>
        </div>

        <ul id="cv-navigation" className={`nav-list${menuOpen ? ' open' : ''}`}>
          {navigationItems.map((item) => {
            const IconComponent = item.icon
            return (
              <li key={item.href} className="nav-item">
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <IconComponent size={18} aria-hidden="true" />
                  <span className="nav-text">{item.label[lang]}</span>
                </a>
              </li>
            )
          })}
        </ul>
        <div className="nav-right">
          <button
            type="button"
            className="btn btn-secondary nav-theme-btn"
            onClick={toggleTheme}
            aria-label={theme === 'light'
              ? (lang === 'da' ? 'Skift til mørkt tema' : 'Switch to dark theme')
              : (lang === 'da' ? 'Skift til lyst tema' : 'Switch to light theme')}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            type="button"
            className="btn btn-secondary nav-print-btn"
            onClick={handlePrint}
            aria-label={lang === 'da' ? 'Udskriv CV' : 'Print CV'}
          >
            <Printer size={18} />
          </button>
          <CVPDFExportLazy lang={lang} />
          <button
            type="button"
            className="btn btn-secondary nav-language-btn"
            onClick={() => {
              const newLang = lang === 'da' ? 'en' : 'da'
              setLang(newLang)
              localStorage.setItem('cv-lang', newLang)
            }}
          >
            {lang === 'da' ? 'English' : 'Dansk'}
          </button>
          <button
            type="button"
            className="nav-hamburger"
            aria-expanded={menuOpen}
            aria-controls="cv-navigation"
            aria-label={lang === 'da' ? 'Åbn navigation' : 'Toggle navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
