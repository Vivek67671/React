import React, { useState, useEffect } from 'react';
// import other necessary modules here, e.g.:
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark-mode class on body when darkMode state changes
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    console.log("Dark mode state:", darkMode); // debug log to verify state change
  }, [darkMode]);

  return (
    <nav>
      ...existing nav links...
      <button
        onClick={() => setDarkMode(prev => !prev)}
        style={{
          backgroundColor: darkMode ? '#333' : '#fff',
          color: darkMode ? '#fff' : '#000',
          border: '1px solid',
          borderColor: darkMode ? '#fff' : '#000',
          padding: '0.5rem 1rem',
          cursor: 'pointer'
        }}
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;

// This file can be deleted if not used anywhere.
// ...existing code...

