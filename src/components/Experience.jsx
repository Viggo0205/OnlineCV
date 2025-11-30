import React from 'react'
import { Briefcase, Calendar } from 'lucide-react'
import cvData from '../data/cvData'
import './Experience.css'

const Experience = () => {
  const { experience } = cvData

  return (
    <section className="experience section">
      <h2 className="section-title">
        <Briefcase className="section-title-icon" />
        Erfaring
      </h2>
      <div className="experience-cards">
        {experience.map((job) => (
          <div key={job.id} className="profile-card experience-card">
            <div className="profile-card-title" style={{marginBottom: '0.5rem', textAlign: 'left'}}>
              {job.title}
            </div>
            <div className="company-name" style={{marginBottom: '0.5rem', textAlign: 'left'}}>
              <a href="#" style={{color: '#2979ff', textDecoration: 'underline', textAlign: 'left'}}>{job.company}</a>
            </div>
            <div className="period" style={{marginBottom: '0.5rem', color: 'var(--text-tertiary)', textAlign: 'left'}}>
              <Calendar size={16} style={{marginRight: '0.5em'}} />
              {job.period}
            </div>
            <div className="job-description" style={{marginBottom: '1rem', textAlign: 'left'}}>{job.description}</div>
            {job.courses && (
              <ul className="course-list" style={{marginBottom: '0.5rem', textAlign: 'left'}}>
                {job.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="course-item" style={{color: 'var(--text-primary)', fontSize: '1rem', textAlign: 'left'}}>{course}</li>
                ))}
              </ul>
            )}
            {/* DTU-kurser tags for DTU card only */}
            {job.company === 'Danmarks Tekniske Universitet (DTU)' && (
              <div className="technologies" style={{display: 'flex', flexWrap: 'wrap', gap: '0.5em', marginBottom: '1em'}}>
                <span className="tech-badge badge badge-primary">C</span>
                <span className="tech-badge badge badge-primary">Assembly</span>
                <span className="tech-badge badge badge-primary">Matlab</span>
                <span className="tech-badge badge badge-primary">Java</span>
                <span className="tech-badge badge badge-primary">Python</span>
                <span className="tech-badge badge badge-primary">VHDL</span>
              </div>
            )}
            {job.achievements && (
              <div className="achievements">
                <h4 className="achievements-title" style={{textAlign: 'left'}}>Resultater & Erfaringer:</h4>
                <ul className="achievements-list" style={{textAlign: 'left'}}>
                  {job.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item" style={{textAlign: 'left'}}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {job.technologies && (
              <div className="technologies" style={{textAlign: 'left'}}>
                {job.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge badge badge-primary" style={{textAlign: 'left'}}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience