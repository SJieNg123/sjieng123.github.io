import React from 'react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-subtitle">
            Open to collaboration on cryptography research, system architecture,
            and privacy-preserving technologies.
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:shijie.jh@gmail.com" className="contact-link">
            <div className="link-icon-wrapper">
              <Mail className="link-icon" />
            </div>
            <div className="link-content">
              <span className="link-label monospace-text">Email</span>
              <span className="link-value">shijie.jh@gmail.com</span>
            </div>
          </a>

          <a href="https://github.com/SJieNg123" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="link-icon-wrapper">
              <Github className="link-icon" />
            </div>
            <div className="link-content">
              <span className="link-label monospace-text">GitHub</span>
              <span className="link-value">@SJieNg123</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/shijieng0123/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="link-icon-wrapper">
              <Linkedin className="link-icon" />
            </div>
            <div className="link-content">
              <span className="link-label monospace-text">LinkedIn</span>
              <span className="link-value">/in/shijieng0123</span>
            </div>
          </a>

          <a href="https://hackmd.io/@sjng" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="link-icon-wrapper">
              <FileText className="link-icon" />
            </div>
            <div className="link-content">
              <span className="link-label monospace-text">HackMD</span>
              <span className="link-value">@sjng</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;