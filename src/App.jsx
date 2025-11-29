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
      <Header />
      <main className="main-content">
        <PersonalInfo />
        <Skills />
        <Experience />
        <Projects />
        <SystemDevelopment />
        <Contact />
      </main>
    </div>
  )

  // Individual page components for separate pages
  const renderPageContent = () => {
    switch(currentPage) {
      case 'personal':
        return <PersonalInfo />
      case 'skills':
        return <Skills />
      case 'experience':
        return <Experience />
      case 'projects':
        return <Projects />
      case 'system':
        return <SystemDevelopment />
      case 'contact':
        return <Contact />
      default:
        return <PersonalInfo />
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
          />
          
          <div className="app-content container">
            <Routes>
              {/* Main CV route - all content on one page */}
              <Route path="/" element={renderMainCV()} />
              
              {/* Individual page routes */}
              <Route path="/personal" element={
                <div className="page-container">
                  <Header />
                  <PersonalInfo />
                </div>
              } />
              } />
              
              <Route path="/experience" element={
                <div className="page-container">
                  <Header />
                  <Experience />
                </div>
              } />
              
              <Route path="/projects" element={
                <div className="page-container">
                  <Header />
                  <Projects />
                </div>
              } />
              
              <Route path="/system" element={
                <div className="page-container">
                  <Header />
                  <SystemDevelopment />
                </div>
              } />
              
              <Route path="/contact" element={
                <div className="page-container">
                  <Header />
                  <Contact />
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