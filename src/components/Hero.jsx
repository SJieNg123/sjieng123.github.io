import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Top Left Tag */}
        <div className="hero-tag">
          <span className="monospace-text">&gt; Final Year CS student in NTHU</span>
        </div>

        {/* Center-Right Main Headline */}
        <div className="hero-headline-container">
          <h1 className="hero-name">Shi Jie Ng<span className="golden-star">★</span></h1>
          <h2 className="hero-subtitle">Building. Researching. Exploring.</h2>
          <p className="hero-description">
            I am a final year Computer Science student at NTHU,
            balancing my time between building scalable systems and researching privacy-preserving protocols,
            sometimes you can find me at badminton court or stock markets.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToNext}>
          <div className="golden-orb"></div>
          <ChevronDown className="scroll-arrow" />
          <span className="scroll-text monospace-text">Explore</span>
        </div>
      </div>

      {/* Floating Data Points */}
      <div className="floating-data-points">
        <div className="data-point" style={{ top: '20%', right: '15%' }}>
          <span className="data-label">Focus</span>
          <span className="data-value">Scalable Systems</span>
        </div>
        <div className="data-point" style={{ bottom: '30%', left: '10%' }}>
          <span className="data-label">Research</span>
          <span className="data-value">Privacy Tech</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;