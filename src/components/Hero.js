import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <motion.section
    id="hero"
    className="hero-section"
    aria-labelledby="hero-description"
    style={{ paddingTop: '20px' }} // Add padding to prevent overlap with navbar
    initial={{ opacity: 0, scale: 0.96, y: 40 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.05 }}
  >
    <motion.div
      className="hero-title"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <a href="#home" title="GRAYS-SCALE" className="aether-labs-link">
        <h1 id="hero-description">GRAYS-SCALE</h1>
      </a>
    </motion.div>
    <motion.div
      className="video-container"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <video autoPlay loop muted playsInline aria-label="Promotional video">
        <source src="your-video.mp4" type="video/mp4" />
        {/* Replace with your video */}
        Your browser does not support the video tag.
      </video>
    </motion.div>
  </motion.section>
);

export default Hero;
