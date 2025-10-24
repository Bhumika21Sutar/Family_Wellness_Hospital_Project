import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import Contact from "./components/Contact";
import MapLoc from "./components/Maploc";
import Footer from "./components/Footer";
import AreaOfFocus from "./components/AreaOfFocus";
import FooterFix from "./components/FooterFix";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            navigate(`#${sectionId}`, { replace: true });
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [navigate]);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AreaOfFocus />
      <ServicesSection />
      <TeamSection />
      <Contact />
      <MapLoc />
      <Footer />
      <FooterFix />
    </div>
  );
}

export default App;
