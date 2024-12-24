import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    if (window.location.hash) {
      requestAnimationFrame(() => {
        window.history.replaceState(null, '', window.location.pathname);
        window.scrollTo(0, 0);
      });
    }
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;