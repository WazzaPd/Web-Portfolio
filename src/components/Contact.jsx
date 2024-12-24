// src/components/Contact.jsx
import React from 'react';
import '../css/Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>Interested in working together? Feel free to reach out!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" required />
        
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" rows="5" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
