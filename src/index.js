import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Enable smooth scroll for all browsers
if ('scrollBehavior' in document.documentElement.style) {
  document.documentElement.style.scrollBehavior = 'smooth';
}

// Prevent browser from restoring scroll position on reload
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// Force scroll to top before React renders (handles refresh and navigation)
window.scrollTo(0, 0);

// Hydrate the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Also force scroll to top after a short delay (handles async layout)
setTimeout(() => window.scrollTo(0, 0), 50);
