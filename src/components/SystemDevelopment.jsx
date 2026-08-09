import { Settings, GitBranch, Layers } from 'lucide-react'
import cvData from '../data/cvData'
import { useLanguage } from './LanguageProvider'
import './SystemDevelopment.css'

const SystemDevelopment = () => {
  const { label, t } = useLanguage()
  const { systemDevelopment } = cvData

  return (
    <section id="system" className="system-development section">
      <h2 className="section-title">
        <Settings className="section-title-icon" />
        {label('systemDevelopment')}
      </h2>

      <div className="system-content grid grid-3">
        <div className="methods-card card">
          <h3 className="card-title">
            <GitBranch className="card-title-icon" />
            {label('developmentMethods')}
          </h3>
          <div className="methods-list">
            {systemDevelopment.methods.map((method) => (
              <div key={t(method)} className="method-item">
                {t(method)}
              </div>
            ))}
          </div>
        </div>

        <div className="tools-card card">
          <h3 className="card-title">
            <Layers className="card-title-icon" />
            {label('modelingAnalysis')}
          </h3>
          <div className="tools-list">
            {systemDevelopment.tools.map((tool) => (
              <div key={t(tool)} className="tool-item">
                {t(tool)}
              </div>
            ))}
          </div>
        </div>

        <div className="frameworks-card card">
          <h3 className="card-title">
            <Settings className="card-title-icon" />
            {label('frameworksPlatforms')}
          </h3>
          <div className="frameworks-list">
            {systemDevelopment.frameworks.map((framework) => (
              <div key={t(framework)} className="framework-item">
                {t(framework)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="system-description card">
        <h3 className="description-title">{label('systemSkillsTitle')}</h3>
        <p className="description-text">{label('systemSkillsP1')}</p>
        <p className="description-text">{label('systemSkillsP2')}</p>
      </div>
    </section>
  )
}

export default SystemDevelopment
