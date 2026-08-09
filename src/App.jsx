import Header from './components/Header'
import Navigation from './components/Navigation'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import SystemDevelopment from './components/SystemDevelopment'
import Contact from './components/Contact'
import ThemeProvider from './components/ThemeProvider'
import LanguageProvider from './components/LanguageProvider'
import './styles/App.css'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app">
          <Navigation />
          <div className="app-content container">
            <div id="fullcv" className="cv-container">
              <Header />
              <div className="main-content">
                <Skills />
                <Experience />
                <Projects />
                <SystemDevelopment />
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
