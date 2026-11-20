import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const NTHUMods = () => (
  <section className="work-section section-shell" id="work" aria-labelledby="work-title">
    <div className="section-heading"><p className="eyebrow"><span className="section-number red">01</span> Some projects</p><h2 id="work-title">Built for people.</h2></div>
    <article className="project-layout">
      <div className="project-poster" aria-label="NTHUMods, course planning and management">
        <div className="poster-top"><span>FEATURED PROJECT</span><span>01 / NTHU</span></div>
        <div className="poster-type">NTHU<br /><span>Mods</span><span className="poster-period">.</span></div>
        <div className="poster-shapes" aria-hidden="true"><span /><span /><span /></div>
        <div className="poster-bottom"><span>COURSES. PLANNED.</span></div>
      </div>
      <div className="project-copy">
        <p className="eyebrow">Web application / Education</p><h3>NTHUMods</h3>
        <p>A course planning and management platform for the National Tsing Hua University community, bringing scalable systems and thoughtful interfaces to everyday student life.</p>
        <div className="project-stats">
          <p className="project-metrics-period" id="nthumods-metrics-period">Oct 2024 – Nov 2026</p>
          <dl className="project-metrics" aria-describedby="nthumods-metrics-period">
            <div><dt>Total users</dt><dd>83<span>K</span></dd></div>
            <div><dt>Users · last 30 days</dt><dd>12<span>K</span></dd></div>
            <div><dt>Total views</dt><dd>3.9<span>M</span></dd></div>
          </dl>
        </div>
        <ul className="tech-tags" aria-label="Project technologies"><li>React</li><li>Node.js</li><li>Supabase</li></ul>
        <div className="project-links">
          <a className="text-link" href="https://nthumods.com/today" target="_blank" rel="noopener noreferrer">Visit us <ArrowUpRight size={19} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          <a className="text-link" href="https://github.com/nthumodifications/courseweb" target="_blank" rel="noopener noreferrer">Explore the source <ArrowUpRight size={19} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </div>
    </article>
    <article className="project-layout">
      <div className="project-poster project-poster--ocean" aria-label="NTHU Climate Atlas, ocean natural capital map">
        <div className="poster-top"><span>FEATURED PROJECT</span><span>02 / NTHU</span></div>
        <div className="poster-type">NTHU<br />Climate<br /><span>Atlas</span><span className="poster-period">.</span></div>
        <div className="poster-shapes" aria-hidden="true"><span /><span /><span /></div>
        <div className="poster-bottom"><span>OCEANS. MAPPED.</span></div>
      </div>
      <div className="project-copy">
        <p className="eyebrow">Data platform / Sustainability</p><h3>NTHU Climate Atlas</h3>
        <p>A natural capital database for Taiwan's ocean, built for the NTHU College of Sustainability. It maps 19 marine natural capital layers and scores any coordinate by averaging the grid within a 500 m radius, with a reviewed request flow for downloading the source data.</p>
        <ul className="tech-tags" aria-label="Project technologies"><li>React</li><li>MapLibre</li><li>FastAPI</li><li>Supabase</li></ul>
        <div className="project-links">
          <a className="text-link" href="https://nthu-climate-atlas.vercel.app/" target="_blank" rel="noopener noreferrer">Visit us <ArrowUpRight size={19} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </div>
    </article>
  </section>
)

export default NTHUMods
