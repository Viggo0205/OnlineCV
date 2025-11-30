import React, { useState, useEffect } from 'react'
import SkillsCarousel from './SkillsCarousel'
import { Code, Database, Settings, Wrench } from 'lucide-react'
import cvData from '../data/cvData'
import './Skills.css'

const Skills = ({ lang = 'da' }) => {
  const [slideDirection, setSlideDirection] = useState(null);
  const { programmingSkills, relevantSkills } = cvData;
  const [visibleSkills, setVisibleSkills] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('right');
      setAnimating(true);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % programmingSkills.languages.length);
        setSlideDirection(null);
      }, 700);
    }, 2500);
    return () => clearInterval(interval);
  }, [programmingSkills.languages.length]);

  useEffect(() => {
    const timer = setTimeout(() => setVisibleSkills(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const languages = programmingSkills.languages;

  return (
    <section id="skills" className="skills section">
      <h2 className="section-title">
        <Code className="section-title-icon" />
        {lang === 'da' ? 'Kompetencer' : 'Skills'}
      </h2>

      {/* General Skills */}
      <div className="skills-category">
        <h3 className="category-title">
          <Settings className="category-icon" />
          {lang === 'da' ? 'Generelle Kompetencer' : 'General Skills'}
        </h3>
        <div className="general-skills-grid">
          {relevantSkills.generalSkills.map((category, index) => (
            <div key={index} className="general-skill-card card">
              <h4 className="skill-category-title">{typeof category.category === 'object' ? (category.category[lang] || category.category['da'] || Object.values(category.category)[0]) : category.category}</h4>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-list-item">
                    {typeof skill === 'object' ? (skill[lang] || skill['da'] || Object.values(skill)[0]) : skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Programming Languages Carousel */}
      <div className="skills-category">
        <h3 className="category-title">
          <Code className="category-icon" />
          {lang === 'da' ? 'Programmeringssprog' : 'Programming Languages'}
        </h3>
        <div style={{ maxWidth: 420, margin: '0 auto', padding: '1.5rem 0' }}>
          <SkillsCarousel languages={programmingSkills.languages} />
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="skills-category">
        <h3 className="category-title">
          <Wrench className="category-icon" />
          {lang === 'da' ? 'Værktøjer & Teknologier' : 'Tools & Technologies'}
        </h3>
        <div className="tools-grid">
          {programmingSkills.tools.map((tool, index) => (
            <div key={index} className="tool-badge">
              <span>{tool}</span>
            </div>
          ))}
          <div className="tool-badge">
            <span>MCP-servers</span>
          </div>
        </div>
      </div>

      {/* Frameworks */}
      <div className="skills-category">
        <h3 className="category-title">
          <Database className="category-icon" />
          Frameworks
        </h3>
        <div className="frameworks-grid">
          {programmingSkills.frameworks.map((framework, index) => (
            <div key={index} className="framework-card card">
              <h4 className="framework-name">{framework.name}</h4>
              {framework.versions && (
                <p className="framework-versions">
                  Versioner: {framework.versions.join(', ')}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills