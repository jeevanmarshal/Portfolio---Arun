import React from 'react';
import './About.css';
import { FiCode, FiLayout, FiFileText } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        
        <div className="about-content reveal">
          <div className="about-text-container">
            <p className="about-text">
              Hello! I'm a passionate <strong>Frontend Developer</strong> who enjoys creating clean and responsive web pages. 
              My journey in web development is driven by a deep curiosity for modern web design principles and a desire to build user-friendly experiences.
            </p>
            <p className="about-text">
              I have a solid foundation in <strong>HTML5, CSS3, and JavaScript</strong>, and I am currently focusing on expanding my skills by <strong>learning React</strong>. 
              I love the process of translating creative ideas into interactive, functional, and visually appealing web interfaces.
            </p>
            <p className="about-text">
              Beyond coding, I possess strong documentation and data handling skills, backed by proficiency in MS Office tools and advanced typewriting capabilities in both English and Tamil. This blend of technical knowledge and attention to detail enables me to approach projects methodically and efficiently.
            </p>
          </div>
          
          <div className="about-cards">
            <div className="about-card">
              <div className="card-icon"><FiCode /></div>
              <h3>Web Development</h3>
              <p>Building responsive and interactive web applications using modern web technologies.</p>
            </div>
            
            <div className="about-card">
              <div className="card-icon"><FiLayout /></div>
              <h3>UI/UX Focus</h3>
              <p>Dedicated to clean design principles and ensuring seamless user experiences.</p>
            </div>
            
            <div className="about-card">
              <div className="card-icon"><FiFileText /></div>
              <h3>Data & Documentation</h3>
              <p>Proficient in MS Office suite and skilled in fast, accurate typewriting for efficient data entry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
