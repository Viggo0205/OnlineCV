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

function SkillsCarousel({ languages }) {
  return (
    <Carousel interval={5000} controls={true} indicators={false} pause={false}>
      {languages.map((langObj, idx) => {
        const logoSrc = logoMap[langObj.name] ? `${import.meta.env.BASE_URL}${logoMap[langObj.name]}` : null;
        return (
          <Carousel.Item key={langObj.name + '-' + idx}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '220px' }}>
              {logoSrc ? (
                <img src={logoSrc} alt={langObj.name + ' logo'} style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 16, borderRadius: '1rem', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
              ) : (
                <div style={{ width: 80, height: 80, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '1rem', marginBottom: 16 }}>?</div>
              )}
              <h4 style={{ color: '#2979ff', fontWeight: 600 }}>{langObj.name}</h4>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default SkillsCarousel;
