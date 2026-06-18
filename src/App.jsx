import { useState, useEffect } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import PersonalInfo from './components/PersonalInfo'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import SystemDevelopment from './components/SystemDevelopment'
import Contact from './components/Contact'
import ThemeProvider from './components/ThemeProvider'
import './styles/App.css'

function App() {
  const [lang, setLang] = useState('da')

  useEffect(() => {
    const savedLang = localStorage.getItem('cv-lang') || 'da'
    setLang(savedLang)
  }, [])

  return (
    <ThemeProvider>
      <div className="app">
        <Navigation lang={lang} setLang={setLang} />
        <div className="app-content container">
          <div id="fullcv" className="cv-container">
            <Header lang={lang} />
            <div className="main-content">
              <PersonalInfo lang={lang} />
              <Skills lang={lang} />
              <Experience lang={lang} />
              <Projects lang={lang} />
              <SystemDevelopment lang={lang} />
              <Contact lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
