import React from 'react'
import { Settings, GitBranch, Layers } from 'lucide-react'
import cvData from '../data/cvData'
import './SystemDevelopment.css'

const SystemDevelopment = () => {
  const { systemDevelopment } = cvData

  return (
    <section className="system-development section">
      <h2 className="section-title">
        <Settings className="section-title-icon" />
        Systemudvikling
      </h2>

      <div className="system-content grid grid-3">
        <div className="methods-card card">
          <h3 className="card-title">
            <GitBranch className="card-title-icon" />
            Udviklingsmetoder
          </h3>
          <div className="methods-list">
            {systemDevelopment.methods.map((method, index) => (
              <div key={index} className="method-item">
                {method}
              </div>
            ))}
          </div>
        </div>

        <div className="tools-card card">
          <h3 className="card-title">
            <Layers className="card-title-icon" />
            Modellering & Analyse
          </h3>
          <div className="tools-list">
            {systemDevelopment.tools.map((tool, index) => (
              <div key={index} className="tool-item">
                {tool}
              </div>
            ))}
          </div>
        </div>

        <div className="frameworks-card card">
          <h3 className="card-title">
            <Settings className="card-title-icon" />
            Frameworks & Platforme
          </h3>
          <div className="frameworks-list">
            {systemDevelopment.frameworks.map((framework, index) => (
              <div key={index} className="framework-item">
                {framework}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="system-description card">
        <h3 className="description-title">Systemudviklingskompetencer</h3>
        <p className="description-text">
          Jeg har erfaring med flere systemudviklingsmetoder og værktøjer, der anvendes i udviklingsprocessen. 
          Gennem mine studier og praktikforløb har jeg arbejdet med forskellige tilgange til projekt- og 
          systemudvikling, fra traditionelle metoder som Waterfall til agile metoder som Scrum og XP.
        </p>
        <p className="description-text">
          Min erfaring inkluderer anvendelse af forskellige modelleringsværktøjer til at analysere, 
          designe og dokumentere systemer, samt praktisk arbejde med moderne frameworks og 
          udviklingsplatforme.
        </p>
      </div>
    </section>
  )
}

export default SystemDevelopment