import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Contact = () => (
  <section className="contact-section" id="contact" aria-labelledby="contact-title">
    <div className="contact-copy">
      <p className="eyebrow">04 / Start a conversation</p>
      <h2 id="contact-title">Good things<br />start with <span>hello.</span></h2>
      <p>Projects, research, or a game of badminton.<br />I’m always open to a good conversation.</p>
      <a className="contact-email" href="mailto:shijie.jh@gmail.com">shijie.jh@gmail.com <ArrowUpRight aria-hidden="true" /></a>
    </div>
    <div className="contact-aside">
      <div className="contact-art" aria-hidden="true"><span /><ArrowUpRight strokeWidth={1.3} /></div>
      <div className="social-links">
        {[
          ['GitHub', 'https://github.com/SJieNg123'],
          ['LinkedIn', 'https://www.linkedin.com/in/shijieng0123/'],
          ['HackMD', 'https://hackmd.io/@sjng']
        ].map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        ))}
      </div>
    </div>
  </section>
)

export default Contact
