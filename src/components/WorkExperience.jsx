import React from 'react'

const projects = [
  {
    number: '01',
    title: 'NetZeroPro',
    description: 'A SaaS platform supporting low-carbon transformation.',
    contributions: ['Automated web crawlers', 'RAG-powered emission factor recommendations with hybrid vector and BM25 search', 'Bill OCR service']
  },
  {
    number: '02',
    title: 'ESG assessment platform',
    description: 'A questionnaire-based platform for ESG assessments.',
    contributions: ['User-facing questionnaires', 'Admin dashboard', 'Reports generated from assessment scores']
  }
]

const WorkExperience = () => (
  <section className="experience-section section-shell" id="experience" aria-labelledby="experience-title">
    <div className="section-heading">
      <p className="eyebrow"><span className="section-number yellow">02</span> Work experience</p>
      <h2 id="experience-title">Built in collaboration.</h2>
    </div>
    <div className="experience-layout">
      <div className="experience-company">
        <p className="collaboration-label">Development Collaboration</p>
        <h3>EuroCarbon<br />Technology Co., Ltd.</h3>
        <p className="company-description">Feature development for low-carbon transition and ESG digital platforms.</p>
        <div className="experience-mark" aria-hidden="true"><span /><span /></div>
      </div>
      <div className="experience-projects">
        {projects.map(project => (
          <article className="experience-project" key={project.number}>
            <span className="experience-index" aria-hidden="true">{project.number}</span>
            <div className="experience-project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul aria-label={project.title + ' contributions'}>
                {project.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default WorkExperience
