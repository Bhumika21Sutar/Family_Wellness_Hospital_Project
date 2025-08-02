import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      image: "/assets/H1.png",
      title: "Emergency Care",
      description:
        "24/7 emergency medical services with rapid response and critical care capabilities.",
    },
    {
      image: "/assets/Cardio.png",
      title: "Cardiology",
      description:
        "Comprehensive heart care services including diagnostics, treatment, and cardiac rehabilitation.",
    },
    {
      image: "/assets/neuro.png",
      title: "Neurology",
      description:
        "Advanced neurological care for brain, spine, and nervous system disorders.",
    },
    {
      image: "/assets/Ortho.png",
      title: "Orthopedics",
      description:
        "Expert care for bone, joint, and musculoskeletal conditions with modern treatment options.",
    },
    {
      image: "/assets/Pedi.png",
      title: "Pediatrics",
      description:
        "Specialized healthcare services for infants, children, and adolescents.",
    },
    {
      image: "/assets/H6.png",
      title: "General Medicine",
      description:
        "Comprehensive primary care services for routine health maintenance and illness treatment.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 10 sec
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex + 3 < services.length) {
      setCurrentIndex(currentIndex + 3);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    } else {
      setCurrentIndex(services.length - (services.length % 3 || 3));
    }
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="section-title">Our Medical Services</h2>
        <p className="section-description">
          We offer a comprehensive range of medical services delivered by
          experienced healthcare professionals using state-of-the-art technology
          and equipment.
        </p>

        <div className="carousel-wrapper">
          {/* Left Arrow */}
          <button onClick={prevSlide} className="carousel-btn left">
            <FaChevronLeft />
          </button>

          {/* Carousel */}
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
                  .slice(currentIndex, currentIndex + 3)
                  .map((service, index) => (
                    <div key={index} className="service-card">
                      <div className="service-image">
                        <img src={service.image} alt={service.title} />
                      </div>
                      <div className="service-content">
                        {/* <span className="service-category">
                          MEDICAL, DENTAL, HEALTH
                        </span> */}
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button onClick={nextSlide} className="carousel-btn right">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
