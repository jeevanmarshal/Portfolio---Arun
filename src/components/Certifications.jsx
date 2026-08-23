import React from 'react';
import './Certifications.css';
import { portfolioData } from '../data/portfolioData';
import { FiAward, FiCheckCircle } from 'react-icons/fi';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section cert-section">
      <div className="container">
        <h2 className="section-title reveal">Achievements & Certifications</h2>
        
        <div className="cert-grid reveal">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.id}>
              <div className="cert-bg-glow"></div>
              <div className="cert-content">
                <div className="cert-icon-wrapper">
                  <FiAward className="cert-icon" />
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                {cert.grade && (
                  <div className="cert-grade">
                    <FiCheckCircle className="grade-icon" />
                    <span>{cert.grade}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
