import React from 'react'
import { Settings, GitBranch, Layers } from 'lucide-react'
import cvData from '../data/cvData'
import './SystemDevelopment.css'

const SystemDevelopment = ({ lang = 'da' }) => {
  const { systemDevelopment } = cvData

  return (
    <section className="system-development section">
      <h2 className="section-title">
        <Settings className="section-title-icon" />
        {lang === 'da' ? 'Systemudvikling' : 'System Development'}
      </h2>

      <div className="system-content grid grid-3">
        <div className="methods-card card">
          <h3 className="card-title">
            <GitBranch className="card-title-icon" />
            {lang === 'da' ? 'Udviklingsmetoder' : 'Development Methods'}
          </h3>
          <div className="methods-list">
            {systemDevelopment.methods.map((method, index) => (
              <div key={index} className="method-item">
                {typeof method === 'object' ? (method[lang] || method['da']) : method}
              </div>
            ))}
          </div>
        </div>

        <div className="tools-card card">
          <h3 className="card-title">
            <Layers className="card-title-icon" />
            {lang === 'da' ? 'Modellering & Analyse' : 'Modeling & Analysis'}
          </h3>
          <div className="tools-list">
            {systemDevelopment.tools.map((tool, index) => (
              <div key={index} className="tool-item">
                {typeof tool === 'object' ? (tool[lang] || tool['da']) : tool}
              </div>
            ))}
          </div>
        </div>

        <div className="frameworks-card card">
          <h3 className="card-title">
            <Settings className="card-title-icon" />
            {lang === 'da' ? 'Frameworks & Platforme' : 'Frameworks & Platforms'}
          </h3>
          <div className="frameworks-list">
            {systemDevelopment.frameworks.map((framework, index) => (
              <div key={index} className="framework-item">
                {typeof framework === 'object' ? (framework[lang] || framework['da']) : framework}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="system-description card">
        <h3 className="description-title">{lang === 'da' ? 'Systemudviklingskompetencer' : 'System Development Skills'}</h3>
        {/* DTU tags removed as requested */}
        <p className="description-text">
          {lang === 'da'
            ? 'Jeg har erfaring med flere systemudviklingsmetoder og værktøjer, der anvendes i udviklingsprocessen. Gennem mine studier og praktikforløb har jeg arbejdet med forskellige tilgange til projekt- og systemudvikling, fra traditionelle metoder som Waterfall til agile metoder som Scrum og XP.'
            : 'I have experience with several system development methods and tools used in the development process. Through my studies and internships, I have worked with various approaches to project and system development, from traditional methods like Waterfall to agile methods like Scrum and XP.'}
        </p>
        <p className="description-text">
          {lang === 'da'
            ? 'Min erfaring inkluderer anvendelse af forskellige modelleringsværktøjer til at analysere, designe og dokumentere systemer, samt praktisk arbejde med moderne frameworks og udviklingsplatforme.'
            : 'My experience includes using various modeling tools to analyze, design, and document systems, as well as practical work with modern frameworks and development platforms.'}
        </p>
      </div>
    </section>
  )
}

export default SystemDevelopment