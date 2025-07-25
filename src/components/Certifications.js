import React from 'react';

const Certifications = () => (
  <section id="certifications" className="certifications-section" aria-labelledby="certifications-heading">
    <div className="container">
      <h2 id="certifications-heading" className="fade-in-up">CERTIFICATIONS</h2>
      <p className="certifications-description fade-in-up">
        Demonstrating achieved proficiency through industry-standard certifications.
        Reflects a dedication to expanding knowledge and advancing professional capabilities.
      </p>
      <div className="certifications-grid">
        <div className="certification-card">
          <img 
            src="images/Certifications/Google_2015_logo.svg.webp"
            alt="Google Logo - Google UX Design Professional Certification"
            aria-label="Google UX Design Professional Certificate"
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
          />
          <div className="cert-details">
            <h4>Google UX Design Professional Certificate</h4>
            <div className="cert-meta">
              <span className="cert-issuer">Google (Coursera)</span>
              <span className="cert-date">Issued May 2024</span>
              <span className="cert-id">Credential ID: NFQK4NZTWCCT</span>
            </div>
            <a href="https://www.coursera.org/account/accomplishments/verify/NFQK4NZTWCCT" className="cert-link" target="_blank" rel="noopener">Show Credential</a>
          </div>
        </div>
        <div className="certification-card">
          <img 
            src="images/Certifications/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.webp"
            alt="Google Logo - UX Design Process Certificate"
            aria-label="Google UX Design Process Certificate"
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
          />
          <div className="cert-details">
            <h4>Start the UX Design Process: Empathize, Define, and Ideate</h4>
            <div className="cert-meta">
              <span className="cert-issuer">Google (Coursera)</span>
              <span className="cert-date">Issued May 2024</span>
              <span className="cert-id">Credential ID: SFL7JUQT8E76</span>
            </div>
            <a href="https://www.coursera.org/account/accomplishments/verify/SFL7JUQT8E76" className="cert-link" target="_blank" rel="noopener">Show Credential</a>
          </div>
        </div>
        <div className="certification-card">
          <img 
            src="images/Certifications/images.webp" 
            alt="California Institute of the Arts Professional Certificate logo" 
            aria-label="California Institute of the Arts Professional Certificate logo"
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
          />
          <div className="cert-details">
            <h4>Visual Elements of User Interface Design</h4>
            <div className="cert-meta">
              <span className="cert-issuer">California Institute of the Arts</span>
              <span className="cert-date">Issued June 2024</span>
              <span className="cert-id">Credential ID: X8CFKVUNYMDP</span>
            </div>
            <a href="https://www.coursera.org/account/accomplishments/verify/6BLWJ96ZGK2Y" className="cert-link" target="_blank" rel="noopener">Show Credential</a>
          </div>
        </div>
        <div className="certification-card">
          <img 
            src="images/Certifications/images (1).webp" 
            alt="ADVANCED C++ " 
            aria-label="ADVANCED C++ certificate logo"
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
          />
          <div className="cert-details">
            <h4>ADVANCED C++ </h4>
            <div className="cert-meta">
              <span className="cert-issuer">NIIT Limited</span>
              <span className="cert-date">Issued Oct 2022</span>
              <span className="cert-id">Credential ID: 16APZZZZZ3322</span>
            </div>
            <a href="https://www.niit.com/india/" className="cert-link" target="_blank" rel="noopener">Show Credential</a>
          </div>
        </div>
        <div className="certification-card">
          <img 
            src="images/Certifications/coursera-rebrand-logo-square.webp" 
            alt="Human-Computer Interaction" 
            aria-label="Coursera Project Network logo"
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
          />
          <div className="cert-details">
            <h4>Work with Components in Figma</h4>
            <div className="cert-meta">
              <span className="cert-issuer">Coursera Project Network</span>
              <span className="cert-date">Issued June 2024</span>
              <span className="cert-id">Credential ID: X8CFKVUNYMDP</span>
            </div>
            <a href="https://www.coursera.org/account/accomplishments/verify/X8CFKVUNYMDP" className="cert-link" target="_blank" rel="noopener">Show Credential</a>
          </div>
        </div>
        <div className="certification-card">
          <img 
            src="images/Certifications/2313123.png" 
            alt="Human-Computer Interaction" 
            aria-label="Data Analysis by Microsoft and LinkedIn"
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
          />
          <div className="cert-details">
            <h4>Data Analysis by Microsoft </h4>
            <div className="cert-meta">
              <span className="cert-issuer">Microsoft</span>
              <span className="cert-date">Issued June 2025</span>
              <span className="cert-id">Credential ID: XKCFK56NYMDP</span>
            </div>
            <a href="https://www.linkedin.com/learning/certificates/d9cc965263f02209ed591c10c6d9260486b7636b7cd42167f1d0a814f9bdb80e" className="cert-link" target="_blank" rel="noopener">Show Credential</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Certifications;
