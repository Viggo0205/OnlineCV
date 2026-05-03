import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const logoMap = {
  'C#': 'CSharpLogo.png',
  'SQL': 'SQLLogo.png',
  'Java': 'Javalogo.png',
  'JavaScript': 'JavaScriptLogo.png',
  'Python': 'PythonLogo.png',
  'HTML': 'HTMLLogo.webp',
  'Matlab': 'MatLabLogo.png',
  'C++': 'C++logo.png',
  'R': 'RLogo.png',
  'C': 'CLogo.png',
};

import React, { useEffect, useState } from 'react';

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function SkillsCarousel({ languages }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageSize, setPageSize] = useState(window.innerWidth < 768 ? 1 : 3);

  useEffect(() => {
    const handleResize = () => {
      const newPageSize = window.innerWidth < 768 ? 1 : 3;
      if (newPageSize !== pageSize) {
        setPageSize(newPageSize);
        setActiveIndex(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pageSize]);

  const slides = chunkArray(languages, pageSize);

  return (
    <div className="skills-carousel-frame">
      <div className="skills-carousel-surface">
        <Carousel
          className="skills-carousel-track"
          interval={5000}
          controls={slides.length > 1}
          indicators={false}
          pause={false}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          nextIcon={<span className="skills-carousel-control-icon" aria-hidden="true">&#8250;</span>}
          prevIcon={<span className="skills-carousel-control-icon" aria-hidden="true">&#8249;</span>}
        >
          {slides.map((slide, idx) => (
            <Carousel.Item key={'slide-' + idx}>
              <div className={`skills-carousel-grid${pageSize === 1 ? ' is-single' : ''}`}>
                {slide.map((langObj, langIdx) => {
                  const logoSrc = logoMap[langObj.name] ? `${import.meta.env.BASE_URL}${logoMap[langObj.name]}` : null;
                  return (
                    <article key={langObj.name + '-' + langIdx} className="skills-language-card">
                      <div className="skills-language-logo-shell">
                        {logoSrc ? (
                          <img src={logoSrc} alt={langObj.name + ' logo'} className="skills-language-logo" />
                        ) : (
                          <div className="skills-language-logo-fallback">{langObj.name.slice(0, 1)}</div>
                        )}
                      </div>
                      <div className="skills-language-meta">
                        <p className="skills-language-eyebrow">Language</p>
                        <h4 className="skills-language-name">{langObj.name}</h4>
                      </div>
                    </article>
                  );
                })}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="skills-carousel-footer">
          <div className="skills-carousel-page-counter">
            <span>{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="skills-carousel-page-separator">/</span>
            <span>{String(slides.length).padStart(2, '0')}</span>
          </div>
          <div className="skills-carousel-dots" role="tablist" aria-label="Programming language slides">
            {slides.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                className={`skills-carousel-dot${index === activeIndex ? ' is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsCarousel;
