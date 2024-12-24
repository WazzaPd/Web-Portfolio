// src/components/Skills.jsx
import React from 'react';
import '../css/Skills.css';

// Import icons from Font Awesome (fa) via react-icons
import {
  FaJava,
  FaPhp,
  FaCuttlefish,
  FaJsSquare,
  FaPython,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';

function Skills() {
  // Updated skills array with Font Awesome icons
  const skills = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'C', icon: <FaCuttlefish /> }, // FaCuttlefish resembles 'C'
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'MongoDB', icon: <FaDatabase /> }, // Using same icon for databases
    { name: 'React', icon: <FaReact /> },
    { name: 'Express', icon: <FaNodeJs /> }, // FaNodeJs as Express alternative
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
