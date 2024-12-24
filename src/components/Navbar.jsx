import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrollPosition > 50 ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-logo">MyPortfolio</div>
      <div className="navbar-icon" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#hero" onClick={toggleMobileMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
        <li><a href="#skills" onClick={toggleMobileMenu}>Skills</a></li>
        <li><a href="#projects" onClick={toggleMobileMenu}>Projects</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;