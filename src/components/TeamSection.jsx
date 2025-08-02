import React from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
  const founders = [
    {
      name: "Mr. Ruplal Narayan Saw",
      title: "FOUNDER",
      description:
        "Visionary leader with extensive experience in healthcare management and community service. Dedicated to bringing quality healthcare to rural areas.",
      avatar: "fas fa-user",
    },
    {
      name: "Mr. Munnalal Narayan Saw",
      title: "CO-FOUNDER",
      description:
        "Experienced administrator with a passion for healthcare accessibility. Focuses on operational excellence and patient satisfaction.",
      avatar: "fas fa-user",
    },
    {
      name: "Mr. Fulendra Narayan Saw",
      title: "CO-FOUNDER",
      description:
        "Strategic planner and healthcare advocate committed to establishing world-class medical facilities in underserved communities.",
      avatar: "fas fa-user",
    },
    {
      name: "Mr. Sunil Narayan Saw",
      title: "CO-FOUNDER",
      description:
        "Healthcare entrepreneur with deep understanding of medical infrastructure and community healthcare needs.",
      avatar: "fas fa-user",
    },
  ];

  const administration = [
    {
      name: "Mr. Gaurav Pradeep Naik",
      title: "COMMERCIAL ADMINISTRATOR",
      description:
        "Expert in healthcare business operations, financial management, and ensuring efficient hospital administration.",
      avatar: "fas fa-user-tie",
    },
    {
      name: "Mr. Gulab Ramshiromani Yadav",
      title: "DOCTOR'S ADMINISTRATOR",
      description:
        "Skilled in medical staff coordination, scheduling, and maintaining high standards of medical care delivery.",
      avatar: "fas fa-user-tie",
    },
  ];

  const medicalTeam = [
    {
      name: "Dr. Abhishek Kumar Yadav",
      title: "General Medicine",
      description:
        "Experienced physician specializing in comprehensive primary care, preventive medicine, and treatment of acute and chronic conditions.",
      avatar: "fas fa-user-md",
      isDoctor: true,
    },
    {
      name: "Dr. Manish Kamdeo Ranawat-Pandey",
      title: "Internal Medicine",
      description:
        "Internal medicine specialist with expertise in diagnosing and treating adult diseases, with focus on holistic patient care.",
      avatar: "fas fa-user-md",
      isDoctor: true,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const TeamCard = ({ member, showDoctorLabel = false, isFounder = false }) => (
    <motion.div
      className={`team-card ${isFounder ? "founder-card" : ""}`}
      variants={fadeInUp}
    >
      <div className={`team-avatar ${isFounder ? "founder-avatar" : ""}`}>
        <i className={member.avatar}></i>
      </div>
      <h4>{member.name}</h4>
      <p className="team-title">{member.title}</p>
      {showDoctorLabel && <span className="doctor-label">DOCTOR</span>}
      <p className="team-description">{member.description}</p>
    </motion.div>
  );

  return (
    <motion.section
      id="team"
      className="team-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="team-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Leadership Team
        </motion.h2>

        <motion.p
          className="section-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Meet the dedicated professionals who lead Family Wellness Hospital
          with vision, expertise, and commitment to excellence in healthcare.
        </motion.p>

        {/* Founders Section */}
        <div className="team-category founders-section">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Founders
          </motion.h3>
          <motion.div
            className="founders-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {founders.map((member, index) => (
              <TeamCard key={index} member={member} isFounder={true} />
            ))}
          </motion.div>
        </div>

        {/* Administration Section */}
        <div className="team-category">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Administration
          </motion.h3>
          <motion.div
            className="team-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {administration.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </motion.div>
        </div>

        {/* Medical Team Section */}
        <div className="team-category">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Medical Team
          </motion.h3>
          <motion.div
            className="team-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {medicalTeam.map((member, index) => (
              <TeamCard
                key={index}
                member={member}
                showDoctorLabel={member.isDoctor}
              />
            ))}
          </motion.div>
        </div>

        {/* Join Section */}
        <motion.div
          className="join-team"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Join Our Team</h3>
          <p>
            We are always looking for passionate healthcare professionals to
            join our mission of providing
            <br />
            exceptional care to our community.
          </p>
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-briefcase"></i>
            View Career Opportunities
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
