import { FolderOpen, Github } from 'lucide-react'
import cvData from '../data/cvData'
import { useLanguage } from './LanguageProvider'
import './Projects.css'

const Projects = () => {
  const { label, t } = useLanguage()
  const { projects } = cvData

  return (
    <section id="projects" className="projects section">
      <h2 className="section-title">
        <FolderOpen className="section-title-icon" />
        {label('projects')}
      </h2>
      <p className="projects-description">
        {label('projectsIntro')}
      </p>

      <div className="projects-grid grid grid-2">
        {projects.map((project) => (
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
                >
                  <Github size={18} className="project-link-icon" />
                </a>
              )}
            </div>
            <p className="project-description">{t(project.description)}</p>
            {project.highlights && (
              <div className="project-highlights">
                <h4 className="highlights-title">Highlights:</h4>
                <ul className="highlights-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="highlight-item">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge badge-secondary project-tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="projects-note card">
        <p className="note-text">
          <strong>{label('note')}</strong> {label('projectsNote')}
        </p>
      </div>
    </section>
  )
}

export default Projects
