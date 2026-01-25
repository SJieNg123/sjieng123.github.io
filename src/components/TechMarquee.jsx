import React from 'react';

const TechMarquee = () => {
  const technologies = [
    { name: 'Rust', category: 'Language' },
    { name: 'C++', category: 'Language' },
    { name: 'Python', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Git', category: 'VCS' },
    { name: 'Linux', category: 'OS' }
  ];

  return (
    <section className="tech-section">
      <div className="tech-header">
        <h2 className="section-title">Technical Arsenal</h2>
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