import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="logo-animation">
          <svg viewBox="0 0 200 200" width="200" height="200" aria-label="Grays-Scale Logo Preloader">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#005fcc", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#00a2ff", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle className="path" cx="100" cy="100" r="70" fill="none" stroke="url(#gradient)" strokeWidth="4" />
            <text className="logo-text" x="100" y="120" textAnchor="middle" fill="#ffffff"
              style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 48, fontWeight: 900 }}>GS</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
