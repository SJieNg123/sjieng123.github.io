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
          <span className="monospace-text">&gt; Incoming MS in Cryptography</span>
        </div>

        {/* Center-Right Main Headline */}
        <div className="hero-headline-container">
          <h1 className="hero-name">Shi Jie Ng<span className="golden-star">★</span></h1>
          <h2 className="hero-subtitle">Architecting Secure Systems</h2>
          <p className="hero-description">
            Building privacy-preserving protocols at the intersection of cryptography,
            systems architecture, and distributed computing.
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
          <span className="data-value">Zero-Knowledge</span>
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