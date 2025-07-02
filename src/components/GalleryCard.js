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
    style={{ position: 'relative' }}
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
    <div
      className="gallery-overlay"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.7)',
        zIndex: 2,
        opacity: 0,
        transition: 'opacity 0.3s',
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '90%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h4
          className="gallery-title-clean"
          style={{
            textAlign: 'center',
            width: '100%',
            color: '#fff',
            marginBottom: '0.5rem'
          }}
        >
          {item.title}
        </h4>
        <p
          className="gallery-desc-clean"
          style={{
            textAlign: 'center',
            width: '100%',
            color: '#fff'
          }}
        >
          {item.desc}
        </p>
      </div>
    </div>
    <style>{`
      .gallery-item-clean:hover .gallery-overlay {
        opacity: 1 !important;
        pointer-events: auto !important;
      }
    `}</style>
  </motion.div>
);

export default GalleryCard;
