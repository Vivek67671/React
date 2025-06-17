import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
	{
		img: 'images/Gallery/44.webp',
		alt: 'E-commerce Platform - Modern shopping experience with intuitive navigation',
		title: 'E-commerce Platform Design',
		desc: 'A modern e-commerce platform with intuitive navigation, streamlined checkout, and responsive design for optimal UX.',
		thumbnail: 'images/Gallery/4.webp',
		additionalImages: [
			'/images/Gallery/px-conversions (1)/1.webp',
			'/images/Gallery/px-conversions (1)/2.webp',
			'/images/Gallery/px-conversions (1)/3.webp',
			'/images/Gallery/px-conversions (1)/4.webp',
			'/images/Gallery/px-conversions (1)/5.webp',
			'/images/Gallery/px-conversions (1)/6.webp',
			'/images/Gallery/px-conversions (1)/7.webp',
			'/images/Gallery/px-conversions (1)/8.webp',
			'/images/Gallery/px-conversions (1)/9.webp',
			'/images/Gallery/px-conversions (1)/10.webp',
			'/images/Gallery/px-conversions (1)/11.webp',
			'/images/Gallery/px-conversions (1)/12.webp',
			'/images/Gallery/px-conversions (1)/13.webp',
			'/images/Gallery/px-conversions (1)/14.webp',
			'/images/Gallery/px-conversions (1)/15.webp',
			'/images/Gallery/px-conversions (1)/16.webp',
			'/images/Gallery/px-conversions (1)/17.webp',
			'/images/Gallery/px-conversions (1)/18.webp',
			'/images/Gallery/px-conversions (1)/19.webp',
			'/images/Gallery/px-conversions (1)/20.webp',
			'/images/Gallery/px-conversions (1)/21.webp',
			'/images/Gallery/px-conversions (1)/22.webp',
			'/images/Gallery/px-conversions (1)/23.webp',
			'/images/Gallery/px-conversions (1)/24.webp',
			'/images/Gallery/px-conversions (1)/25.webp',
			'/images/Gallery/px-conversions (1)/26.webp',
			'/images/Gallery/px-conversions (1)/27.webp',
			'/images/Gallery/px-conversions (1)/28.webp',
			'/images/Gallery/px-conversions (1)/29.webp',
			'/images/Gallery/px-conversions (1)/30.webp',
			'/images/Gallery/px-conversions (1)/31.webp',
			'/images/Gallery/px-conversions (1)/32.webp',
			'/images/Gallery/px-conversions (1)/33.webp',
			'/images/Gallery/px-conversions (1)/34.webp',
			'/images/Gallery/px-conversions (1)/35.webp',
			'/images/Gallery/px-conversions (1)/36.webp',
			'/images/Gallery/px-conversions (1)/37.webp',
			'/images/Gallery/px-conversions (1)/38.webp',
			'/images/Gallery/px-conversions (1)/39.webp',
			'/images/Gallery/px-conversions (1)/40.webp',
			'/images/Gallery/px-conversions (1)/41.webp',
			'/images/Gallery/px-conversions (1)/42.webp',
			'/images/Gallery/px-conversions (1)/43.webp',
			'/images/Gallery/px-conversions (1)/44.webp',
			'/images/Gallery/px-conversions (1)/45.webp',
			'/images/Gallery/px-conversions (1)/46.webp',
			'/images/Gallery/px-conversions (1)/47.webp',
			'/images/Gallery/px-conversions (1)/48.webp',
		],
	},
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
	},
];

