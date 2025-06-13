import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  const handleNavToggle = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 }}
    >
      <button
        className="nav-toggle"
        aria-label="Open navigation"
        aria-controls="main-nav"
        aria-expanded={navOpen}
        onClick={handleNavToggle}
      >
        <span className="hamburger">
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </span>
      </button>

      <nav
        id="main-nav"
        aria-label="Main Navigation"
        className={navOpen ? 'nav-open' : ''}
        style={{ display: navOpen ? 'block' : 'none' }}
      >
        <a href="#hero" title="Homepage" aria-label="Navigate to Homepage">Home</a>
        <a href="#about-us" title="About" aria-label="Learn more about us">About</a>
        <a href="#services" title="Services" aria-label="View our services">Services</a>
        <a href="#latest-projects" title="Case Studies" aria-label="See our case studies">Case Studies</a>
        <a href="#gallery" title="Gallery" aria-label="View our gallery">Gallery</a>
        <a href="#contact-us" title="Contact" aria-label="Get in touch">Contact</a>
        <div className="dark-mode-container">
          <label className="switch" htmlFor="darkModeToggle" aria-labelledby="darkModeText">
            <input
              type="checkbox"
              id="darkModeToggle"
              aria-labelledby="darkModeText"
              role="switch"
              checked={darkMode}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
          <span className="dark-mode-text" id="darkModeText">Toggle for Dark Mode</span>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
