import { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const logoMap = {
  'C#': 'CSharpLogo.png',
  SQL: 'SQLLogo.png',
  PostgreSQL: 'SQLLogo.png',
  Java: 'Javalogo.png',
  JavaScript: 'JavaScriptLogo.png',
  'HTML/CSS': 'HTMLLogo.webp',
  HTML: 'HTMLLogo.webp',
  Matlab: 'MatLabLogo.png',
  'C++': 'C++logo.png',
  R: 'RLogo.png',
  C: 'CLogo.png',
};

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function SkillsCarousel({ languages, lang = 'da' }) {
  const frameRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageSize, setPageSize] = useState(() => (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3));
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const slides = chunkArray(languages, pageSize);
  const slideCount = slides.length;
  const activeSlide = slides[activeIndex] ?? [];

  useEffect(() => {
    const node = frameRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '120px 0px', threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newPageSize = window.innerWidth < 768 ? 1 : 3;
      setPageSize((current) => {
        if (current !== newPageSize) {
          setActiveIndex(0);
          return newPageSize;
        }
        return current;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, Math.max(slideCount - 1, 0)));
  }, [slideCount]);

  const goTo = useCallback((index) => {
    if (slideCount === 0) {
      return;
    }
    const nextIndex = (index + slideCount) % slideCount;
    setActiveIndex(nextIndex);
  }, [slideCount]);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  const handleTouchStart = useCallback((event) => {
    event.currentTarget.dataset.touchStart = String(event.changedTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback((event) => {
    const startX = Number(event.currentTarget.dataset.touchStart || 0);
    const delta = event.changedTouches[0].clientX - startX;

    if (Math.abs(delta) < 48) {
      return;
    }

    if (delta < 0) {
      goNext();
    } else {
      goPrev();
    }
  }, [goNext, goPrev]);

  useEffect(() => {
    if (slideCount <= 1 || isPaused || !isVisible) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [slideCount, isPaused, isVisible, pageSize]);

  return (
    <div
      ref={frameRef}
      className="skills-carousel-frame"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="skills-carousel-surface">
        <div className="skills-carousel-viewport">
          {slideCount > 1 && (
            <button
              type="button"
              className="skills-carousel-nav skills-carousel-nav-prev"
              onClick={goPrev}
              aria-label={lang === 'da' ? 'Forrige sprog' : 'Previous languages'}
            >
              <ChevronLeft size={22} strokeWidth={2.25} />
            </button>
          )}

          <div
            className="skills-carousel-stage"
            aria-live="polite"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className={`skills-carousel-grid${pageSize === 1 ? ' is-single' : ''}`}>
              {activeSlide.map((langObj) => {
                const logoFile = logoMap[langObj.name];
                const logoSrc = logoFile ? `${import.meta.env.BASE_URL}${logoFile}` : null;

                return (
                  <article key={langObj.name} className="skills-language-card">
                    <div className="skills-language-logo-shell">
                      {logoSrc ? (
                        <img
                          src={logoSrc}
                          alt=""
                          className="skills-language-logo"
                          width="76"
                          height="76"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="skills-language-logo-fallback" aria-hidden="true">
                          {langObj.name.slice(0, 1)}
                        </div>
                      )}
                    </div>

                    <div className="skills-language-meta">
                      <h4 className="skills-language-name">{langObj.name}</h4>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {slideCount > 1 && (
            <button
              type="button"
              className="skills-carousel-nav skills-carousel-nav-next"
              onClick={goNext}
              aria-label={lang === 'da' ? 'Næste sprog' : 'Next languages'}
            >
              <ChevronRight size={22} strokeWidth={2.25} />
            </button>
          )}
        </div>

        {slideCount > 1 && (
          <div className="skills-carousel-footer">
            <div className="skills-carousel-page-counter">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="skills-carousel-page-separator">/</span>
              <span>{String(slideCount).padStart(2, '0')}</span>
            </div>
            <div className="skills-carousel-dots" role="tablist" aria-label={lang === 'da' ? 'Sprog slides' : 'Language slides'}>
              {slides.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  className={`skills-carousel-dot${index === activeIndex ? ' is-active' : ''}`}
                  onClick={() => goTo(index)}
                  aria-label={lang === 'da' ? `Vis slide ${index + 1}` : `Show slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SkillsCarousel;
