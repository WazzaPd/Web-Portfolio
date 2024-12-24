// Hero.jsx
import React from 'react';
import '../css/Hero.css';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Hello, I'm Joseph Wu</h1>
          <p>A Back-End Developer and Systems Enthusiast</p>
          <a href="#projects" className="hero-button">See My Work</a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
