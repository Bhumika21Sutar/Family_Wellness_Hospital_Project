// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "./ServicesSection.css";

// const ServicesSection = () => {
//   const services = [
//     {
//       image: "/assets/H1.png",
//       title: "Dermatology",
//       description:
//         "Comprehensive care for skin, hair, and nail conditions, including medical and cosmetic treatments.",
//     },
//     {
//       image: "/assets/Cardio.png",
//       title: "Cosmestology",
//       description:
//         "Advanced cosmetic procedures to enhance appearance, skin health, and overall beauty.",
//     },
//     {
//       image: "/assets/neuro.png",
//       title: "ENT surgery",
//       description:
//         "Expert care for ear, nose, and throat disorders with both medical and surgical solutions.",
//     },
//     {
//       image: "/assets/Ortho.png",
//       title: "Audiology",
//       description:
//         "Hearing evaluations and therapies to improve communication and auditory health.",
//     },
//     {
//       image: "/assets/Pedi.png",
//       title: "Hearing AID",
//       description:
//         "Customized hearing aid fittings and solutions for better hearing and quality of life.",
//     },
//     {
//       image: "/assets/H6.png",
//       title: "Ortho Surgery",
//       description:
//         "Expert care for bone, joint, and musculoskeletal conditions with modern treatment options.",
//     },

//     {
//       image: "/assets/H1.png",
//       title: "Urology",
//       description:
//         "Specialized treatment for urinary tract and male reproductive health conditions.",
//     },
//     {
//       image: "/assets/Cardio.png",
//       title: "Pediatrics & Nanetology",
//       description:
//         "Specialized healthcare services for infants, children, and adolescents.",
//     },
//     {
//       image: "/assets/neuro.png",
//       title: "General Surgery",
//       description:
//         "Surgical care for a wide range of conditions requiring operative treatment.",
//     },
//     {
//       image: "/assets/H6.png",
//       title: "General Medicine",
//       description:
//         "Comprehensive primary care services for routine health maintenance and illness treatment.",
//     },
//     {
//       image: "/assets/Pedi.png",
//       title: "General Health Checkup",
//       description:
//         "Comprehensive preventive health assessments for early detection of diseases.",
//     },
//     {
//       image: "/assets/H6.png",
//       title: "Opthalmology",
//       description:
//         "Eye care services including vision correction, eye disease management, and surgeries.",
//     },

//     {
//       image: "/assets/H1.png",
//       title: "Diabetology & Thyroid Specialist",
//       description:
//         "Focused care for diabetes, thyroid disorders, and related metabolic conditions.",
//     },
//     {
//       image: "/assets/Cardio.png",
//       title: "Emergency Medicine Physician",
//       description:
//         "24/7 urgent medical care for accidents, trauma, and life-threatening conditions.",
//     },
//     {
//       image: "/assets/neuro.png",
//       title: "Pharmacy",
//       description:
//         "In-house pharmacy providing reliable access to prescribed medicines and health products.",
//     },
//     {
//       image: "/assets/neuro.png",
//       title: "Pathology",
//       description:
//         "Accurate laboratory testing and diagnostics for effective treatment planning.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsPerSlide, setCardsPerSlide] = useState(3);

//   // ✅ Update cards per slide on screen resize
//   useEffect(() => {
//     const updateCardsPerSlide = () => {
//       if (window.innerWidth <= 600) {
//         setCardsPerSlide(1); // mobile
//       } else if (window.innerWidth <= 900) {
//         setCardsPerSlide(2); // tablet
//       } else {
//         setCardsPerSlide(3); // desktop
//       }
//     };

//     updateCardsPerSlide();
//     window.addEventListener("resize", updateCardsPerSlide);

//     return () => window.removeEventListener("resize", updateCardsPerSlide);
//   }, []);

//   // Auto-slide every 10 sec
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 10000);
//     return () => clearInterval(interval);
//   }, [currentIndex, cardsPerSlide]);

//   const nextSlide = () => {
//     if (currentIndex + cardsPerSlide < services.length) {
//       setCurrentIndex(currentIndex + cardsPerSlide);
//     } else {
//       setCurrentIndex(0);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex - cardsPerSlide >= 0) {
//       setCurrentIndex(currentIndex - cardsPerSlide);
//     } else {
//       setCurrentIndex(
//         services.length - (services.length % cardsPerSlide || cardsPerSlide)
//       );
//     }
//   };

//   return (
//     <section className="services-section">
//       <div className="services-container">
//         <h2 className="section-title" id="services">
//           Our Medical Services
//         </h2>
//         <p className="section-description">
//           We offer a comprehensive range of medical services delivered by
//           experienced healthcare professionals using state-of-the-art technology
//           and equipment.
//         </p>

//         <div className="carousel-wrapper">
//           {/* Left Arrow */}
//           <button onClick={prevSlide} className="carousel-btn left">
//             <FaChevronLeft />
//           </button>

//           {/* Carousel */}
//           <div className="carousel">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 className="carousel-track"
//                 initial={{ x: 100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -100, opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {services
//                   .slice(currentIndex, currentIndex + cardsPerSlide)
//                   .map((service, index) => (
//                     <div key={index} className="service-card">
//                       <div className="service-image">
//                         <img src={service.image} alt={service.title} />
//                       </div>
//                       <div className="service-content">
//                         {/* <span className="service-category">
//                           MEDICAL, DENTAL, HEALTH
//                         </span> */}
//                         <h3>{service.title}</h3>
//                         <p>{service.description}</p>
//                       </div>
//                     </div>
//                   ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Right Arrow */}
//           <button onClick={nextSlide} className="carousel-btn right">
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ServicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      image: "/assets/Blur.png",
      title: "Dermatology",
      description:
        "Comprehensive care for skin, hair, and nail conditions, including medical and cosmetic treatments.",
    },
    {
      image: "/assets/Blur.png",
      title: "Cosmestology",
      description:
        "Advanced cosmetic procedures to enhance appearance, skin health, and overall beauty.",
    },
    {
      image: "/assets/Blur.png",
      title: "ENT Surgery",
      description:
        "Expert care for ear, nose, and throat disorders with both medical and surgical solutions.",
    },
    {
      image: "/assets/Blur.png",
      title: "Audiology",
      description:
        "Hearing evaluations and therapies to improve communication and auditory health.",
    },
    {
      image: "/assets/Blur.png",
      title: "Hearing AID",
      description:
        "Customized hearing aid fittings and solutions for better hearing and quality of life.",
    },
    {
      image: "/assets/Blur.png",
      title: "Ortho Surgery",
      description:
        "Expert care for bone, joint, and musculoskeletal conditions with modern treatment options.",
    },

    {
      image: "/assets/Blur.png",
      title: "Urology",
      description:
        "Specialized treatment for urinary tract and male reproductive health conditions.",
    },
    {
      image: "/assets/Blur.png",
      title: "Pediatrics & Nanetology",
      description:
        "Specialized healthcare services for infants, children, and adolescents.",
    },
    {
      image: "/assets/Blur.png",
      title: "General Surgery",
      description:
        "Surgical care for a wide range of conditions requiring operative treatment.",
    },
    {
      image: "/assets/Blur.png",
      title: "General Medicine",
      description:
        "Comprehensive primary care services for routine health maintenance and illness treatment.",
    },
    {
      image: "/assets/Blur.png",
      title: "General Health Checkup",
      description:
        "Comprehensive preventive health assessments for early detection of diseases.",
    },
    {
      image: "/assets/Blur.png",
      title: "Opthalmology",
      description:
        "Eye care services including vision correction, eye disease management, and surgeries.",
    },

    {
      image: "/assets/Blur.png",
      title: "Diabetology & Thyroid Specialist",
      description:
        "Focused care for diabetes, thyroid disorders, and related metabolic conditions.",
    },
    {
      image: "/assets/Blur.png",
      title: "Emergency Medicine Physician",
      description:
        "24/7 urgent medical care for accidents, trauma, and life-threatening conditions.",
    },
    {
      image: "/assets/Blur.png",
      title: "Pharmacy",
      description:
        "In-house pharmacy providing reliable access to prescribed medicines and health products.",
    },
    {
      image: "/assets/Blur.png",
      title: "Pathology",
      description:
        "Accurate laboratory testing and diagnostics for effective treatment planning.",
    },
  ];

  const upcomingServices = [
    { title: "Laser - Fractional CO2", logo: "/assets/Blur.png" },
    { title: "NdYAG", logo: "/assets/Blur.png" },
    { title: "Hair Removal Laser", logo: "/assets/Blur.png" },
    { title: "Hollywood Spectra Peel", logo: "/assets/Blur.png" },
    { title: "MNRF", logo: "/assets/Blur.png" },
    { title: "Hydrafacial", logo: "/assets/Blur.png" },
    { title: "HIFU", logo: "/assets/Blur.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth <= 600) setCardsPerSlide(1);
      else if (window.innerWidth <= 900) setCardsPerSlide(2);
      else setCardsPerSlide(3);
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);

    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex, cardsPerSlide]);

  const nextSlide = () => {
    if (currentIndex + cardsPerSlide < services.length) {
      setCurrentIndex(currentIndex + cardsPerSlide);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex - cardsPerSlide >= 0) {
      setCurrentIndex(currentIndex - cardsPerSlide);
    } else {
      setCurrentIndex(
        services.length - (services.length % cardsPerSlide || cardsPerSlide)
      );
    }
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="section-title" id="services">
          Our Medical Services
        </h2>
        <p className="section-description">
          We offer a comprehensive range of medical services delivered by
          experienced healthcare professionals using state-of-the-art technology
          and equipment.
        </p>

        <div className="carousel-wrapper">
          <button onClick={prevSlide} className="carousel-btn left">
            <FaChevronLeft />
          </button>

          <div className="carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="carousel-track"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {services
                  .slice(currentIndex, currentIndex + cardsPerSlide)
                  .map((service, index) => (
                    <div key={index} className="service-card">
                      <div className="service-image">
                        <img src={service.image} alt={service.title} />
                      </div>
                      <div className="service-content">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={nextSlide} className="carousel-btn right">
            <FaChevronRight />
          </button>
        </div>

        {/* Upcoming Services Section */}
        <motion.div
          id="up-services"
          className="join-team"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>
            Upcoming <span className="highlight">Services</span>{" "}
          </h3>
          <div className="upcoming-services-grid">
            {upcomingServices.map((service, index) => (
              <div key={index} className="service-box">
                <img src={service.logo} alt={service.title} />
                <span>{service.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
