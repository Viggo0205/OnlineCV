import React from 'react'
import { FolderOpen, ExternalLink, Github } from 'lucide-react'
import cvData from '../data/cvData'
import './Projects.css'

const translations = {
  title: { da: 'Projekter', en: 'Projects' },
  description: {
    da: 'Nedenfor ses et udvalg af mine offentlige projekter og eksempler fra GitHub. Flere projekter og løsninger er udviklet gennem uddannelse og arbejde, men kun de mest relevante og illustrative er vist her.',
    en: 'Below is a selection of my public projects and examples from GitHub. More projects and solutions have been developed through education and work, but only the most relevant and illustrative are shown here.'
  }
}

const Projects = ({ lang = 'da' }) => {
  const { projects } = cvData

  return (
    <section id="projects" className="projects section">
      <h2 className="section-title">
        <FolderOpen className="section-title-icon" />
        {translations.title[lang]}
      </h2>
      <p className="projects-description">
        {translations.description[lang]}
      </p>

      <div className="projects-grid grid grid-2">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  title="View repository"
                  style={{ marginLeft: '0.5em', verticalAlign: 'middle' }}
                >
                  <Github size={18} style={{ verticalAlign: 'middle' }} />
                </a>
              )}
            </div>
            <p className="project-description">{project.description}</p>
            {project.highlights && (
              <div className="project-highlights">
                <h4 className="highlights-title">Highlights:</h4>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, hlIndex) => (
                    <li key={hlIndex} className="highlight-item">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge badge badge-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-note card">
        <p className="note-text">
          <strong>{lang === 'da' ? 'Note:' : 'Note:'}</strong> {lang === 'da'
            ? 'Disse projekter er udviklet gennem mine studier og praktikforløb, hvor jeg har arbejdet med forskellige teknologier og udviklingsprincipper. Projekterne demonstrerer min evne til at arbejde med moderne udviklingsværktøjer og metodikker i både individuelle og team-baserede miljøer.'
            : 'These projects were developed through my studies and internships, where I worked with various technologies and development principles. The projects demonstrate my ability to work with modern development tools and methodologies in both individual and team-based environments.'}
        </p>
      </div>
    </section>
  )
}

export default Projects