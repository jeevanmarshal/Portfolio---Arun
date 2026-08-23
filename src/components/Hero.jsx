import React from 'react';
import './Hero.css';
import { portfolioData } from '../data/portfolioData';
import { FiArrowRight, FiMail } from 'react-icons/fi';

const Hero = () => {
  const { name, role, intro } = portfolioData.personal;

  return (
    <section id="home" className="hero-section">
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content reveal active">
          <div className="badge">
            <span className="pulse"></span>
            Available for Frontend Roles
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">{name}</span>
          </h1>
          <h2 className="hero-subtitle">{role}</h2>
          
          <p className="hero-intro">{intro}</p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              Explore My Work <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me <FiMail />
            </a>
          </div>
        </div>

        {/* Visual Element Area */}
        <div className="hero-visual reveal active" style={{ transitionDelay: '0.2s' }}>
          <div className="code-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-content">
              <code>
                <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                <br/>
                &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"{name}"</span>,
                <br/>
                &nbsp;&nbsp;<span className="property">role</span>: <span className="string">"{role}"</span>,
                <br/>
                &nbsp;&nbsp;<span className="property">skills</span>: [<span className="string">"HTML"</span>, <span className="string">"CSS"</span>, <span className="string">"JavaScript"</span>],
                <br/>
                &nbsp;&nbsp;<span className="property">currentlyLearning</span>: <span className="string">"React"</span>
                <br/>
                {'}'};
              </code>
            </pre>
          </div>
          {/* Floating UI Elements */}
          <div className="floating-element html-badge">HTML5</div>
          <div className="floating-element css-badge">CSS3</div>
          <div className="floating-element react-badge">React</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
