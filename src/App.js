
import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Bees from './components/bees life/Bees';

function App() {
  
  return (
    <div className="App">
      <nav className="navbar">
      <Hero />
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#bees-life">A Bee's Life</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>

    
      <section id="about">
        <About/>
        {/* Your About Us content goes here */}
      </section>
      <section id="bees-life">
        <Bees/>
        {/* Your A Bee's Life content goes here */}
      </section>
      <section id="contact-us">
        {/* Your Contact Us content goes here */}
      </section>
    </div>
  );
}

export default App;

