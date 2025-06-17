import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Close nav when clicking outside or when a link is chosen
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navOpen && navRef.current && toggleRef.current) {
        if (!navRef.current.contains(e.target) && !toggleRef.current.contains(e.target)) {
          setNavOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [navOpen]);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  const handleNavToggle = () => {
    setNavOpen((prev) => !prev);
  };

  // Function to close nav when an option is clicked
  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 }}
    >
      <button
        ref={toggleRef}
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
        ref={navRef}
        aria-label="Main Navigation"
        className={navOpen ? 'nav-open' : ''}
        style={{ display: navOpen ? 'block' : 'none' }}
      >
        <a
          href="#hero"
          title="Homepage"
          aria-label="Navigate to Homepage"
          onClick={(e) => {
            e.preventDefault();
            // Scroll the document root into view so that the page fully scrolls to top
            document.documentElement.scrollIntoView({ behavior: 'smooth' });
            closeNav();
          }}
        >
          Home
        </a>
        <a href="#about-us" title="About" aria-label="Learn more about us" onClick={closeNav}>About</a>
        <a href="#services" title="Services" aria-label="View our services" onClick={closeNav}>Services</a>
        <a href="#latest-projects" title="Case Studies" aria-label="See our case studies" onClick={closeNav}>Case Studies</a>
        <a href="#gallery" title="Gallery" aria-label="View our gallery" onClick={closeNav}>Gallery</a>
        <a href="#contact-us" title="Contact" aria-label="Get in touch" onClick={closeNav}>Contact</a>
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
          <span className="dark-mode-text" id="darkModeText">
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </span>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
