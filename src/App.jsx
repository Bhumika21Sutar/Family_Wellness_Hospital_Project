import React from "react";
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
