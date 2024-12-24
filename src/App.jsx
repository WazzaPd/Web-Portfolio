import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <h1 className="logo">My Portfolio</h1>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="section about">
        <h2>About Me</h2>
        <p>Hi! I'm [Your Name], a passionate developer with expertise in React, JavaScript, and backend technologies. I love building scalable and modern web applications.</p>
      </section>

      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">My LinkedIn</a></p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 [Your Name]. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App
