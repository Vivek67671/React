import React, { useState, useEffect, useRef } from 'react';

const TrustedBrands = () => {
  const logos = [
    "images/client1.webp",
    "images/client2.webp",
    "images/client3.webp",
    "images/client4.webp",
    "images/client5.webp",
    "images/client6.webp",
    "images/client7.webp",
    "images/client8.webp"
  ];

  const marqueeRef = useRef(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [logoWidth, setLogoWidth] = useState(0);
  const [numLogos, setNumLogos] = useState(0);

  useEffect(() => {
    const calculateWidths = () => {
      if (marqueeRef.current && marqueeRef.current.offsetWidth > 0 && logos.length > 0) {
        setMarqueeWidth(marqueeRef.current.offsetWidth);
        setLogoWidth(150 + 20); // max-width + margin-right from CSS
      }
    };

    calculateWidths();
    window.addEventListener('resize', calculateWidths);

    return () => window.removeEventListener('resize', calculateWidths);
  }, [logos.length]);

  useEffect(() => {
    if (marqueeWidth > 0 && logoWidth > 0) {
      const logosNeeded = Math.ceil((marqueeWidth * 9) / logoWidth); // Ensure it fills at least 2x the width
      setNumLogos(logosNeeded);
    }
  }, [marqueeWidth, logoWidth]);

  const getMarqueeLogos = () => {
    const logosToRender = [];
    for (let i = 0; i < numLogos; i++) {
      logosToRender.push(logos[i % logos.length]);
    }
    return logosToRender;
  };

  const marqueeLogos = getMarqueeLogos();

  return (
    <section id="trusted-brands" className="trusted-brands-section" aria-labelledby="trusted-brands-heading">
      <div className="container">
        <h2 id="trusted-brands-heading" className="fade-in-up">Our Network</h2>
        <div className="text-container">
          <p>
            At Grays-Scale, I work closely with ambitious brands to design thoughtful, user-centered digital products. From defining the problem to delivering scalable solutions, I focus on product design that drives results, builds trust, and creates memorable user experiences.
          </p>
        </div>
        <div className="marquee-container" ref={marqueeRef} style={{ marginTop: '3rem' }}>
          <div className="marquee">
            {marqueeLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                width="150"
                height="75"
                loading="lazy"
                decoding="async"
                className="brand-logo"
                style={{ minWidth: '150px' }}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .marquee-container {
          overflow: hidden;
          position: relative;
          background-color: rgba(168, 158, 158, 0);
          padding: 10px 0;
          white-space: nowrap;
          width: 100vw; /* Full viewport width */
          left: 50%;
          transform: translateX(-50%);
        }
        .marquee {
          display: flex;
          align-items: center;
          animation: marquee-images 70s linear infinite;
        }
        .marquee img {
          height: 75px;
          margin-right: 20px;
          object-fit: contain;
          display: inline-block;
          max-width: 150px;
          filter: grayscale(100%);
          transition: filter 0.1s ease;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};

export default TrustedBrands;
