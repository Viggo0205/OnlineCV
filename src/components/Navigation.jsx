import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from './ThemeProvider'
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
import './Navigation.css'

const Navigation = ({ lang = 'da', setLang }) => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const navigationItems = [
    { path: '/', label: { da: 'Fuld CV', en: 'Full CV' }, icon: Home },
    { path: '/personal', label: { da: 'Personlig Info', en: 'Personal Info' }, icon: User },
    { path: '/skills', label: { da: 'Kompetencer', en: 'Skills' }, icon: Code },
    { path: '/experience', label: { da: 'Erfaring', en: 'Experience' }, icon: Briefcase },
    { path: '/system', label: { da: 'Systemudvikling', en: 'System Development' }, icon: Settings },
    { path: '/contact', label: { da: 'Kontakt', en: 'Contact' }, icon: Mail }
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

        <ul className="nav-list">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  <IconComponent size={18} />
                  <span className="nav-text">{item.label[lang]}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', gap: '0.5em' }}>
          <button className="btn btn-secondary" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="btn btn-outline" onClick={handlePrint}>
            <Download size={16} /> Print
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setLang(lang === 'da' ? 'en' : 'da')}
            style={{ fontWeight: 600 }}
          >
            {lang === 'da' ? 'English' : 'Dansk'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
