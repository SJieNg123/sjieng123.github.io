import React from 'react';

const TechMarquee = () => {
  const technologies = [
    { name: 'C/C++', category: 'Language' },
    { name: 'Python', category: 'Language' },
    { name: 'JS/TS', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Firebase', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Git', category: 'DevOps' },
    { name: 'QEMU & VMware', category: 'Virtualization' },
    { name: 'Linux', category: 'OS' }
  ];

  return (
    <section className="tech-section">
      <div className="tech-header">
        <h2 className="section-title">Tech Stack</h2>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-content">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="tech-card">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-category monospace-text">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;