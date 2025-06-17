import './style.css';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

// Lazy-load the App component
const App = lazy(() => import('./App'));

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

// Remove React DevTools in production
if (process.env.NODE_ENV === 'production') {
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
    for (const [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value === 'function' ? () => {} : null;
    }
  }
}

// Hydrate the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// Also force scroll to top after a short delay (handles async layout)
setTimeout(() => window.scrollTo(0, 0), 50);

// Configure the Development Server
module.exports = {
  // ...existing code...
  devServer: {
    historyApiFallback: true, // Ensures React routes are handled correctly
  },
};