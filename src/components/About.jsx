// src/components/About.jsx
import React from 'react';
import '../css/About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>
        I'm a software developer specializing in building and maintaining server-side logic.  
        I enjoy optimizing performance, designing schemas, and building reliable backend systems.  
        When I'm not coding, you’ll find me rock climbing or working on DIY projects at home.  

      </p>
      <div className="about-timeline">
        <div className="timeline-item">
          <h3>2023 - Present</h3>
          <p>Student at Stony Brook University</p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
