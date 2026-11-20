import React, { useRef } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'
import Hero from '../components/Hero'
import NTHUMods from '../components/NTHUMods'
import WorkExperience from '../components/WorkExperience'
import ResearchConstellation from '../components/ResearchConstellation'
import TechMarquee from '../components/TechMarquee'
import Contact from '../components/Contact'
import { usePortfolioMotion } from '../hooks/use-portfolio-motion'
import '../styles/portfolio.css'

const Home = () => {
  const rootRef = useRef(null)
  usePortfolioMotion(rootRef)

  return (
    <div className="portfolio" id="top" ref={rootRef}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wordmark"><span className="brand-symbol" aria-hidden="true" /><span>SHI JIE NG<span className="wordmark-dot">.</span></span></div>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Projects</a><a href="#experience">Work Experience</a><a href="#research">Research</a><a href="#toolkit">Toolkit</a>
          <a className="nav-contact" href="#contact">Get in touch <ArrowDown size={16} aria-hidden="true" /></a>
        </nav>
      </header>
      <main id="main" tabIndex={-1}><Hero /><NTHUMods /><WorkExperience /><ResearchConstellation /><TechMarquee /><Contact /></main>
      <footer className="site-footer">
        <p>Built with purpose. Always exploring.</p>
        <div className="footer-end"><span>© {new Date().getFullYear()} Shi Jie Ng</span><a href="#top" className="back-top">Back to top <ArrowUp size={16} aria-hidden="true" /></a></div>
      </footer>
    </div>
  )
}

export default Home
