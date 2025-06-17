import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const servicesData = [
	{
		img: 'images/What-we-do/1.jpg',
		alt: 'Research and Discovery Service',
		title: 'Research & Discovery',
		desc: 'Understanding your business, users, and goals is the foundation of great design. We conduct: User Research, Competitive Analysis, Stakeholder Workshops.',
	},
	{
		img: 'images/What-we-do/2.jpg',
		alt: 'Strategy and Information Architecture Service',
		title: 'Strategy & Information Architecture',
		desc: 'We define a clear roadmap for an intuitive and scalable digital product by: Creating User Personas, Developing User Journeys, Structuring Sitemaps.',
	},
	{
		img: 'images/What-we-do/3.jpg',
		alt: 'Wireframing and Prototyping Service',
		title: 'Wireframing & Prototyping',
		desc: 'Before designing high-fidelity screens, we create: Low-Fidelity Wireframes, Interactive Prototypes, Usability Testing.',
	},
	{
		img: 'images/What-we-do/4.jpg',
		alt: 'Visual Design and Branding Service',
		title: 'Visual Design & Branding',
		desc: 'Once the foundation is set, we craft visually compelling and interactive designs: UI Design, Design Systems, Motion & Micro-Interactions.',
	},
	{
		img: 'images/What-we-do/5.jpg',
		alt: 'Development Handoff & Collaboration Service',
		title: 'Development Handoff & Collaboration',
		desc: 'We work closely with developers to ensure seamless implementation: Design Handoff, Front-End Development Support, Collaboration with Engineers.',
	},
	{
		img: 'images/What-we-do/6.jpg',
		alt: 'Testing, Feedback & Iteration Service',
		title: 'Testing, Feedback & Iteration',
		desc: 'Design is an ongoing process, and we refine products based on real-world usage: A/B Testing & Heatmaps, User Testing Sessions, Post-Launch Optimization.',
	},
];

const Services = () => {
	const { t } = useTranslation();

	return (
		<section id="services" className="services-section" aria-labelledby="services-heading">
			<div className="container">
				<h2 id="services-heading">{t('OUR SERVICES & PROCESS')}</h2>
				<p>
					{t(
						'I design intuitive, user-focused digital products that drive engagement and usability. From research to prototyping, I create clean, functional designs for web and mobile that ensure smooth navigation and a great user experience.'
					)}
				</p>
				<div className="services-grid-modern">
					{servicesData.map((service, index) => (
						<motion.div
							key={index}
							className="service-card-modern"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.3, delay: index * 0.05 }}
						>
							<div className="service-image-wrapper">
								{/*
                  Fix: Use forward slashes in image paths for cross-platform and mobile compatibility.
                  Also, ensure the images exist in the correct public/images/what-we-do/ directory.
                */}
								<img
									src={service.img.replace(/\\/g, '/')}
									alt={service.alt}
									className="service-image"
								/>
							</div>
							<div className="service-content">
								<h3 className="service-title">{service.title}</h3>
								<p className="service-desc">{service.desc}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
			<style>{`
        .services-grid-modern {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          justify-content: center;
          margin-top: 2rem;
        }

        .service-card-modern {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08);
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          overflow: hidden;
        }

        .service-card-modern:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 8px 32px 0 rgba(0, 95, 204, 0.13);
        }

        .service-image-wrapper {
          height: 220px;
          overflow: hidden;
        }

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .service-card-modern:hover .service-image {
          transform: scale(1.1);
        }

        .service-content {
          padding: 1.5rem;
        }

        .service-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.7rem;
          color: #333;
        }

        .service-desc {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .services-grid-modern {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
        }

        body.dark-mode .service-card-modern {
          background: #181c22;
          box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.18);
          color: #e6eaf3;
        }

        body.dark-mode .service-title {
          color: #7ecbff;
        }

        body.dark-mode .service-desc {
          color: #b0b8c6;
        }
      `}</style>
		</section>
	);
};

export default Services;
