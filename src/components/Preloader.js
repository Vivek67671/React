import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null;

  return (
    <div className="preloader-bg">
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
      <style>{`
        .preloader-bg {
          position: fixed;
          z-index: 9999;
          inset: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Animated gradient background */
          background: linear-gradient(270deg, #1e3c72, #2a5298, #6dd5ed, #2193b0, #6e45e2, #ee9ca7, #ffdde1, #1e3c72);
          background-size: 1600% 1600%;
          animation: gradientMove 8s ease-in-out infinite;
          transition: background 0.5s;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 100%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 0%; }
          100% { background-position: 0% 50%; }
        }
        .preloader-spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: spinnerFadeIn 1s;
        }
        @keyframes spinnerFadeIn {
          from { opacity: 0; transform: scale(0.8);}
          to { opacity: 1; transform: scale(1);}
        }
      `}</style>
    </div>
  );
};

export default Preloader;
