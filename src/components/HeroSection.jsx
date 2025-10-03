import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.95,
  },
};

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          <span className="welcome-text">
            Welcome
            <br />
            To <br />
          </span>
          <span className="hospital-name">Family Wellness Hospital</span>
        </h1>

        <p className="hero-description">
          A newly constructed, state-of-the-art healthcare facility in
          Bharkatta, Saranda. We are ready to serve our community with modern
          medical care and allopathy system of medicine service.
        </p>

        <div className="hero-buttons">
          <motion.a
            href="#contact"
            className="btn btn-primary"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            custom={0}
          >
            <i className="fas fa-calendar-check"></i>
            Book Appointment
          </motion.a>

          <motion.a
            href="#services"
            className="btn btn-secondary"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            custom={1}
          >
            <i className="fas fa-ambulance"></i>
            Emergency Care
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
