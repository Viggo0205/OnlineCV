import React, { useState, useEffect } from 'react'
import { Code, Database, Settings, Wrench } from 'lucide-react'
import cvData from '../data/cvData'
import './Skills.css'

const Skills = () => {
  const { programmingSkills, relevantSkills } = cvData
  const [visibleSkills, setVisibleSkills] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisibleSkills(true), 300)
    return () => clearTimeout(timer)
  }, [])


  // Karusel til programmeringssprog
  const [currentSkill, setCurrentSkill] = useState(0);
  const languages = programmingSkills.languages;
  const handlePrev = () => setCurrentSkill((prev) => (prev === 0 ? languages.length - 1 : prev - 1));
  const handleNext = () => setCurrentSkill((prev) => (prev === languages.length - 1 ? 0 : prev + 1));

  // Auto-play karusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev === languages.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [languages.length]);

  const SkillCarousel = () => (
    <div className="skill-carousel">
      <button className="carousel-btn" onClick={handlePrev}>&lt;</button>
      <div className="carousel-content">
        <div className="skill-item">
          <div className="skill-header">
            <span className="skill-name">{languages[currentSkill].name}</span>
            <span className="skill-level">{languages[currentSkill].level}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{
                width: visibleSkills ? `${languages[currentSkill].level}%` : '0%',
                transitionDelay: `0ms`
              }}
            />
          </div>
          <span className="skill-experience">{languages[currentSkill].experience}</span>
        </div>
      </div>
      <button className="carousel-btn" onClick={handleNext}>&gt;</button>
    </div>
  )

  return (
    <section className="skills section">
      <h2 className="section-title">
        <Code className="section-title-icon" />
        Kompetencer
      </h2>

      {/* General Skills */}
      <div className="skills-category">
        <h3 className="category-title">
          <Settings className="category-icon" />
          Generelle Kompetencer
        </h3>
        <div className="general-skills-grid">
          {relevantSkills.generalSkills.map((category, index) => (
            <div key={index} className="general-skill-card card">
              <h4 className="skill-category-title">{category.category}</h4>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-list-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Programming Languages Karusel */}
      <div className="skills-category">
        <h3 className="category-title">
          <Code className="category-icon" />
          Programmeringssprog
        </h3>
        <SkillCarousel />
      </div>

      {/* Tools & Technologies */}
      <div className="skills-category">
        <h3 className="category-title">
          <Wrench className="category-icon" />
          Værktøjer & Teknologier
        </h3>
        <div className="tools-grid">
          {programmingSkills.tools.map((tool, index) => (
            <div key={index} className="tool-badge badge badge-primary">
              {tool}
            </div>
          ))}
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