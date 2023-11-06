import React from "react";
import "./Sidebar.css"; // Create a separate CSS file for styling the sidebar

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li>
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            About Us
          </a>
        </li>
        <li>
          <a href="#bees-life" className="nav-link">
            A Bee's Life
          </a>
        </li>
        <li>
          <a href="#honey" className="nav-link">
            Our Honey
          </a>
        </li>
        <li>
          <a href="#contact-us" className="nav-link">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