const Gallery = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalImages, setModalImages] = useState([]);
	const [modalTitle, setModalTitle] = useState('');
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const observerRef = useRef();

	const openModal = (item) => {
		const mainImg = item.img.replace(/\\/g, '/');
		let allImages = [mainImg];
		if (item.additionalImages && item.additionalImages.length > 0) {
			allImages = [mainImg, ...item.additionalImages];
		}
		setModalImages(allImages);
		setModalTitle(item.title);
		setCurrentImageIndex(0);
		setModalOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		setModalOpen(false);
		document.body.style.overflow = '';
		setCurrentImageIndex(0);
	};

	const nextImage = (e) => {
		e.stopPropagation();
		setCurrentImageIndex((prev) => 
			prev === modalImages.length - 1 ? 0 : prev + 1
		);
	};

	const prevImage = (e) => {
		e.stopPropagation();
		setCurrentImageIndex((prev) => 
			prev === 0 ? modalImages.length - 1 : prev - 1
		);
	};

	const handleKeyPress = useCallback((e) => {
		if (!modalOpen) return;
		if (e.key === 'Escape') closeModal();
		if (e.key === 'ArrowRight') setCurrentImageIndex(prev => prev === modalImages.length - 1 ? 0 : prev + 1);
		if (e.key === 'ArrowLeft') setCurrentImageIndex(prev => prev === 0 ? modalImages.length - 1 : prev - 1);
	}, [modalOpen, modalImages.length]);

	useEffect(() => {
		observerRef.current = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const img = entry.target;
					img.src = img.dataset.src;
					img.classList.remove('lazy');
					observerRef.current.unobserve(img);
				}
			});
		}, {
			rootMargin: '50px 0px'
		});

		document.querySelectorAll('.gallery-image-clean').forEach(img => {
			observerRef.current.observe(img);
		});

		return () => observerRef.current?.disconnect();
	}, []);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [handleKeyPress]);

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
							onClick={() => openModal(item)}
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
						</div>
					))}
				</div>
			</div>
			<AnimatePresence>
				{modalOpen && (
					<motion.div
						className="modal-overlay"
						onClick={closeModal}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<div className="modal-content" onClick={e => e.stopPropagation()}>
							<button 
                className="modal-close" 
                onClick={closeModal}
                aria-label="Close modal"
              >×</button>
							<div className="modal-image-container">
								<button 
                  className="modal-nav prev" 
                  onClick={prevImage}
                  aria-label="Previous image"
                >‹</button>
								<img
									src={modalImages[currentImageIndex]}
									alt={modalTitle}
									className="modal-image"
								/>
								<button 
                  className="modal-nav next" 
                  onClick={nextImage}
                  aria-label="Next image"
                >›</button>
							</div>
							<div className="modal-thumbnails">
								{modalImages.map((img, idx) => (
									<img
										key={idx}
										src={img}
										alt={`Thumbnail ${idx + 1}`}
										className={`modal-thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
										onClick={() => setCurrentImageIndex(idx)}
									/>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<style jsx>{`
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
          padding-bottom: 75%;
        }
        .gallery-image-clean {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top left;
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
          color: white;
        }
        .gallery-desc-clean {
          font-size: 1rem;
          text-align: center;
          padding: 0 1rem;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 3000;
        }

        .modal-content {
          width: 90%;
          max-width: 1200px;
          height: 90vh;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: white;
          font-size: 3rem;
          line-height: 1;
          cursor: pointer;
          z-index: 3001;
          padding: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          transition: transform 0.2s;
          outline: none;
        }

        .modal-close:hover {
          transform: scale(1.1);
        }

        .modal-image-container {
          position: relative;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-image {
          max-height: 70vh;
          max-width: 100%;
          object-fit: contain;
        }

        .modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: white;
          font-size: 4rem;
          line-height: 1;
          padding: 0;
          cursor: pointer;
          width: 50px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          transition: transform 0.2s;
          outline: none;
        }

        .modal-nav:hover {
          transform: translateY(-50%) scale(1.1);
        }

        .modal-nav.prev {
          left: 10px;
        }

        .modal-nav.next {
          right: 10px;
        }

        .modal-thumbnails {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
          gap: 10px;
          padding: 10px;
          background: rgba(0, 0, 0, 0.5);
          max-height: 120px;
          overflow-y: auto;
        }

        .modal-thumbnail {
          width: 80px;
          height: 60px;
          object-fit: cover;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.3s;
        }

        .modal-thumbnail:hover,
        .modal-thumbnail.active {
          opacity: 1;
        }

        @media (max-width: 600px) {
          .preview-slider {
			max-width: 100vw;
			max-height: 70vh;
		  }
		  .modal-image-gallery .image-gallery-slide img {
			max-height: 50vh;
		  }
		}

		.custom-splide-arrow {
		  font-size: 2rem;
		  opacity: 1;
		  transition: background 0.2s;
		}
		.custom-splide-arrow:hover {
		  background: #005fcc;
		  color: #fff;
		}
		.custom-splide-arrow-prev {
		  left: 10px;
		}
		.custom-splide-arrow-next {
		  right: 10px;
		}
		.splide__arrows {
		  display: flex;
		  pointer-events: auto;
		  z-index: 1101;
		}
		.splide__arrow {
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  background: rgba(0,0,0,0.7);
		  color: #fff;
		  border: none;
		  width: 48px;
		  height: 48px;
		  font-size: 2rem;
		  opacity: 1;
		  transition: background 0.2s;
		  z-index: 1102;
		}
		.splide__arrow--prev {
		  left: 10px;
		}
		.splide__arrow--next {
		  right: 10px;
		}
		.splide__arrow:hover {
		  background: #005fcc;
		  color: #fff;
		}
		@media (max-width: 600px) {
		  .custom-splide-arrow {
			width: 36px;
			height: 36px;
			font-size: 1.3rem;
		  }
		  .custom-splide-arrow-prev { left: 2px; }
		  .custom-splide-arrow-next { right: 2px; }
		  .splide__arrow {
			width: 36px;
			height: 36px;
			font-size: 1.3rem;
		  }
		  .splide__arrow--prev { left: 2px; }
		  .splide__arrow--next { right: 2px; }
		}
	  `}</style>
		</section>
	);
};

export default Gallery;
