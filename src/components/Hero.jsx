import React from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const SLICE_COUNT = 6

const heroName = <>Shi Jie<br />Ng<span className="hero-period">.</span></>

// Each slice is a full copy of the name clipped to one horizontal band.
// The outer bands extend past the box so ascenders and descenders stay visible.
const sliceClip = index => {
  const band = 100 / SLICE_COUNT
  const top = index === 0 ? '-30%' : `${index * band}%`
  const bottom = index === SLICE_COUNT - 1 ? '-30%' : `${100 - (index + 1) * band}%`
  return `inset(${top} -10% ${bottom} -10%)`
}

const Hero = () => (
  <section className="hero-section" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-square" aria-hidden="true" /> Information security / NTHU</p>
      <h1 id="hero-title" className="hero-name">
        <span className="hero-name-base">{heroName}</span>
        <span className="hero-slices" aria-hidden="true">
          {Array.from({ length: SLICE_COUNT }, (_, index) => (
            <span className="hero-slice" key={index} style={{ clipPath: sliceClip(index) }}>{heroName}</span>
          ))}
        </span>
      </h1>
      <p className="hero-statement">Building systems.<br />Researching privacy.<br /><span>Exploring what’s next.</span></p>
      <p className="hero-description">
        I’m a master’s student at NTHU’s Institute of Information Security, advised by Te-Chuan Chiu at{' '}
        <a className="inline-link" href="https://theochiu.wixsite.com/nthucs/acelab" target="_blank" rel="noopener noreferrer">ACE Lab <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>.
        {' '}With a bachelor’s degree in Computer Science, I research privacy-preserving machine learning and database performance optimization.
      </p>
      <div className="hero-actions">
        <a className="button button-dark" href="#work">Explore my work <ArrowDown size={18} aria-hidden="true" /></a>
        <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></a>
      </div>
    </div>
    <div className="hero-art">
      <div className="art-caption"><span>FORM / FUNCTION</span><span>01 — 04</span></div>
      <svg className="geometry-composition" viewBox="0 0 520 520" aria-hidden="true" focusable="false">
        <path d="M260 0v520M0 260h520" className="art-grid" />
        {/* data-slot is each shape's starting quadrant, clockwise from top left. */}
        <g className="geometry-slot" data-slot="0">
          <circle className="geometry-shape" cx="130" cy="130" r="116" fill="var(--red)" />
        </g>
        <g className="geometry-slot" data-slot="1">
          <path className="geometry-shape" d="M278 242L390 18l112 224Z" fill="var(--yellow)" />
        </g>
        <g className="geometry-slot" data-slot="3">
          <path className="geometry-shape" d="M18 278h224v224H18Z" fill="var(--blue)" />
        </g>
        <g className="geometry-slot" data-slot="2">
          <g className="geometry-shape">
            <path d="M278 278a224 224 0 0 1 224 224H278Z" fill="var(--ink)" />
            <circle cx="390" cy="390" r="50" fill="var(--paper)" />
          </g>
        </g>
      </svg>
      <div className="art-legend" aria-hidden="true"><span><i className="legend-shape circle" /> Build</span><span><i className="legend-shape square" /> Research</span><span><i className="legend-shape triangle" /> Work</span><span><i className="legend-shape quarter" /> Explore</span></div>
    </div>
    <div className="hero-footnote"><span>Engineering with intention.</span><span>Scroll to explore <ArrowDown size={14} aria-hidden="true" /></span></div>
  </section>
)

export default Hero
