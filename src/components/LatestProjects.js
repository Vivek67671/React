import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const projects = [
  {
    title: "Designing a Seamless Budget Management Experience",
    subtitle: "Cloud Budget Management",
    metrics: [
      { value: "38", unit: "%", label: "Increase in User Retention" },
      { value: "42", unit: "%", label: "Improved Task Completion" }
    ],
    description: "Ever since the shift to cloud-based infrastructure, there has been a trend in the industry to rely on multiple cloud providers to either have infrastructure backup or use particular capabilities offered by one provider while maintaining the majority of their infrastructure with another. This calls for a mechanism to set spending limits among these cloud providers as well as an overview of how one’s cloud budget is being allocated across various cloud service providers.",
    link: "/case-study-4.html",
    image: "images/Case Study Sliders  Image Containers/case study 4.webp"
  },
  {
    title: "Designing for Variants a UX case study",
    subtitle: "Online Services App",
    metrics: [
      { value: "28", unit: "%", label: "Higher Purchase Rate" },
      { value: "45", unit: "%", label: "Better User Engagement" }
    ],
    description: "The problem involved designing the flow for the user to buy multiple variants of a product which has staggered pricing and at the same time ensuring that she is making a good deal (i.e. Value for money).",
    link: "/case-study-1.html",
    image: "images/Case Study Sliders  Image Containers/Download File.webp"
  },
  {
    title: "Designing a better checkout experience",
    subtitle: "UX/UI case study",
    metrics: [
      { value: "25", unit: "%", label: "Conversion Rate Increase" },
      { value: "15", unit: "%", label: "Reduced Cart Abandonment" }
    ],
    description: "Designing a better checkout experience — a UX/UI case study. This case study focuses on improving the checkout process for an e-commerce website. The goal was to reduce cart abandonment rates by simplifying the checkout process and making it more intuitive for users. We conducted extensive user research and usability testing to identify pain points and areas for improvement. The final design incorporated a streamlined checkout flow, clear and concise instructions, and a variety of payment options to cater to different user preferences.",
    link: "/case-study-2.html",
    image: "images\\Case Study Sliders  Image Containers\\case 2.webp"
  },
  {
    title: "UI/UX Case Study SaaS Website Redesign",
    subtitle: "Revamping of a Cloud Platform",
    metrics: [
      { value: "32", unit: "%", label: "Increased Sign-ups" },
      { value: "40", unit: "%", label: "Better User Satisfaction" }
    ],
    description: "A strong digital presence is key in our highly competitive environment and this story is about a 2-month journey we took as designers to reimagine a 3-year-old website for a fresh, new, updated one. This project was driven by the need to align our online presence, with the changing B2B SaaS market and the limitations found in our current website.",
    link: "/case-study-3.html",
    image: "images/Case Study Sliders  Image Containers/case 3.webp"
  }
];

const Metric = ({ value, unit, label }) => {
  // Defensive: fallback to plain value if CountUp fails
  const numValue = Number(value);
  const [fallback, setFallback] = React.useState(false);

  // On mount, check if IntersectionObserver is available (CountUp uses it for scrollSpy)
  React.useEffect(() => {
    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      setFallback(true);
    }
  }, []);

  return (
    <motion.div
      className="metric"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="metric-value"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <span className="metric-countup">
          {isNaN(numValue) || fallback ? (
            <span>{value}{unit}</span>
          ) : (
            <CountUp
              end={numValue}
              duration={2.5}
              delay={0.3}
              suffix={unit}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              redraw={true}
            >
              {({ countUpRef }) => (
                <span ref={countUpRef}>{numValue}{unit}</span>
              )}
            </CountUp>
          )}
        </span>
      </motion.div>
      <div className="metric-label">{label}</div>
    </motion.div>
  );
};

const LatestProjects = () => (
  <section id="latest-projects" className="latest-projects-section" aria-labelledby="latest-projects-heading">
    <div className="container">
      <h2 id="latest-projects-heading" className="section-heading">CASE STUDIES</h2>
      <p>
        I design products that solve real problems, not just look good.
        From research to rollout, every decision I make is backed by data, user insights, and a clear focus on impact. Dive into my case studies to see how I turn complex challenges into intuitive, high-performing digital experiences.
      </p>
      <div className="latest-projects-list">
        {projects.map((proj, idx) => (
          <a
            href={proj.link}
            className="card"
            key={idx}
            aria-describedby={`case-study-${idx + 1}-description`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="inner">
              <h3 className="title">{proj.title}</h3>
              <time className="subtitle">{proj.subtitle}</time>
              <div className="metrics-container">
                {proj.metrics.map((metric, midx) => (
                  <Metric key={midx} {...metric} />
                ))}
              </div>
              <p id={`case-study-${idx + 1}-description`}>
                {proj.description}
              </p>
            </div>
            <div className="image-container">
              <img src={proj.image} alt={proj.title} aria-label={`Case study for ${proj.title}`} />
            </div>
          </a>
        ))}
      </div>
    </div>
    <style>{`
      
      .metrics-container {
        display: flex;
        gap: 2rem;
        margin: 1.5rem 0;
        flex-wrap: wrap;
      }
      .metric {
        flex: 1;
        min-width: 120px;
        text-align: left;
        padding: 0.5rem;
        border-left: 3px solid #005fcc;
      }
      .metric-value {
        font-size: 1.8rem;
        font-weight: 800;
        color: #005fcc;
        line-height: 1;
        margin-bottom: 0.3rem;
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }
      .metric-value span {
        display: inline-block;
        min-width: 2ch;
      }
      .metric-label {
        font-size: 0.9rem;
        color: #666;
        line-height: 1.2;
      }
      body.dark-mode .metric {
        border-left-color: #7ecbff;
      }
      body.dark-mode .metric-value {
        color: #7ecbff;
      }
      body.dark-mode .metric-label {
        color:rgb(225, 228, 235);
      }
      /* New rules: Force background for left-side data container */
      .latest-projects-list .card .inner {
        background:rgb(238, 251, 255) !important;
        position: relative;
        z-index: 2;
        padding: 1.5em !important;
      }
      body.dark-mode .latest-projects-list .card .inner {
        background: #222 !important;
      }
      /* Update image container to fit image properly */
      .latest-projects-list .card .image-container {
        position: relative;
        z-index: 1;
        width: 100%;
        aspect-ratio: 1 / 1;
        overflow: hidden;
      }
      .latest-projects-list .card .image-container img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* Changed to show full image */
        transition: transform 0.3s;
      }

      @media (max-width: 768px) {
        .metrics-container {
          gap: 1rem;
        }
        .metric {
          min-width: 100px;
        }
        .metric-value {
          font-size: 1.5rem;
        }
        .metric-label {
          font-size: 0.8rem;
        }
        .section-heading {
          font-size: 1.2rem;
        }
      }
    `}</style>
  </section>
);

export default LatestProjects;

