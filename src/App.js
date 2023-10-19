
import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Bees from './components/bees life/Bees';
import Contact from './components/contact/ContactUs';

function App() {
  
  return (
    <div className="App">
      <nav className="navbar">
      <Hero />
        <ul class="navBar-links">
          <li><a href="#about"class="nav-link">About Us</a></li>
          <li><a href="#bees-life"class="nav-link">A Bee's Life</a></li>
          <li><a href="#contact-us"class="nav-link">Contact Us</a></li>
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



      <footer id="contact-us">
        <Contact/>
        {/* Your Contact Us content goes here */}
      </footer>
    </div>
  );
}

export default App;

