import React from 'react'
import { FolderOpen, ExternalLink, Github } from 'lucide-react'
import cvData from '../data/cvData'
import './Projects.css'

const Projects = () => {
  const { projects } = cvData

  return (
    <section className="projects section">
      <h2 className="section-title">
        <FolderOpen className="section-title-icon" />
        Projekter
      </h2>

      <div className="projects-grid grid grid-2">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
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
          <strong>Note:</strong> Disse projekter er udviklet gennem mine studier og praktikforløb, 
          hvor jeg har arbejdet med forskellige teknologier og udviklingsprincipper. 
          Projekterne demonstrerer min evne til at arbejde med moderne udviklingsværktøjer 
          og metodikker i både individuelle og team-baserede miljøer.
        </p>
      </div>
    </section>
  )
}

export default Projects