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

      <div className="timeline">
        {experience.map((job, index) => (
          <div key={job.id} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content card">
              <div className="timeline-header">
                <h3 className="position-title">{job.title}</h3>
                <span className="company-name">{job.company}</span>
                <div className="period">
                  <Calendar size={16} />
                  {job.period}
                </div>
              </div>
              

              <p className="job-description">{job.description}</p>

              {job.courses && (
                <ul className="course-list">
                  {job.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="course-item">{course}</li>
                  ))}
                </ul>
              )}

              {job.achievements && (
                <div className="achievements">
                  <h4 className="achievements-title">Resultater & Erfaringer:</h4>
                  <ul className="achievements-list">
                    {job.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {job.technologies && (
                <div className="technologies">
                  {job.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge badge badge-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience