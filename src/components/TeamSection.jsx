import React from "react";
import { motion } from "framer-motion";
import "./TeamSection.css";
import JoinTeam from "./JoinTeam";

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
      name: "Mr.Pradeep B. Naik",
      title: "COMMERCIAL ADMINISTRATOR",
      description:
        "Expert in healthcare business operations, financial management, and ensuring efficient hospital administration.",
      avatar: "fas fa-user-tie",
    },
  ];

  const medicalTeam = [
    {
      name: "Dr. Manish Ranawat",
      title: "M.B.B.S. (General Physician)",
      description:
        "Treats common illnesses and provides general health care (सामान्य बीमारियों का इलाज और सामान्य स्वास्थ्य देखभाल)",
      avatar: "fas fa-user-tie",
    },
    {
      name: "Dr. Vinay Kumar",
      title: "M.B.B.S. (Patna)-General Physician & Ortho Specialist",
      description:
        "Treats common illnesses and bone or joint-related problems (सामान्य बीमारियों का इलाज और हड्डी-जोड़ों से जुड़ी समस्याओं का उपचार)",
      avatar: "fas fa-user-tie",
    },
    {
      name: "Dr. Suresh Choudhary",
      title: "M.B.B.S. (Patna)-General Physician",
      description: "Treats common illnesses and provides general health care",
      avatar: "fas fa-user-tie",
    },
    {
      name: "Dr. Nikhil Agarwal",
      title: "B.D.S (Kanpur)",
      description:
        "Treats teeth and mouth-related problems (दाँत रोग विशेषज्ञ)",
      avatar: "fas fa-user-tie",
    },
    {
      name: "Dr. Chanchala",
      title: "M.B.B.S. (PMCH, Dhanbad)",
      description:
        "Specialist in Women, Maternity & Child Care (स्त्री, प्रसूति एवं शिशु रोग विशेषज्ञ)-Ex-RMO (ICU) Ward,Asarfi Hospital,Dhanbad, Ex-RMO (NICU) Ward Asain Hospital)",
      avatar: "fas fa-user-md",
      isDoctor: true,
    },
    {
      name: "Dr. Biplav Shastri",
      title: "M.B.B.S. (Kanpur)",
      description:
        "Child Specialist / Pediatrician – Treats illnesses in children (शिशु रोग विशेषज्ञ)",
      avatar: "fas fa-user-md",
      isDoctor: true,
    },
    {
      name: "Dr. Anuradha Shipra",
      title: "CCU,NICU(Asian Jalan Hospital)",
      description:
        "Women’s & Maternity Care-स्त्री एवं प्रसूति रोग विशेषज्ञ (महिला एवं गर्भ संबंधी इलाज)",
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
        {/* <div className="team-category">
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
        </div> */}

        <div className="team-category founders-section">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Medical Team
          </motion.h3>
          <motion.div
            className="founders-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {medicalTeam.map((member, index) => (
              <TeamCard key={index} member={member} isFounder={true} />
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
          {/* <h3>Join Our Team</h3>
          <p>
            We are always looking for passionate healthcare professionals to
            join our mission of providing
            <br />
            exceptional care to our community.
          </p>
          <a href="#" className="btn btn-primary">
            <i className="fas fa-briefcase"></i>
            View Career Opportunities
          </a> */}
          <h3>Join Our Team</h3>
          <p>
            We are always looking for passionate healthcare professionals to
            join our mission of providing
            <br />
            exceptional care to our community.
          </p>
          <JoinTeam />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
