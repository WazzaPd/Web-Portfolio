// src/components/Projects.jsx
import React from 'react';
import '../css/Projects.css';
import { motion } from 'framer-motion';
import projectOneImage from '../assets/phreddit.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Phreddit',
      description: 'Full-stack social media platform inspired by Reddit, enabling users to create accounts, post content, comment, upvote/downvote, and join communities.',
      image: projectOneImage,
      gitlink: 'https://github.com/WazzaPd/Phreddit',
      link: 'https://phreddit-deployment-frontend.onrender.com/'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Description',
      image: 'https://via.placeholder.com/300x200',
      gitlink: 'https://github.com/example/project-two',
      link: 'https://github.com/example/project-one'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Full-stack app with React, Express, and MongoDB.',
      image: 'https://via.placeholder.com/300x200',
      gitlink: 'https://github.com/example/project-three',
      link: 'https://github.com/example/project-one'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View on Website
              </a>
              <br></br>
              <a 
                href={project.gitlink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
