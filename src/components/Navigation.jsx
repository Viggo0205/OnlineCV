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

const Navigation = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const navigationItems = [
    { path: '/', label: 'Fuld CV', icon: Home },
    { path: '/personal', label: 'Personlig Info', icon: User },
    { path: '/skills', label: 'Kompetencer', icon: Code },
    { path: '/experience', label: 'Erfaring', icon: Briefcase },
    { path: '/system', label: 'Systemudvikling', icon: Settings },
    { path: '/contact', label: 'Kontakt', icon: Mail }
  ]

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
            const IconComponent = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  <IconComponent size={18} />
                  <span className="nav-text">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="nav-actions">
          <button 
            className="nav-action-btn"
            onClick={handlePrint}
            title="Download PDF"
          >
            <Download size={18} />
            <span className="nav-action-text">PDF</span>
          </button>
          
          <button 
            className="nav-action-btn theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation