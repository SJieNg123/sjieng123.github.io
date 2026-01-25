import React, { useEffect, useRef, useState } from 'react';
import { Users, Code, Star } from 'lucide-react';

const NTHUMods = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check visibility
      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsVisible(true);
        
        // Calculate scroll progress through this section
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight + rect.height)
        ));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="nthumulds-section">
      <div className="nthumulds-container">
        {/* Left Content Block */}
        <div className={`nthumulds-content ${isVisible ? 'visible' : ''}`}>
          <div className="project-badge">
            <Star className="badge-icon" />
            <span className="monospace-text">FEATURED PROJECT</span>
          </div>
          
          <h2 className="project-title">NTHUMods</h2>
          <p className="project-description">
            A comprehensive course planning and management system serving the entire
            National Tsing Hua University community. Architected for scale, security,
            and seamless user experience.
          </p>

          {/* Glowing Metric */}
          <div className="metric-highlight">
            <div className="metric-glow"></div>
            <span className="metric-number">41,000+</span>
            <span className="metric-label">Active Users</span>
          </div>

          {/* Additional Stats */}
          <div className="stats-grid">
            <div className="stat-item">
              <Users className="stat-icon" />
              <div>
                <div className="stat-value">15K+</div>
                <div className="stat-label">Monthly Active</div>
              </div>
            </div>
            <div className="stat-item">
              <Code className="stat-icon" />
              <div>
                <div className="stat-value">50K+</div>
                <div className="stat-label">Lines of Code</div>
              </div>
            </div>
          </div>

          {/* Tech Tags */}
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">Redis</span>
          </div>
        </div>

        {/* Right Screenshot with Parallax */}
        <div 
          className={`nthumulds-visual ${isVisible ? 'visible' : ''}`}
          style={{
            transform: `translateY(${scrollProgress * -50}px) rotate(${2 - scrollProgress * 4}deg)`
          }}
        >
          <div className="screenshot-frame">
            <div className="screenshot-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-header">
                  <div className="placeholder-logo">NTHU</div>
                  <div className="placeholder-nav">
                    <div className="nav-item"></div>
                    <div className="nav-item"></div>
                    <div className="nav-item"></div>
                  </div>
                </div>
                <div className="placeholder-hero">
                  <div className="hero-text"></div>
                  <div className="hero-text short"></div>
                </div>
                <div className="placeholder-grid">
                  <div className="grid-card"></div>
                  <div className="grid-card"></div>
                  <div className="grid-card"></div>
                  <div className="grid-card"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connecting Lines */}
          <svg className="connection-lines" viewBox="0 0 400 400">
            <path
              d="M 50 200 Q 200 100 350 200"
              className="connection-path"
              strokeDasharray="1000"
              strokeDashoffset={1000 - (scrollProgress * 1000)}
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default NTHUMods;