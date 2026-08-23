import React from 'react';
import './Education.css';
import { portfolioData } from '../data/portfolioData';
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title reveal">Education Journey</h2>
        
        <div className="timeline reveal">
          {education.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={item.id}>
              <div className="timeline-node">
                <FiBookOpen />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="degree">{item.degree}</h3>
                  <span className="period">
                    <FiCalendar className="icon" /> {item.period}
                  </span>
                </div>
                
                <h4 className="institution">{item.institution}</h4>
                {item.college && item.college !== item.institution && (
                  <p className="college">{item.college}</p>
                )}
                
                <p className="location">
                  <FiMapPin className="icon" /> {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
