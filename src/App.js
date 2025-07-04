import React from 'react';
import './style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Certifications from './components/Certifications';
import TrustedBrands from './components/TrustedBrands';
import Services from './components/Services';
import LatestProjects from './components/LatestProjects';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { MotionConfig } from 'framer-motion';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZVG3WZK5H9"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZVG3WZK5H9');
          `}
        </script>
      </Helmet>
      <MotionConfig transition={{ type: "spring", stiffness: 120, damping: 18 }}>
        <div className="App">
          <Preloader />
          <Header />
          <Hero />
          <AboutUs />
          <Certifications />
          <TrustedBrands />
          <LatestProjects />
          <Gallery />
          <Services />
          <Testimonials />
          <Contact />
          <Footer />
          {/* Other components go here */}
        </div>
      </MotionConfig>
    </>
  );
}

export default App;
