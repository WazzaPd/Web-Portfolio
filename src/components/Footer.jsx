// src/components/Footer.jsx
import React from 'react';
import '../css/Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Joseph Wu. All rights reserved.</p>
      <div className="footer-socials">
        <a 
          href="https://linkedin.com/in/wu-jose"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/wazzapd" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
