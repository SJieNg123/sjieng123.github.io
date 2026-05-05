import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import NTHUMods from '../components/NTHUMods';
import ResearchConstellation from '../components/ResearchConstellation';
import TechMarquee from '../components/TechMarquee';
import Contact from '../components/Contact';
import Kirby from '../components/Kirby';
import Particles from '../components/Particles';
import '../styles/portfolio.css';

const PARTICLE_COLORS = ['#ffffff'];

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Track mouse position
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="portfolio-container">
      {/* Animated Background */}
      <div className="ambient-background">
        <div className="cosmic-gradient"></div>
        <div className="particles-layer">
          <Particles
            particleColors={PARTICLE_COLORS}
            particleCount={1000}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
      </div>

      {/* Content */}
      <main className="portfolio-content">
        <Hero />
        <NTHUMods />
        <ResearchConstellation mousePosition={mousePosition} />
        <TechMarquee />
        <Contact />
        
        <footer className="portfolio-footer">
          <p className="footer-text">© 2025 Shi Jie Ng. Securing the Future.</p>
        </footer>
      </main>

      {/* Kirby Animation */}
      <Kirby />
    </div>
  );
};

export default Home;