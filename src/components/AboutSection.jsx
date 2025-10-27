// import React from "react";
// import { motion } from "framer-motion";
// import "./AboutSection.css";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const AboutSection = () => {
//   return (
//     <section id="about" className="about-section">
//       <div className="about-container">
//         <motion.h2
//           className="section-title"
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeInUp}
//           viewport={{ once: true }}
//         >
//           About Family Wellness Hospital
//         </motion.h2>

//         <motion.p
//           className="section-description"
//           initial="hidden"
//           whileInView="visible"
//           custom={1}
//           variants={fadeInUp}
//           viewport={{ once: true }}
//         >
//           That’s wonderful news! We are thrilled to announce the completion of
//           our new 50-bedded hospital facility, ready to serve your community.
//           Family Wellness Hospital is equipped to provide comprehensive care
//           across General Medicine, Surgery, and Maternity services.
//           <br />
//           At Family Wellness Hospital, we believe healthcare goes beyond just
//           treating illness—it’s about nurturing long-term well-being for every
//           member of your family.{" "}
//           <b>
//             Our vision - Providing safe and trusted healthcare for all, near
//             your home.
//           </b>
//           <br />
//           We are committed to serving families of all ages, providing
//           accessible, high-quality medical expertise right here in our village.
//           From routine check-ups to specialized care, our team is here to
//           support your health journey at every stage of life.
//           <br />
//           {/* <b>
//             Family Wellness Hospital: Where Every Family Member Thrives.
//           </b>{" "}
//           <br />
//           Partner in Health, For Every Stage of Life.
//           <br />
//           Healing, Wellness, and Community: All Under One Roof
//           <br />
//           Comprehensive Care, Comforting Touch
//           <br />
//           Focused on Families. Focused on You.
//           <br /> */}
//           <b>
//             {" "}
//             We are dedicated to the health and well-being of your
//             community,working every day for a healthier tomorrow.
//           </b>
//         </motion.p>

//         <div className="about-content">
//           <motion.div
//             className="mission-vision"
//             initial="hidden"
//             whileInView="visible"
//             custom={2}
//             variants={fadeInUp}
//             viewport={{ once: true }}
//           >
//             <h3>Our Mission & Vision</h3>
//             <p>
//               We strive to deliver comprehensive, compassionate healthcare
//               services that improve the quality of life for our patients and
//               their families. Our commitment extends beyond treatment to include
//               prevention, education, and community wellness.
//             </p>
//             <ul className="mission-list">
//               {[
//                 "Patient-Centered Care - Putting your health and comfort first",
//                 "Complete Medical Care – All basic health needs under one roof.",
//                 "Expert Team - Highly qualified and experienced healthcare professionals",
//               ].map((item, index) => (
//                 <motion.li
//                   key={index}
//                   className="animated-list"
//                   custom={index + 3}
//                   variants={fadeInUp}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 >
//                   <i className="fa-regular fa-circle-check"></i>
//                   <span>{item}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           <div className="values-grid">
//             {[
//               {
//                 icon: "fas fa-heart",
//                 title: "Compassion",
//                 desc: "We treat every patient with empathy, kindness, and understanding.",
//               },
//               {
//                 icon: "fas fa-shield-alt",
//                 title: "Safety",
//                 desc: "Maintaining the highest standards of safety and hygiene in all our services.",
//               },
//               {
//                 icon: "fas fa-star",
//                 title: "Excellence",
//                 desc: "Striving for excellence in every aspect of healthcare delivery.",
//               },
//               {
//                 icon: "fas fa-users",
//                 title: "Community",
//                 desc: "Serving our community with dedication and building lasting relationships.",
//               },
//             ].map((value, index) => (
//               <motion.div
//                 className="value-card"
//                 key={index}
//                 custom={index + 4}
//                 variants={fadeInUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 <div className="value-icon">
//                   <i className={value.icon}></i>
//                 </div>
//                 <h4>{value.title}</h4>
//                 <p>{value.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

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
          our new 50-bedded hospital facility, ready to serve your community.
          Family Wellness Hospital is equipped to provide comprehensive care
          across General Medicine, Surgery, and Maternity services.
          <br />
          At Family Wellness Hospital, we believe healthcare goes beyond just
          treating illness. <br />
          <b>
            Our vision - Providing safe and trusted healthcare and all type of
            treatment, near your home.
          </b>
          <br />
          We are committed to serving families of all age groups, providing
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
            We are dedicated to the health and well-being of our community,
            working every day for your healthier tomorrow.
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
              To become the most trusted hospital in JUTHA AAM MORE, GIRIDIH
              ROAD, Bharkatta through dedication to innovation and excellence in
              healthcare delivered in a Respect for human dignity and autonomy
              and humanistic environment Patient-Centered Care complete
              ethicality and transparency in all our work Complete Medical Care
              committed team of staff, doctors and other healthcare
              professionals.
            </p>
            <ul className="mission-list">
              {[
                "Expert Team  led by renowned specialists, set benchmarks in quality",
                "Trusted choice for residents JUTHA AAM MORE, GIRIDIH ROAD, Bharkatta",
                "A Place Of Trust for Patient",
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
