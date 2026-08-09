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
  Home,
} from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'
import CVPDFExportLazy from './CVPDFExportLazy'
import './Navigation.css'

const navigationItems = [
  { href: '#fullcv', labelKey: 'fullCv', icon: Home },
  { href: '#personal', labelKey: 'personalInfo', icon: User },
  { href: '#skills', labelKey: 'skills', icon: Code },
  { href: '#experience', labelKey: 'experience', icon: Briefcase },
  { href: '#projects', labelKey: 'projects', icon: FolderOpen },
  { href: '#system', labelKey: 'systemDevelopment', icon: Settings },
  { href: '#contact', labelKey: 'contact', icon: Mail },
]

const Navigation = () => {
  const { theme, toggleTheme } = useTheme()
  const { label, toggleLang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navigation no-print" aria-label={label('navAria')}>
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
                  <span className="nav-text">{label(item.labelKey)}</span>
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
            aria-label={theme === 'light' ? label('themeToDark') : label('themeToLight')}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            type="button"
            className="btn btn-secondary nav-print-btn"
            onClick={() => window.print()}
            aria-label={label('printCv')}
          >
            <Printer size={18} />
          </button>
          <CVPDFExportLazy />
          <button
            type="button"
            className="btn btn-secondary nav-language-btn"
            onClick={toggleLang}
          >
            {label('languageToggle')}
          </button>
          <button
            type="button"
            className="nav-hamburger"
            aria-expanded={menuOpen}
            aria-controls="cv-navigation"
            aria-label={label('openNav')}
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
