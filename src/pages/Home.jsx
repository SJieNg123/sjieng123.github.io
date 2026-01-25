import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import NTHUMods from '../components/NTHUMods';
import ResearchConstellation from '../components/ResearchConstellation';
import TechMarquee from '../components/TechMarquee';
import Contact from '../components/Contact';
import Kirby from '../components/Kirby';
import '../styles/portfolio.css';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3
    }));
    setStars(generatedStars);

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
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
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