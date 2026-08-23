import React from 'react';
import './Footer.css';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearToDisplay = Math.max(currentYear, 2026); // Ensure it says at least 2026 based on requirements
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {yearToDisplay} {portfolioData.personal.name}</p>
        <div className="footer-links">
          <a href="#home">Back to Top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
