import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="about-us"
      className="about-us-section"
      aria-labelledby="about-us-heading"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: 0.05 }}
    >
      <div className="container">
        <motion.h2
          id="about-us-heading"
          className="fade-in-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.08 }}
        >
          {t("ABOUT")}
        </motion.h2>
        <motion.div
          className="text-container fade-in-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.12 }}
        >
          <motion.p
            className="large-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.16 }}
          >
            {t("Hey, I’m Vivek Kumar — a Product Designer passionate about creating intuitive, user-centered digital experiences that solve real problems and drive business outcomes.")}
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-gray-600 dark:text-white"
            style={{ fontDisplay: 'swap' }} // Ensure font is visible even before fully loaded
            initial={{ opacity: 0, y: 10 }} // Reduce animation distance
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.1 }} // Reduce animation delay
          >
            {t("I design with people at the center, creating intuitive, seamless, and accessible experiences. Every detail follows WCAG standards and best practices from Apple, Microsoft, and Google. My goal is to build inclusive, trustworthy digital products for everyone.")}
          </motion.p>
          <div className="collaboration-container">
            <motion.p
              className="large-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.24 }}
            >
              {t("Let’s collaborate and bring your ideas to life!")}
            </motion.p>
          </div>
          <motion.a
            href="https://www.linkedin.com/in/vivek-kumar-463a19244/"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            aria-label="Connect with Vivek"
            className="connect-now-btn"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.28 }}
            whileHover={{ scale: 1.07 }}
          >
            Connect Now
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
