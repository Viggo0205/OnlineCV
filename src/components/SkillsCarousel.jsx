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

import React, { useState } from 'react';

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function SkillsCarousel({ languages }) {
  const pageSize = 3;
  const slides = chunkArray(languages, pageSize);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ position: 'relative' }}>
      <Carousel
        interval={5000}
        controls={true}
        indicators={false}
        pause={false}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
        nextIcon={<span style={{ fontSize: 44, fontWeight: 700, marginLeft: '6rem', color: 'var(--carousel-arrow-color)' }}>&#8250;</span>}
        prevIcon={<span style={{ fontSize: 44, fontWeight: 700, marginRight: '6rem', color: 'var(--carousel-arrow-color)' }}>&#8249;</span>}
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={'slide-' + idx}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', minHeight: '220px' }}>
              {slide.map((langObj, langIdx) => {
                const logoSrc = logoMap[langObj.name] ? `${import.meta.env.BASE_URL}${logoMap[langObj.name]}` : null;
                return (
                  <div key={langObj.name + '-' + langIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: 120 }}>
                    {logoSrc ? (
                      <img src={logoSrc} alt={langObj.name + ' logo'} style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 16, borderRadius: '1rem', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
                    ) : (
                      <div style={{ width: 80, height: 80, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '1rem', marginBottom: 16 }}>?</div>
                    )}
                    <h4 style={{ color: '#2979ff', fontWeight: 600 }}>{langObj.name}</h4>
                  </div>
                );
              })}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 600, color: 'var(--carousel-arrow-color)' }}>
        {activeIndex + 1} / {slides.length}
      </div>
    </div>
  );
}

export default SkillsCarousel;
