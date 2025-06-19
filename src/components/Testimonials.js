import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const testimonials = [
  {
    quote: "Working with Vivek was an absolute game-changer for our project. His attention to detail and user-centric approach resulted in a product our customers love.",
    img: "images/Testimonials/images.webp",
    author: "Yamini Sharma",
    role: "Product Manager, PixelCraft"
  },
  {
    quote: "GRAYS-SCALE isn’t just another design studio—it’s a place where ideas become beautiful, functional realities. Highly recommended!",
    img: "images/Testimonials/download (3).webp",
    author: "Rahul Goyal",
    role: "Founder, BrandSphere"
  },
  {
    quote: "The collaboration with Vivek was a breath of fresh air. He brought clarity and creativity to every step of the process.",
    img: "images/Testimonials/download (2).webp",
    author: "Nizam Majumder",
    role: "CEO, TechWave"
  },
  {
    quote: "Vivek brought our vision to life with his exceptional design skills. The end result exceeded our expectations.",
    img: "images/Testimonials/download (1).webp",
    author: "Ratan Dhamani",
    role: "Marketing Director, InnovateX"
  },
  {
    quote: "Hiring Vivek for our project was one of the best decisions we made. The UI/UX is world-class.",
    img: "images/Testimonials/download.webp",
    author: "Saito Yerscer",
    role: "CEO, Digital Horizons UK"
  }
];

// Duplicate testimonials for seamless marquee
const marqueeTestimonials = [...testimonials, ...testimonials];

const TestimonialCard = ({ quote, img, author, role }) => (
  <div className="testimonial-marquee-card">
    <div className="testimonial-avatar">
      <img src={img} alt={author} loading="lazy" />
    </div>
    <div className="testimonial-content">
      <p className="testimonial-quote">"{quote}"</p>
      <div className="testimonial-author">
        <span className="testimonial-name">{author}</span>
        <span className="testimonial-role">{role}</span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const marqueeRef = useRef(null);
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2); // Only half, since duplicated
    }
  }, []);

  useEffect(() => {
    if (width > 0) {
      controls.start({
        x: [-0, -width],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30, // Faster: was 60, now 30 (lower = faster)
            ease: 'linear'
          }
        }
      });
    }
  }, [width, controls]);

  return (
    <section id="testimonials" className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading" className="fade-in-up" style={{ marginBottom: '2rem' }}>
         USER REVIEWS
        </h2>
        <p className="testimonial-description">
          Hear from clients and collaborators who have experienced the impact of our designs firsthand. Their feedback reflects our commitment to creating user-friendly, visually appealing, and results-driven digital experiences.
        </p>
        <div className="testimonial-marquee-outer">
          <motion.div
            className="testimonial-marquee-inner"
            ref={marqueeRef}
            animate={controls}
            style={{ willChange: 'transform' }}
          >
            {marqueeTestimonials.map((t, idx) => (
              <TestimonialCard key={idx + t.author} {...t} />
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`
        .testimonial-marquee-outer {
          overflow: hidden;
          width: 100vw; /* Full viewport width */
          position: relative;
          background: none;
          margin-bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }
        .testimonial-marquee-inner {
          display: flex;
          gap: 2.5rem;
          width: max-content;
          min-width: 200%;
          align-items: stretch;
        }
        .testimonial-marquee-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 24px 0 rgba(0,0,0,0.07);
          min-width: 340px;
          max-width: 340px;
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 1rem 0;
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid #f0f0f0;
        }
        .testimonial-marquee-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 8px 32px 0 rgba(0,95,204,0.13);
        }
        .testimonial-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 1rem;
          border: 2px solid #e6f0fa;
          box-shadow: 0 2px 8px rgba(0,95,204,0.08);
          background: #f7f7f7;
        }
        .testimonial-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .testimonial-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
        }
        .testimonial-quote {
          font-size: 1.1rem;
          font-style: italic;
          color: #222;
          margin-bottom: 1.2rem;
          line-height: 1.6;
          min-height: 70px;
        }
        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .testimonial-name {
          font-weight: 700;
          color: #005fcc;
          font-size: 1rem;
        }
        .testimonial-role {
          font-size: 0.95rem;
          color: #888;
          font-weight: 400;
        }
        @media (max-width: 900px) {
          .testimonial-marquee-card {
            min-width: 260px;
            max-width: 260px;
            padding: 1.2rem 1rem 1rem 1rem;
          }
          .testimonial-marquee-inner {
            gap: 1.2rem;
          }
        }
        @media (max-width: 600px) {
          .testimonial-marquee-card {
            min-width: 210px;
            max-width: 210px;
            padding: 1rem 0.7rem 0.7rem 0.7rem;
          }
          .testimonial-marquee-inner {
            gap: 0.7rem;
          }
        }
        body.dark-mode .testimonial-marquee-card {
          background: #181c22;
          color: #e6eaf3;
          border: 1px solid #232a36;
        }
        body.dark-mode .testimonial-quote {
          color: #e6eaf3;
        }
        body.dark-mode .testimonial-name {
          color: #7ecbff;
        }
        body.dark-mode .testimonial-role {
          color: #b0b8c6;
        }
        body.dark-mode .testimonial-avatar {
          background: #232a36;
          border: 2px solid #4db8ff;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
