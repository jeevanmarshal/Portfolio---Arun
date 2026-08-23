import React from 'react';
import './Contact.css';
import { portfolioData } from '../data/portfolioData';
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const { email, phone, location, linkedin } = portfolioData.personal;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title reveal">Let's Connect</h2>
        
        <div className="contact-content reveal">
          <p className="contact-intro">
            I'm currently looking for new opportunities as a Frontend Developer. 
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          
          <div className="contact-cards">
            <a href={`mailto:${email}`} className="contact-card">
              <div className="contact-icon-wrapper">
                <FiMail className="contact-icon" />
              </div>
              <h3>Email</h3>
              <p>{email}</p>
            </a>
            
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-card">
              <div className="contact-icon-wrapper">
                <FiPhone className="contact-icon" />
              </div>
              <h3>Phone</h3>
              <p>{phone}</p>
            </a>
            
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <FiMapPin className="contact-icon" />
              </div>
              <h3>Location</h3>
              <p>{location}</p>
            </div>
            
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon-wrapper">
                <FiLinkedin className="contact-icon" />
              </div>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
