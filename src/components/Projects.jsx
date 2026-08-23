import React from 'react';
import './Projects.css';
import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title reveal">My Projects</h2>
        
        <div className="projects-grid reveal">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <div className="project-placeholder">
                  <div className="placeholder-content">
                    <span className="project-type-badge">{project.type}</span>
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span className="tech-badge" key={idx}>{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiGithub /> GitHub
                    </a>
                  ) : (
                    <span className="project-link disabled" title="Link to be provided">
                      <FiGithub /> GitHub (Soon)
                    </span>
                  )}
                  
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiExternalLink /> Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
