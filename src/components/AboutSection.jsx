import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

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
          That’s wonderful news! We are thrilled to announce the completion of
          our new 50-bedded hospital facility, ready to serve our community.
          Family Wellness Hospital is equipped to provide comprehensive care
          across General Medicine, Surgery, and Maternity services.
          <br />
          At Family Wellness Hospital, we believe healthcare goes beyond just
          treating illness—it’s about nurturing long-term well-being for every
          member of your family. Our vision is simple: a healthy community
          begins with healthy families.
          <br />
          We are committed to serving families of all ages, providing
          accessible, high-quality medical expertise right here in our village.
          From routine check-ups to specialized care, our team is here to
          support your health journey at every stage of life.
          <br />
          {/* <b>
            Family Wellness Hospital: Where Every Family Member Thrives.
          </b>{" "}
          <br />
          Partner in Health, For Every Stage of Life.
          <br />
          Healing, Wellness, and Community: All Under One Roof
          <br />
          Comprehensive Care, Comforting Touch
          <br />
          Focused on Families. Focused on You.
          <br /> */}
          <b>
            {" "}
            As your neighbors, we are dedicated to the health and vitality of
            our community. Together, let’s build a healthier tomorrow—one
            family at a time.
          </b>
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
