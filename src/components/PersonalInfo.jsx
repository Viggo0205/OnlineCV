import React from 'react'
import { User, Heart, Coffee, Gamepad2, Dumbbell, Target } from 'lucide-react'
import cvData from '../data/cvData'
import './PersonalInfo.css'

const PersonalInfo = () => {
  const { personalProfile } = cvData

  const interestIcons = {
    'Computer spil med venner': Gamepad2,
    'Fitness træning': Dumbbell,
    'Airsoft i weekenderne': Target,
    'Sociale aktiviteter med venner': Heart
  }

  return (
      <section className="personal-info section">
        <h2 className="section-title">
          <User className="section-title-icon" />
          Mig som person
        </h2>

        <div className="personal-content">
          <div className="personal-description card">
          <h3 className="card-title">Personlighed & Tilgang</h3>
          <div className="card-content">
            <p className="description-text">{personalProfile.description}</p>
          </div>
        </div>

        <div className="interests-section card">
          <h3 className="card-title">
            <Coffee className="card-title-icon" />
            Mine interesser
          </h3>
          <div className="interests-grid">
            {personalProfile.interests.map((interest, index) => {
              const IconComponent = interestIcons[interest] || Heart
              return (
                <div key={index} className="interest-item">
                  <IconComponent className="interest-icon" size={20} />
                  <span className="interest-text">{interest}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="personal-highlights">
        <div className="highlight-item">
          <h4 className="highlight-title">Arbejdsform</h4>
          <p className="highlight-text">Trives både selvstændigt og i teams</p>
        </div>
        
        <div className="highlight-item">
          <h4 className="highlight-title">Motivation</h4>
          <p className="highlight-text">Stor passion for teknologi og innovation</p>
        </div>
        
        <div className="highlight-item">
          <h4 className="highlight-title">Tilgang</h4>
          <p className="highlight-text">Nysgerrig og lærer konstant nye teknologier</p>
        </div>
      </div>
    </section>
  )
}

export default PersonalInfo