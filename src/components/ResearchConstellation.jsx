import React from 'react'

const research = [
  ['01', 'Privacy-preserving machine learning', 'Developing privacy-preserving machine learning (PPML) using secret sharing and secure multi-party computation (MPC).', 'Secret sharing / MPC'],
  ['02', 'SQLite cold-start optimization', 'Investigating SQLite cold-start behavior and optimizing the latency of the first query. Hopefully can be published in a paper soon!', 'Database performance / EA&B'],
  ['03', 'Oblivious UDR', 'Designing an oblivious access layer for the 5G core network, so the subscriber data store cannot learn whose record each request reads, even when the stored data is already encrypted.', '5G core / Access privacy']
]

const ResearchConstellation = () => (
  <section className="research-section section-shell" id="research" aria-labelledby="research-title">
    <div className="research-intro">
      <p className="eyebrow"><span className="section-number blue">03</span> Current research</p>
      <h2 id="research-title">Private.<br />Efficient.</h2>
      <p>Privacy-preserving learning, private 5G cores and faster database queries.</p>
      <div className="research-mark" aria-hidden="true"><span /><span /></div>
    </div>
    <ol className="research-list">
      {research.map(([number, title, description, category]) => (
        <li key={number}><span className="research-index" aria-hidden="true">{number}</span><div><p className="research-category">{category}</p><h3>{title}</h3><p className="research-description">{description}</p></div></li>
      ))}
    </ol>
  </section>
)

export default ResearchConstellation
