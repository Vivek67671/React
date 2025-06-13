import React from 'react';

const LatestProjects = () => (
  <section id="latest-projects" className="latest-projects-section" aria-labelledby="latest-projects-heading">
    <div className="container">
      <h2 id="latest-projects-heading" className="section-heading">CASE STUDIES</h2>
      <p>
        I design products that solve real problems, not just look good.
        From research to rollout, every decision I make is backed by data, user insights, and a clear focus on impact. Dive into my case studies to see how I turn complex challenges into intuitive, high-performing digital experiences.
      </p>
      <div className="latest-projects-list">
        <a href="/case-study-4.html" className="card" role="article" aria-describedby="case-study-4-description" target="_blank" rel="noopener noreferrer">
          <div className="inner">
            <h3 className="title">Designing a Seamless Budget Management Experience – A UX Case Study</h3>
            <time className="subtitle">Cloud Budget Management</time>
            <p id="case-study-4-description">
              Ever since the shift to cloud-based infrastructure, there has been a trend in the industry to rely on multiple cloud providers to either have infrastructure backup or use particular capabilities offered by one provider while maintaining the majority of their infrastructure with another.
              This calls for a mechanism to set spending limits among these cloud providers as well as an overview of how one’s cloud budget is being allocated across various cloud service providers.
            </p>
          </div>
          <div className="image-container">
            <img src="images/Case Study Sliders  Image Containers/case study 4.webp" alt="Budget Management" aria-label="Case study for Budget Management" />
          </div>
        </a>

        <a href="/case-study-1.html" className="card" role="article" aria-describedby="case-study-1-description" target="_blank" rel="noopener noreferrer">
          <div className="inner">
            <h3 className="title">Designing for ariants a UX case study</h3>
            <time className="subtitle" dateTime="2023">Online Services App</time>
            <p id="case-study-1-description">
              The problem involved designing the flow for the user to buy multiple variants of a product
              which has staggered pricing and at the same time ensuring that she is making a good deal (i.e.
              Value for money).
            </p>
          </div>
          <div className="image-container">
            <img src="images/Case Study Sliders  Image Containers/Download File.png" alt="Online Services App" aria-label="Case study for Online Services App" />
          </div>
        </a>

        <a href="/case-study-2.html" className="card" role="article" aria-describedby="case-study-2-description" target="_blank" rel="noopener noreferrer">
          <div className="inner">
            <h3 className="title">Designing a better checkout experience a UX/UI case study</h3>
            <time className="subtitle">UX/UI case study</time>
            <p id="case-study-2-description">
              Designing a better checkout experience — a UX/UI case study.
              This case study focuses on improving the checkout process for an e-commerce website. The goal
              was to reduce cart abandonment rates by simplifying the checkout process and making it more
              intuitive for users. We conducted extensive user research and usability testing to identify
              pain points and areas for improvement. The final design incorporated a streamlined checkout
              flow, clear and concise instructions, and a variety of payment options to cater to different
              user preferences.
            </p>
          </div>
          <div className="image-container">
            <img src="images/Case Study Sliders  Image Containers/case 2.png" alt="Checkout Experience" aria-label="Case study for Checkout Experience" />
          </div>
        </a>

        <a href="/case-study-3.html" className="card" role="article" aria-describedby="case-study-3-description" target="_blank" rel="noopener noreferrer">
          <div className="inner">
            <h3 className="title">UI/UX Case Study SaaS Website Redesign</h3>
            <time className="subtitle">Revamping of a Cloud Platform</time>
            <p id="case-study-3-description">
              A strong digital presence is key in our highly competitive environment and this story is about a
              2-month journey we took as designers to reimagine a 3-year-old website for a fresh, new,
              updated one. This project was driven by the need to align our online presence, with the
              changing B2B SaaS market and the limitations found in our current website.
            </p>
          </div>
          <div className="image-container">
            <img src="images/Case Study Sliders  Image Containers/case 3.png" alt="SaaS Website Redesign" aria-label="Case study for SaaS Website Redesign" />
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default LatestProjects;
