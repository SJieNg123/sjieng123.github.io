import React from 'react'

const groups = [
  { title: 'Languages', number: '01', tools: ['C / C++', 'Python', 'JavaScript', 'TypeScript'] },
  { title: 'Web & cloud', number: '02', tools: ['React', 'Node.js', 'Vercel', 'AWS'] },
  { title: 'Systems & tools', number: '03', tools: ['Docker', 'Git', 'Linux', 'VirtualBox', 'VMware'] }
]

const TechMarquee = () => (
  <section className="toolkit-section section-shell" id="toolkit" aria-labelledby="toolkit-title">
    <div className="section-heading"><p className="eyebrow"><span className="section-number yellow">04</span> The toolkit</p><h2 id="toolkit-title">The right tools.<br />For the right problems.</h2></div>
    <div className="toolkit-grid">
      {groups.map(group => (
        <div className="toolkit-group" key={group.number}>
          <div className="toolkit-label"><span>{group.number}</span><span className={'toolkit-shape shape-' + group.number} aria-hidden="true" /></div>
          <h3>{group.title}</h3><ul>{group.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
        </div>
      ))}
    </div>
  </section>
)

export default TechMarquee
