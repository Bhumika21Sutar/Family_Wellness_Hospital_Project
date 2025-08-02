import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          About Family Wellness Hospital
        </motion.h2>

        <motion.p
          className="section-description"
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Founded with a mission to provide exceptional healthcare services, we
          are committed to the health and wellness of our community.
        </motion.p>

        <div className="about-content">
          <motion.div
            className="mission-vision"
            initial="hidden"
            whileInView="visible"
            custom={2}
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h3>Our Mission & Vision</h3>
            <p>
              We strive to deliver comprehensive, compassionate healthcare
              services that improve the quality of life for our patients and
              their families. Our commitment extends beyond treatment to include
              prevention, education, and community wellness.
            </p>
            <ul className="mission-list">
              {[
                "Patient-Centered Care - Putting your health and comfort first",
                "Advanced Technology - State-of-the-art medical equipment and facilities",
                "Expert Team - Highly qualified and experienced healthcare professionals",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="animated-list"
                  custom={index + 3}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <i className="fa-regular fa-circle-check"></i>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="values-grid">
            {[
              {
                icon: "fas fa-heart",
                title: "Compassion",
                desc: "We treat every patient with empathy, kindness, and understanding.",
              },
              {
                icon: "fas fa-shield-alt",
                title: "Safety",
                desc: "Maintaining the highest standards of safety and hygiene in all our services.",
              },
              {
                icon: "fas fa-star",
                title: "Excellence",
                desc: "Striving for excellence in every aspect of healthcare delivery.",
              },
              {
                icon: "fas fa-users",
                title: "Community",
                desc: "Serving our community with dedication and building lasting relationships.",
              },
            ].map((value, index) => (
              <motion.div
                className="value-card"
                key={index}
                custom={index + 4}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
