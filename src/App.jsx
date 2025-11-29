import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
  const [currentPage, setCurrentPage] = useState('personal')
  const [theme, setTheme] = useState('light')
  const [lang, setLang] = useState('da')

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('cv-theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('cv-theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // Main CV content (single page view)
  const renderMainCV = () => (
    <div className="cv-container">
      <Header lang={lang} setLang={setLang} />
        <div className="main-content">
          {/* Interests and highlights in the same container as header */}
          <PersonalInfo lang={lang} />
          <Skills lang={lang} />
          <Experience lang={lang} />
          {/* <Projects lang={lang} /> */}
          <SystemDevelopment lang={lang} />
          <Contact lang={lang} />
        </div>
    </div>
  )

  // Individual page components for separate pages
  const renderPageContent = () => {
    switch(currentPage) {
      case 'personal':
        return <PersonalInfo lang={lang} />
      case 'skills':
        return <Skills lang={lang} />
      case 'experience':
        return <Experience lang={lang} />
      case 'projects':
        return <Projects lang={lang} />
      case 'system':
        return <SystemDevelopment lang={lang} />
      case 'contact':
        return <Contact lang={lang} />
      default:
        return <PersonalInfo lang={lang} />
    }
  }

  return (
    <ThemeProvider>
      <div className="app">
        <Router>
          <Navigation 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            theme={theme}
            toggleTheme={toggleTheme}
            lang={lang}
            setLang={setLang}
          />
          
          <div className="app-content container">
            <Routes>
              {/* Main CV route - all content on one page */}
              <Route path="/" element={renderMainCV()} />
              
              {/* Individual page routes */}
              <Route path="/personal" element={
                <div className="page-container">
                  <Header lang={lang} setLang={setLang} />
                  <PersonalInfo lang={lang} />
                </div>
              } />
              
              <Route path="/experience" element={
                <div className="page-container">
                  <Header lang={lang} setLang={setLang} />
                  <Experience lang={lang} />
                </div>
              } />
              
              <Route path="/projects" element={
                <div className="page-container">
                  <Header lang={lang} setLang={setLang} />
                  <Projects lang={lang} />
                </div>
              } />
              
              <Route path="/system" element={
                <div className="page-container">
                  <Header lang={lang} setLang={setLang} />
                  <SystemDevelopment lang={lang} />
                </div>
              } />
              
              <Route path="/contact" element={
                <div className="page-container">
                  <Header lang={lang} setLang={setLang} />
                  <Contact lang={lang} />
                </div>
              } />
              
              {/* Redirect any unknown routes to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App