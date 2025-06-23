import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize } from 'react-icons/fi';
import LoadMoreButton from './LoadMoreButton';
import GalleryCard from './GalleryCard';


const galleryItems = [
	{
		img: "images/Gallery/Desktop - 1.webp",
		alt: 'Park X App - Smart parking solution for Mumbai and Pune',
		title: 'Park X App – Parking in Mumbai & Pune',
		desc: 'Park X is a mobile app designed to simplify parking in Mumbai and Pune. It offers real-time spot availability, digital payments, and seamless navigation to parking locations, making urban parking hassle-free.',
		thumbnail: "images/Gallery/4.webp",
		type: 'design',
		// Example: not scrollable (default)
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
		img:'images/Gallery/Sales NAlytics/Circle_Overview.webp',scrollable: true,
		alt: 'Sales Analytics Panel for Circle - Personal finance management dashboard',
		title: 'Sales Analytics Panel for Circle',		
		desc: 'The Sales Analytics Panel for Circle is a robust dashboard designed to empower sales teams and managers with actionable insights. It features real-time performance tracking, comprehensive fund and product listings, candidate management, and intuitive visualizations. With streamlined navigation and a modern UI.',
		thumbnail: 'images/Gallery/Sales NAlytics/Circle_Overview.webp',
		type: 'landing-page',
		additionalImages: [
			{ path: 'images/Gallery/Sales NAlytics/Circle_Company.webp', scrollable: true }, // scrollable
			{ path: 'images/Gallery/Sales NAlytics/Circle_Funds Listing.webp', scrollable: true },
			{ path: 'images/Gallery/Sales NAlytics/Circle_Messages.webp', scrollable: true },
			{ path: 'images/Gallery/Sales NAlytics/Circle_Overview.webp', scrollable: true },
			{ path: 'images/Gallery/Sales NAlytics/Circle_Performance.webp', scrollable: true },
			{ path: 'images/Gallery/Sales NAlytics/Circle_Product List.webp', scrollable: true },
			{ path: 'images/Gallery/Sales NAlytics/Circle_Administration.webp', scrollable: true },
			{ path: 'images/Gallery/Sales NAlytics/Circle_Candidates.webp', scrollable: true }
		]
	},
	{
		img: 'images/Gallery/px-conversions (3)/8.webp',scrollable: true,
		alt: 'Control "The Modern MVP Manager" - MVP management tool with task tracking and team collaboration',
		title: 'Control "The Modern MVP Manager"',
		desc: 'A comprehensive tool for managing MVP development, offering features like task tracking, team collaboration, and progress visualization.',
		thumbnail: '/images/Gallery/px-conversions (3)/8.webp',
		type: 'landing-page',
    additionalImages: [
      { path: '/images/Gallery/px-conversions (3)/2.webp', scrollable: true },
      { path: '/images/Gallery/px-conversions (3)/3.webp', scrollable: true },
      { path: '/images/Gallery/px-conversions (3)/4.webp', scrollable: true },
      { path: '/images/Gallery/px-conversions (3)/5.webp', scrollable: true },
      { path: '/images/Gallery/px-conversions (3)/6.webp', scrollable: true },
      { path: '/images/Gallery/px-conversions (3)/7.webp', scrollable: true },
      { path: '/images/Gallery/px-conversions (3)/8.webp', scrollable: true },
      { path: '/images/Gallery/px-conversions (3)/9.webp', scrollable: true },
      { path: '/images/Gallery/px-conversions (3)/10.webp', scrollable: true },
      { path: '/images/Gallery/px-conversions (3)/11.webp', scrollable: true },
      { path: '/images/Gallery/px-conversions (3)/12.webp', scrollable: true },
    ],
	},
	{
		img: 'images/Gallery/trinker/8.webp',scrollable: true,
		alt: 'Saas',
		title: 'Control Mobile App for Managing Projects and Teams',
		desc: 'Control "The Modern MVP Manager" - MVP management tool with task tracking and team collaboration',
		thumbnail: 'images/Gallery/trinker/101.webp',
		type: 'design',
		additionalImages: [
			{ path: 'images/Gallery/trinker/0.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/1.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/2.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/3.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/4.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/5.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/6.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/7.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/8.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/9.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/10.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/11.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/12.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/13.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/14.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/15.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/100.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/101.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/102.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/103.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/104.webp', scrollable: true },
			{ path: 'images/Gallery/trinker/105.webp', scrollable: true }
		]
	},
	{
		img: 'images\\Gallery\\Desktop (1).png',scrollable: true,
		alt: 'SaaS Platform Landing Page - Cloud service management interface',
		title: 'SaaS Website Landing Page',
		desc: 'Conversion-focused SaaS landing page with clear value proposition, intuitive navigation, and optimized CTAs.',
		thumbnail: "images/Gallery/Desktop1.webp",
		type: 'landing-page',
	},
	{
		img: 'images/Gallery/Design Systems/1.webp',scrollable: true,
		alt: 'Design Systems - Comprehensive design system for consistent UI/UX across platforms',
		title: 'Design Systems',
		desc: 'A list of comprehensive design systems for consistent UI/UX across platforms, including components, guidelines, and best practices.',
		thumbnail: "images/Gallery/Design Systems/66027bee045be7df083e39c0_6528c58fab8f44dc6a3cd132_benefits_of_a_good_design_system.jpeg",
		type: 'landing-page',
		additionalImages: [
			{ path: 'images/Gallery/Design Systems/2.webp', scrollable: true },
			{ path: 'images/Gallery/Design Systems/3.webp', scrollable: true },
			{ path: 'images/Gallery/Design Systems/4.webp', scrollable: true },
			{ path: 'images/Gallery/Design Systems/5.webp', scrollable: true },
			{ path: 'images/Gallery/Design Systems/6.webp', scrollable: true },
			{ path: 'images/Gallery/Design Systems/Group 427320669.webp', scrollable: true }
		]
	},
	{
		img: 'images/Gallery/Edtech/5.webp',scrollable: true,
		alt: 'Education App - Online learning platform interface',
		title: 'L-Earn Learn while Earning',
		desc: 'An engaging online learning platform UI with course browsing, progress tracking, and interactive lessons.',
		thumbnail: 'images/Gallery/Edtech/5.webp',
		type: 'landing-page',
		additionalImages: [
			{ path: 'images/Gallery/Edtech/1.webp', scrollable: true },
			{ path: 'images/Gallery/Edtech/2.webp', scrollable: true },
			{ path: 'images/Gallery/Edtech/3.webp', scrollable: true },
			{ path: 'images/Gallery/Edtech/4.webp', scrollable: true },
			{ path: 'images/Gallery/Edtech/5.webp', scrollable: true }
		]
	},
	{
		img: "images/Home Automation/2312312.webp", 
		alt: 'Vivi is your personal home automation companion, designed to give you complete control of your smart home environment',
		title: 'Home Automation IOS ANDROID APP',
		desc: 'Vivi is your personal home automation companion, designed to give you complete control of your smart home environment.',
		thumbnail: "images/Home Automation/2312312.webp",
		additionalImages: [
			'images/Home Automation/1.webp',
			'images/Home Automation/2.webp',
			'images/Home Automation/3.webp',
			'images/Home Automation/4.webp',
			'images/Home Automation/5.webp',
			'images/Home Automation/6.webp',
			'images/Home Automation/7.webp',
			'images/Home Automation/8.webp',
			'images/Home Automation/9.webp',
	
			'images/Home Automation/9 (1).webp',
			'images/Home Automation/9 (2).webp',
			'images/Home Automation/9 (3).webp',
			'images/Home Automation/9 (4).webp',
			'images/Home Automation/9 (5).webp',
			'images/Home Automation/9.webp',
			'images/Home Automation/10 (1).webp',
			'images/Home Automation/10 (2).webp',
			'images/Home Automation/10 (3).webp',
			'images/Home Automation/10 (4).webp',
		]
	},
	{
		img: "images/Gallery/Tinker1.webp",scrollable: true,
		alt: 'Tinker Project - UI/UX design for Tinker application',
		title: 'Tinker Project',
		desc: 'website is likely dedicated to mental wellness, therapy, and personal development. Its primary goal seems to be to provide support, resources, and services to individuals navigating life\'s challenges.',
		thumbnail: 'images/Gallery/Tinker.webp',	
		type: 'landing-page',
	},
	
	
	{
		img: 'images\\Gallery\\original-a6c1f37ec14a924c2ee90f658f09d6a7.webp',
		alt: 'Real Estate Landing Page - Modern property listing interface with search functionality',
		title: 'Real Estate Landing Page',
		desc: 'A website for a client where users can upload their properties and sell, buy, or rent them. The platform features a modern property listing interface with search functionality, making real estate transactions seamless and user-friendly.',
		thumbnail: 'images\\Gallery\\original-a6c1f37ec14a924c2ee90f658f09d6a7.webp',
		type: 'landing-page',
	},

];

