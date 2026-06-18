import { Briefcase, Calendar } from 'lucide-react'
import cvData from '../data/cvData'
import { t } from '../data/i18n'
import './Experience.css'

const Experience = ({ lang = 'da' }) => {
  const { experience } = cvData

  return (
    <section id="experience" className="experience section">
      <h2 className="section-title">
        <Briefcase className="section-title-icon" />
        {lang === 'da' ? 'Erfaring' : 'Experience'}
      </h2>
      <div className="experience-cards">
        {experience.map((job) => (
          <div key={job.id} className="profile-card experience-card">
            <div className="profile-card-title experience-card-title">
              {typeof job.title === 'object' ? (job.title[lang] || job.title['da'] || Object.values(job.title)[0]) : job.title}
            </div>
            <div className="company-name">
              <span className="company-link">{t(job.company, lang)}</span>
            </div>
            <div className="period experience-period">
              <Calendar size={16} className="period-icon" />
              {job.period}
            </div>
            <div className="job-description experience-description">
              {typeof job.description === 'object' ? (job.description[lang] || job.description['da'] || Object.values(job.description)[0]) : job.description}
            </div>
            {job.courses && (
              <ul className="course-list">
                {job.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="course-item">
                    {typeof course === 'object' ? (course[lang] || course['da'] || Object.values(course)[0]) : course}
                  </li>
                ))}
              </ul>
            )}
            {/* DTU-kurser tags for DTU card only */}
            {job.isDtu && (
              <div className="technologies dtu-tech-list">
                <span className="experience-tech-badge badge badge-secondary">C</span>
                <span className="experience-tech-badge badge badge-secondary">Assembly</span>
                <span className="experience-tech-badge badge badge-secondary">Matlab</span>
                <span className="experience-tech-badge badge badge-secondary">Java</span>
                <span className="experience-tech-badge badge badge-secondary">Python</span>
                <span className="experience-tech-badge badge badge-secondary">VHDL</span>
              </div>
            )}
            {job.achievements && (
              <div className="achievements">
                <h4 className="achievements-title">
                  {lang === 'da' ? 'Resultater & Erfaringer:' : 'Results & Experience:'}
                </h4>
                <ul className="achievements-list">
                  {job.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      {typeof achievement === 'object' ? (achievement[lang] || achievement['da'] || Object.values(achievement)[0]) : achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {job.technologies && (
              <div className="technologies">
                {job.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="experience-tech-badge badge badge-secondary">
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