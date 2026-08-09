import { Code, Database, Settings, Wrench } from 'lucide-react'
import SkillsCarousel from './SkillsCarousel'
import cvData from '../data/cvData'
import { useLanguage } from './LanguageProvider'
import './Skills.css'

const Skills = () => {
  const { label, t } = useLanguage()
  const { programmingSkills, relevantSkills } = cvData

  return (
    <section id="skills" className="skills section">
      <h2 className="section-title">
        <Code className="section-title-icon" />
        {label('skills')}
      </h2>

      <div className="skills-category">
        <h3 className="category-title">
          <Settings className="category-icon" />
          {label('generalSkills')}
        </h3>
        <div className="general-skills-grid">
          {relevantSkills.generalSkills.map((category) => (
            <div key={t(category.category)} className="general-skill-card card">
              <h4 className="skill-category-title">{t(category.category)}</h4>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={t(skill)} className="skill-list-item">
                    {t(skill)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3 className="category-title">
          <Code className="category-icon" />
          {label('programmingLanguages')}
        </h3>
        <div className="skills-carousel-shell">
          <SkillsCarousel languages={programmingSkills.languages} />
        </div>
      </div>

      <div className="skills-category">
        <h3 className="category-title">
          <Wrench className="category-icon" />
          {label('toolsTechnologies')}
        </h3>
        <div className="tools-grid">
          {programmingSkills.tools.map((tool) => (
            <div key={tool} className="tool-badge">
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3 className="category-title">
          <Database className="category-icon" />
          Frameworks
        </h3>
        <div className="frameworks-grid">
          {programmingSkills.frameworks.map((framework) => (
            <div key={framework.name} className="framework-card card">
              <h4 className="framework-name">{framework.name}</h4>
              {framework.versions && (
                <p className="framework-versions">
                  {label('versions')}: {framework.versions.join(', ')}
                </p>
              )}
              {framework.level && (
                <p className="framework-level">{t(framework.level)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