// Helper to normalize additionalImages (support string or {path, scrollable})
function getAllImagesWithProps(item) {
	const mainImg = { path: item.img.replace(/\\/g, '/'), scrollable: !!item.scrollable };
	let allImages = [mainImg];
	if (item.additionalImages && item.additionalImages.length > 0) {
		allImages = [
			mainImg,
			...item.additionalImages.map(img =>
				typeof img === 'string'
					? { path: img, scrollable: false }
					: { path: img.path, scrollable: !!img.scrollable }
			)
		];
	}
	return allImages;
}

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9);
  const observerRef = useRef();
  const modalRef = useRef();
  const modalImageOuterRef = useRef();

  const openModal = (item, index = 0) => {
    const allImages = getAllImagesWithProps(item);
    setModalImages(allImages);
    setModalTitle(item.title);
    setModalDesc(item.desc);
    setCurrentImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
    setIsLoading(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  const navigateImage = (direction) => {
    setIsLoading(true);
    if (direction === 'prev') {
      setCurrentImageIndex(prev => 
        prev === 0 ? modalImages.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev === modalImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleKeyPress = useCallback((e) => {
    if (!modalOpen) return;
    
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    }
  }, [modalOpen, navigateImage]);

  const handleClickOutside = useCallback((e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  }, []);

  // Preload images when modal opens
  useEffect(() => {
    if (modalOpen) {
      modalImages.forEach(img => {
        const image = new Image();
        image.src = img.path;
      });
    }
  }, [modalOpen, modalImages]);

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
    if (modalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleKeyPress, handleClickOutside, modalOpen]);

  const isLandingPage = useCallback((imagePath) => {
    const item = galleryItems.find(item =>
      item.img.replace(/\\/g, '/') === imagePath ||
      (item.additionalImages && item.additionalImages.includes(imagePath))
    );
    return item?.type === 'landing-page';
  }, []);

  // Add a property to each image to control fit mode (example: fitWidth: true)
  // You can add fitWidth: true to any gallery item or additionalImages as needed.
  // For demonstration, let's use fitWidth for landing-page types:
  const getFitMode = (imgObj) => {
    const imgPath = imgObj.path;
    const item = galleryItems.find(
      item =>
        item.img.replace(/\\/g, '/') === imgPath ||
        (item.additionalImages && item.additionalImages.some(ai => (typeof ai === 'string' ? ai : ai.path) === imgPath))
    );
    if (item?.title === 'SaaS Website Landing Page') return 'fit-width';
    return item?.type === 'landing-page' ? 'fit-width' : 'normal';
  };

  // Helper to check if current image is scrollable
  const isImageScrollable = (imgObj) => !!imgObj.scrollable;

  // Always show the button, but disable it if all cards are visible
  const allVisible = visibleCount >= galleryItems.length;

  // Robust scroll reset using requestAnimationFrame loop
  const forceScrollTop = () => {
    let count = 0;
    const maxTries = 20;
    function scrollLoop() {
      if (modalImageOuterRef.current) {
        modalImageOuterRef.current.scrollTop = 0;
        modalImageOuterRef.current.scrollTo({ top: 0 });
      }
      count++;
      if (count < maxTries) {
        requestAnimationFrame(scrollLoop);
      }
    }
    scrollLoop();
  };

  const handleImageLoad = () => {
  setIsLoading(false);
  // Use requestAnimationFrame to ensure this runs after paint
  requestAnimationFrame(() => {
    if (modalImageOuterRef.current) {
      modalImageOuterRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
  });
};

  useEffect(() => {
    if (modalOpen) {
      forceScrollTop();
    }
  }, [modalOpen, currentImageIndex]);

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
        <div className="gallery-grid-clean" role="list">
          {galleryItems.slice(0, visibleCount).map((item, idx) => (
            <GalleryCard
              key={`${item.title}-${idx}`}
              item={item}
              onClick={() => openModal(item)}
              idx={idx}
              // No ARIA role needed on GalleryCard root, unless it's a <li>
            />
          ))}
        </div>
        <LoadMoreButton
          onClick={() => setVisibleCount(v => Math.min(v + 3, galleryItems.length))}
          disabled={allVisible}
        />
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="preview-modal preview-modal-fullscreen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="preview-modal-content preview-modal-content-fullscreen" ref={modalRef}>
              <button
                className="preview-close preview-close-fullscreen"
                onClick={closeModal}
                aria-label="Close image viewer"
              >
                <FiX size={32} />
              </button>
              <button
                className="nav-btn prev-btn preview-nav-btn"
                onClick={() => navigateImage('prev')}
                aria-label="Previous image"
              >
                <FiChevronLeft size={40} />
              </button>
              <div
                ref={modalImageOuterRef}
                className={
                  "preview-image-outer" +
                  (isImageScrollable(modalImages[currentImageIndex]) ? " vertical-scrollbar" : "")
                }
                style={
                  isImageScrollable(modalImages[currentImageIndex])
                    ? { overflowY: 'auto', maxHeight: '100vh', height: '100vh' }
                    : {}
                }
              >
                <div className="preview-image-scroll-inner">
                  <img
                    className={
                      getFitMode(modalImages[currentImageIndex]) === 'fit-width'
                        ? 'preview-image-fit-width'
                        : 'preview-image-normal'
                    }
                    src={modalImages[currentImageIndex].path}
                    alt={`Gallery image ${currentImageIndex + 1} of ${modalImages.length}`}
                    style={{
                      display: 'block',
                      margin: '0 auto'
                    }}
                    onLoad={handleImageLoad}
                  />
                </div>
              </div>
              <button
                className="nav-btn next-btn preview-nav-btn"
                onClick={() => navigateImage('next')}
                aria-label="Next image"
              >
                <FiChevronRight size={40} />
              </button>
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
          will-change: transform;
        }
        
        .gallery-image-wrapper {
          overflow: hidden;
          position: relative;
          padding-bottom: 75%;
          background: #f5f5f5;
        }
        
        .gallery-image-clean {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top left;
          transition: transform 0.5s ease;
        }
        
        .gallery-item-clean:hover .gallery-image-clean {
          transform: scale(1.05);
        }
        
        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          padding: 1rem;
          text-align: center;
          pointer-events: none; /* REMOVE this line if present */
        }
        .gallery-item-clean:hover .gallery-overlay {
          opacity: 1;
          pointer-events: auto; /* REMOVE this line if present */
        }
        .gallery-title-clean,
        .gallery-desc-clean {
          text-align: center;
          width: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          color: white;
          /* Remove pointer-events: none if present */
        }
        
        .gallery-title-clean {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
          color: white;
		  text align: center;
        }
        
        .gallery-desc-clean {
		text-align: center;
          font-size: 0.9rem;
          line-height: 1.4;
          padding-left: 2rem;
          padding-right: 2rem;
          word-break: break-word;
          box-sizing: border-box;
        }
        
        /* Preview Modal Styles */
        .preview-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          overflow-y: auto;
     
        }
        
        .preview-modal-content {
          width: 100%;
          max-width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .preview-close {
          position: absolute;
          top: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          z-index: 10;
          transition: background 0.2s;
        }
        
        .preview-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .preview-main-image {
          position: relative;
          width: 100%;
          max-height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: 8px;
          background: #111;
        }
        .preview-main-image.landing-page {
          align-items: flex-start;
          background: #fff;
          max-height: 70vh;
          overflow-y: auto; /* Enable vertical scroll for tall landing page images */
        }
        .preview-main-image img {
          max-width: 100vw;
          max-height: 70vh;
          object-fit: contain;
          display: block;
        }
        .preview-main-image.landing-page img {
          width: 100%;
          height: auto;
          max-height: none;
          display: block;
        }
        
        .image-loading {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.5);
        }
        
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid white;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          z-index: 2;
          transition: background 0.2s;
        }
        
        .nav-btn:hover {
          background: rgba(0, 0, 0, 0.8);
        }
        
        .prev-btn {
          left: 20px;
        }
        
        .next-btn {
          right: 20px;
        }
        
        .fullscreen-btn {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          z-index: 2;
          transition: background 0.2s;
        }
        
        .fullscreen-btn:hover {
          background: rgba(0, 0, 0, 0.8);
        }
        
        .preview-info {
          color: white;
          max-width: 100%;
          margin: 0 auto;
          text-align: center;
        }
        
        .preview-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .preview-info p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }
        
        .image-counter {
          margin-top: 1rem;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }
        
        .preview-thumbnails {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 10px 0;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.2) transparent;
        }
        
        .preview-thumbnails::-webkit-scrollbar {
          height: 6px;
        }
        
        .preview-thumbnails::-webkit-scrollbar-thumb {
          background-color: rgba(255,255,255,0.2);
          border-radius: 3px;
        }
        
        .thumbnail {
          width: 80px;
          height: 60px;
          flex-shrink: 0;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.2s;
          border: 2px solid transparent;
        }
        
        .thumbnail:hover {
          opacity: 1;
        }
        
        .thumbnail.active {
          opacity: 1;
          border-color: white;
        }
        
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        @media (max-width: 768px) {
          .gallery-grid-clean {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }
          
          .preview-main-image {
            max-height: 60vh;
          }
          
          .nav-btn {
            width: 40px;
            height: 40px;
          }
          
          .prev-btn {
            left: 10px;
          }
          
          .next-btn {
            right: 10px;
          }
          
          .thumbnail {
            width: 60px;
            height: 45px;
          }
        }
        
        @media (max-width: 480px) {
          .gallery-grid-clean {
            grid-template-columns: 1fr;
          }
          
          .preview-main-image {
            max-height: 50vh;
          }
          
          .preview-info h3 {
            font-size: 1.2rem;
          }
          
          .preview-info p {
            font-size: 0.9rem;
          }
        }

        .preview-modal-fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: auto;
          background: #000;
          z-index: 2000;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden; /* Prevent horizontal scroll */
        }
        .preview-modal-content-fullscreen {
          width: 100vw;
          height: auto;
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background: transparent;
          padding: 0;
          overflow: hidden; /* Prevent horizontal scroll */
        }
        .preview-image-outer {
          width: 100vw;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden; /* Prevent horizontal scroll */
        }
        .preview-image-outer.vertical-scrollbar {
          overflow-y: auto;
          scroll-behavior: auto !important;
          -webkit-overflow-scrolling: touch;
          align-items: flex-start;
        }
        .preview-image-fit-width {
          width: 100vw !important;
          min-width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          min-height: 100% !important;
          max-height: 100% !important;
          object-fit: fill !important;
          display: block;
        }
        .preview-image-normal {
          width: 100vw;
          height: auto;
          max-width: 100vw;
          max-height: 100vh;
          object-fit: contain;
          display: block;
        }
        .preview-close-fullscreen {
          position: fixed;
          top: 32px;
          right: 32px;
          z-index: 2100;
          background: rgba(0,0,0,0.5);
          border: none;
          color: #fff;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 2rem;
          transition: background 0.2s;
        }
        .preview-close-fullscreen:hover {
          background: rgba(0,0,0,0.8);
        }
        .preview-nav-btn {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.5);
          border: none;
          color: #fff;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 2rem;
          z-index: 2100;
          transition: background 0.2s;
        }
        .preview-nav-btn:hover {
          background: rgba(0,0,0,0.8);
        }
        .prev-btn.preview-nav-btn {
          left: 32px;
        }
        .next-btn.preview-nav-btn {
          right: 32px;
        }
        @media (max-width: 768px) {
          .preview-close-fullscreen {
            top: 12px;
            right: 12px;
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
          }
          .preview-nav-btn {
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
          }
          .prev-btn.preview-nav-btn {
            left: 8px;
          }
          .next-btn.preview-nav-btn {
            right: 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;