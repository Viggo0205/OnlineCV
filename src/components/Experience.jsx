import { Briefcase, Calendar } from 'lucide-react'
import cvData from '../data/cvData'
import { useLanguage } from './LanguageProvider'
import './Experience.css'

const Experience = () => {
  const { label, t } = useLanguage()
  const { experience } = cvData

  return (
    <section id="experience" className="experience section">
      <h2 className="section-title">
        <Briefcase className="section-title-icon" />
        {label('experience')}
      </h2>
      <div className="experience-cards">
        {experience.map((job) => (
          <div key={job.id} className="profile-card experience-card">
            <div className="profile-card-title experience-card-title">
              {t(job.title)}
            </div>
            <div className="company-name">
              <span className="company-link">{t(job.company)}</span>
            </div>
            <div className="period experience-period">
              <Calendar size={16} className="period-icon" />
              {job.period}
            </div>
            {job.description && (
              <div className="job-description experience-description">
                {t(job.description)}
              </div>
            )}
            {job.courses && (
              <ul className="course-list">
                {job.courses.map((course) => (
                  <li key={t(course)} className="course-item">
                    {t(course)}
                  </li>
                ))}
              </ul>
            )}
            {job.isDtu && (
              <div className="technologies dtu-tech-list">
                {['C', 'Assembly', 'Matlab', 'Java', 'Python', 'VHDL'].map((tech) => (
                  <span key={tech} className="experience-tech-badge badge badge-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {job.achievements?.length > 0 && (
              <div className="achievements">
                <h4 className="achievements-title">
                  {label('resultsExperience')}
                </h4>
                <ul className="achievements-list">
                  {job.achievements.map((achievement) => (
                    <li key={t(achievement)} className="achievement-item">
                      {t(achievement)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {job.technologies && (
              <div className="technologies">
                {job.technologies.map((tech) => (
                  <span key={tech} className="experience-tech-badge badge badge-secondary">
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
