import React from 'react';

const LoadMoreButton = ({ onClick, disabled }) => (
  <div className="load-more-btn-container" style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: '2rem 0 0 0',
    zIndex: 2,
    position: 'relative'
  }}>
    <button
      onClick={onClick}
      disabled={disabled}
      className="load-more-btn"
      style={{
        padding: '1em 3.5em',
        fontSize: '1.2rem',
        borderRadius: '999px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        fontWeight: 700,
        letterSpacing: '1px',
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.15)',
        transition: 'background 0.2s, color 0.2s',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75em',
        marginTop: '3em',
      }}
    >
      <span className="load-more-text" style={{ display: 'inline-block', transition: 'color 0.2s' }}>
        Load More
      </span>
      <span style={{ display: 'inline-block', position: 'relative', width: '1.5em', height: '1.5em' }}>
        <svg
          className="marquee-arrow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            margin: 'auto',
            top: 0,
            bottom: 0
          }}
        >
          <path d="M12 5v14M12 19l-5-5M12 19l5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <style>{`
          .load-more-btn {
            background: #111;
            color: #fff;
          }
          .marquee-arrow {
            animation: marquee-arrow-down 1.2s linear infinite;
            transition: stroke 0.2s;
          }
          @keyframes marquee-arrow-down {
            0% {
              opacity: 0;
              transform: translateY(-100%);
            }
            10% {
              opacity: 1;
              transform: translateY(0%);
            }
            90% {
              opacity: 1;
              transform: translateY(0%);
            }
            100% {
              opacity: 0;
              transform: translateY(100%);
            }
          }
          .load-more-btn:hover:not(:disabled) .load-more-text {
            color: #FFD600 !important;
          }
          .load-more-btn:hover:not(:disabled) .marquee-arrow path {
            stroke: #FFD600 !important;
          }
          body.dark-mode .load-more-btn {
            background: #fff !important;
            color: #2563eb !important;
          }
          body.dark-mode .load-more-btn .load-more-text {
            color: #2563eb !important;
          }
          body.dark-mode .load-more-btn .marquee-arrow path {
            stroke: #2563eb !important;
          }
          body.dark-mode .load-more-btn:hover:not(:disabled) .load-more-text {
            color: #FFD600 !important;
          }
          body.dark-mode .load-more-btn:hover:not(:disabled) .marquee-arrow path {
            stroke: #FFD600 !important;
          }
          @media (max-width: 600px) {
            .load-more-btn {
              font-size: 1rem !important;
              padding: 0.7em 1.5em !important;
              min-width: 0 !important;
              width: 100% !important;
              margin-top: 2em !important;
            }
            .load-more-btn-container {
              padding-left: 0 !important;
              padding-right: 0 !important;
              margin-top: 1.5em !important;
            }
          }
        `}</style>
      </span>
    </button>
  </div>
);

export default LoadMoreButton;
