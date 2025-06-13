import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
	{
		img: 'images\\Gallery\\original-a6c1f37ec14a924c2ee90f658f09d6a7.webp',
		alt: 'Real Estate Landing Page - Modern property listing interface with search functionality',
		title: 'Real Estate Landing Page',
		desc: 'A clean, intuitive real estate landing page prioritizing high-quality visuals and clear CTAs for maximum engagement and lead generation.',
		thumbnail: 'images\\Gallery\\original-a6c1f37ec14a924c2ee90f658f09d6a7.webp' // Thumbnail path
	},
	{
		img: 'images/Gallery/33.webp',
		alt: 'Cryptocurrency Dashboard - Advanced trading interface with real-time analytics',
		title: 'Crypto Wallet App Design',
		desc: 'A comprehensive dashboard for traders, featuring real-time price tracking, portfolio management, and advanced trading tools.',
		thumbnail: 'images\\Gallery\\33_1_optimized-transformed.png' // Thumbnail path
	},
	{
		img: 'images/Gallery/Dashboard Analytic.webp',
		alt: 'Financial Analytics Dashboard - Enterprise data visualization platform',
		title: 'Finance Dashboard',
		desc: 'Enterprise-level analytics dashboard with comprehensive data visualization, reporting tools, and real-time monitoring.',
		thumbnail: 'images\\Gallery\\Dashboard Analytic.webp' // Thumbnail path
	},
	{
		img: 'images\\Gallery\\44.webp',
		alt: 'E-commerce Platform - Modern shopping experience with intuitive navigation',
		title: 'E-commerce Platform Design',
		desc: 'A modern e-commerce platform with intuitive navigation, streamlined checkout, and responsive design for optimal UX.',
		thumbnail: 'images\\Gallery\\4.webp' // Thumbnail path
	},
	{
		img: 'images\\Gallery\\Desktop (1).webp',
		alt: 'SaaS Platform Landing Page - Cloud service management interface',
		title: 'SaaS Website Landing Page',
		desc: 'Conversion-focused SaaS landing page with clear value proposition, intuitive navigation, and optimized CTAs.',
		thumbnail: 'images\\Gallery\\Desktop (1).webp' // Thumbnail path
	},
	{
		img: 'images/Gallery/07-Mobile App.webp',
		alt: 'Portfolio Website - Personal portfolio homepage with animated hero section.',
		title: 'Portfolio Website',
		desc: 'Personal portfolio homepage with animated hero section and modern, clean layout.',
		thumbnail: 'images\\Gallery\\07-Mobile App (1) (1) 1.webp' // Thumbnail path
	}
];

const Gallery = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalIdx, setModalIdx] = useState(0);

	const openModal = (idx) => {
		setModalIdx(idx);
		setModalOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		setModalOpen(false);
		document.body.style.overflow = '';
	};

	const showPrev = (e) => {
		e.stopPropagation();
		setModalIdx((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
	};

	const showNext = (e) => {
		e.stopPropagation();
		setModalIdx((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
	};

	const handleKeyPress = (e) => {
		if (!modalOpen) return;
		if (e.key === 'Escape') closeModal();
		if (e.key === 'ArrowLeft') showPrev(e);
		if (e.key === 'ArrowRight') showNext(e);
	};

	React.useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [modalOpen]);

	return (
		<section id="gallery" className="gallery-section" aria-labelledby="gallery-heading">
			<div className="container">
				<h2
					id="gallery-heading"
					className="fade-in-up"
					style={{
						fontWeight: 900,
						fontSize: 'clamp(2rem, 7vw, 4rem)',
						marginBottom: '0.5em',
						letterSpacing: '2px'
					}}
				>
					GALLERY
				</h2>
				<p className="gallery-description fade-in-up" style={{ marginBottom: '2.5em' }}>
					A curated showcase of my UI/UX design work — from concept to polished product. Explore visually engaging,
					user-centered solutions crafted with precision and purpose.
				</p>
				<div className="gallery-grid-clean">
					{galleryItems.map((item, idx) => (
						<div
							className="gallery-item-clean"
							key={item.title}
							onClick={() => openModal(idx)}
						>
							<div className="gallery-image-wrapper">
								<img
									src={item.thumbnail}
									alt={item.alt}
									className="gallery-image-clean"
									loading="lazy"
								/>
							</div>
							<div className="gallery-overlay">
								<h4 className="gallery-title-clean">{item.title}</h4>
								<p className="gallery-desc-clean">{item.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Modal for image preview */}
			<AnimatePresence>
				{modalOpen && (
					<motion.div
						className="preview-modal"
						onClick={closeModal}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<span className="preview-close" onClick={closeModal}>
							&times;
						</span>
						<img
							src={galleryItems[modalIdx].img}
							alt={galleryItems[modalIdx].alt}
							className="preview-modal-img"
							style={{ maxWidth: '100vw !important', width: '100% !important', height: 'auto !important', objectFit: 'scale-down !important' }} // Set width to 100% and objectFit to contain
						/>
						<div className="preview-caption">
							<h4 className="preview-title">{galleryItems[modalIdx].title}</h4>
							<p className="preview-desc">{galleryItems[modalIdx].desc}</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<style>{`
        .gallery-grid-clean {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          justify-content: center;
          margin-top: 2rem;
        }

        .gallery-item-clean {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: box-shadow 0.3s ease;
        }

        .gallery-item-clean:hover {
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .gallery-image-wrapper {
          overflow: hidden;
          position: relative;
          padding-bottom: 75%; /* Maintain aspect ratio */
        }

        .gallery-image-clean {
          position: absolute;
          top: 0; /* Align to top */
          left: 0; /* Align to left */
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top left; /* Ensure images fit from the top left */
          transition: transform 0.3s ease;
        }

        .gallery-item-clean:hover .gallery-image-clean {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item-clean:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-title-clean {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: white; /* Changed title color to white */
        }

        .gallery-desc-clean {
          font-size: 1rem;
          text-align: center;
          padding: 0 1rem;
        }
        /* New styles for the preview modal */
        .preview-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .preview-modal-img {
          width: 100% !important; /* Set width to 100% */
          max-width: 100vw !important; /* Set max-width to 100vw */
          max-height: 80vh;
          height: auto !important;
          object-fit: scale-down !important; /* Use object-fit: contain to preserve aspect ratio */
        }
        .preview-close {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 2rem;
          color: white;
          cursor: pointer;
        }
      `}</style>
		</section>
	);
};

export default Gallery;
