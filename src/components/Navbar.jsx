import React, { useState, useEffect } from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
    setIsDownloadOpen(false);
  };

  const toggleDownload = (e) => {
    e.stopPropagation();
    setIsDownloadOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDownloadOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar")) {
        closeMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const formLinks = [
    {
      name: "1. Activity Record Card",
      url: "/forms/ACTIVITY RECORD CARD.pdf",
    },
    {
      name: "2. Consultant/RMO Visit Record",
      url: "/forms/CONSULTANT- RMO VISIT RECORD.pdf",
    },
    { name: "3. Discharge Summary", url: "/forms/DISCHARGE SUMMARY.pdf" },
    { name: "4. Injury Form", url: "/forms/INJURY REPORT FORM.pdf" },
    {
      name: "5. Intake-Output Record",
      url: "/forms/INTAKE - OUTPUT RECORD.pdf",
    },
    { name: "6. Vital Signs Record", url: "/forms/VITAL SIGNS RECORD.pdf" },
    {
      name: "7. Requilsition for Supply of Blood/Blood Components",
      url: "/forms/REQULSITION FOR SUPPLY OF BLOOD-BLOOD COMPONENTS.pdf",
    },
    {
      name: "8. Police Information",
      url: "/forms/POLICE INFORMATION.pdf",
    },
    {
      name: "9. Nursing Notes & Nursing Initial Assement Form",
      url: "/forms/NURSING INITIAL ASSESSMENT FORM.pdf",
    },
    {
      name: "10. Medicine Return Slip",
      url: "/forms/MEDICINE RETURN SLIP.pdf",
    },
    { name: "11. OPD Case Summary", url: "/forms/OPD CASE SUMMARY.pdf" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/assets/LogoFamily.png"
            alt="FWH Logo"
            className="logo-square"
          />
        </a>

        {/* Nav Links */}
        <ul className={`navbar-nav ${isMenuOpen ? "active" : ""}`}>
          {["Home", "About", "Services", "Team", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            </li>
          ))}

          {/* Download Dropdown */}
          <li className="download-menu">
            <button className="download-btn" onClick={toggleDownload}>
              Download
              <LiaDownloadSolid className="download-icon" />
            </button>
            <ul className={`download-dropdown ${isDownloadOpen ? "show" : ""}`}>
              {formLinks.map((form, index) => (
                <li key={index}>
                  <a href={form.url} download onClick={closeMenu}>
                    {form.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
