import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const NTHUMods = () => (
  <section className="work-section section-shell" id="work" aria-labelledby="work-title">
    <div className="section-heading"><p className="eyebrow"><span className="section-number red">01</span> Selected work</p><h2 id="work-title">Built for people.</h2></div>
    <article className="project-layout">
      <div className="project-poster" aria-label="NTHUMods, course planning and management">
        <div className="poster-top"><span>FEATURED PROJECT</span><span>01 / NTHU</span></div>
        <div className="poster-type">NTHU<br /><span>Mods</span><span className="poster-period">.</span></div>
        <div className="poster-shapes" aria-hidden="true"><span /><span /><span /></div>
        <div className="poster-bottom"><span>COURSES. PLANNED.</span><ArrowUpRight size={32} aria-hidden="true" /></div>
      </div>
      <div className="project-copy">
        <p className="eyebrow">Web application / Education</p><h3>NTHUMods</h3>
        <p>A course planning and management platform for the National Tsing Hua University community. Built to make navigating university life a little simpler.</p>
        <p>Bringing scalable systems and thoughtful interfaces together in a tool students use every day.</p>
        <dl className="project-metrics"><div><dt>Active users</dt><dd>41,000<span>+</span></dd></div><div><dt>Monthly active</dt><dd>15K<span>+</span></dd></div></dl>
        <ul className="tech-tags" aria-label="Project technologies"><li>React</li><li>Node.js</li><li>Supabase</li></ul>
        <div className="project-links">
          <a className="text-link" href="https://nthumods.com/today" target="_blank" rel="noopener noreferrer">Visit us <ArrowUpRight size={19} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          <a className="text-link" href="https://github.com/nthumodifications/courseweb" target="_blank" rel="noopener noreferrer">Explore the source <ArrowUpRight size={19} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </div>
    </article>
  </section>
)

export default NTHUMods
