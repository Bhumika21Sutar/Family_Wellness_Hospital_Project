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
          <b>
            Providing complete care for your family’s health with trusted
            doctors and 24/7 Emergency Service in Jutha Aam, Bharkatta.
          </b>
          <br />
          New Jutha Aam & Bharkatta Community Medical Centre now offers easy
          online appointment booking. Find a Doctor, Call Emergency: 9821772233
        </p>

        <div className="hero-buttons">
          {/* <motion.a
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
          </motion.a> */}

          <motion.a
            href="https://calendly.com/indicationtechnology/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
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
