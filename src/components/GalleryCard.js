import React from 'react';
import { motion } from 'framer-motion';

const GalleryCard = ({ item, onClick, idx }) => (
  <motion.div
    className="gallery-item-clean"
    onClick={onClick}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: idx * 0.1 }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="gallery-image-wrapper">
      <img
        data-src={item.thumbnail.replace(/\\/g, '/')}
        className="gallery-image-clean lazy"
        alt={item.alt}
        width="400"
        height="300"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="gallery-overlay">
      <h4 className="gallery-title-clean">{item.title}</h4>
      <p className="gallery-desc-clean">{item.desc}</p>
    </div>
  </motion.div>
);

export default GalleryCard;
