import React from 'react';
import './Skills.css';
import { portfolioData } from '../data/portfolioData';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFileWord, FaFileExcel, FaKeyboard } from 'react-icons/fa';

const iconMap = {
  "HTML5": <FaHtml5 color="#e34f26" />,
  "CSS3": <FaCss3Alt color="#1572b6" />,
  "JavaScript": <FaJs color="#f7df1e" />,
  "React.js": <FaReact color="#61dafb" />,
  "Microsoft Word": <FaFileWord color="#2b579a" />,
  "Microsoft Excel": <FaFileExcel color="#217346" />,
  "English Typewriting": <FaKeyboard color="#a1a1aa" />,
  "Tamil Typewriting": <FaKeyboard color="#a1a1aa" />
};

const Skills = () => {
  const { frontend, tools, other } = portfolioData.skills;

  const renderSkillCard = (skill, index) => (
    <div className={`skill-card ${skill.highlight ? 'highlight-card' : ''}`} key={index}>
      <div className="skill-icon">
        {iconMap[skill.name] || <FaKeyboard />}
      </div>
      <div className="skill-info">
        <h4 className="skill-name">{skill.name}</h4>
        {skill.note && <span className="skill-badge">{skill.note}</span>}
      </div>
    </div>
  );

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title reveal">My Skills</h2>
        
        <div className="skills-container reveal">
          <div className="skill-group">
            <h3 className="group-title">Frontend Development</h3>
            <div className="skill-grid">
              {frontend.map(renderSkillCard)}
            </div>
          </div>
          
          <div className="skill-group">
            <h3 className="group-title">Microsoft Office</h3>
            <div className="skill-grid">
              {tools.map(renderSkillCard)}
            </div>
          </div>
          
          <div className="skill-group">
            <h3 className="group-title">Other Skills</h3>
            <div className="skill-grid">
              {other.map(renderSkillCard)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
