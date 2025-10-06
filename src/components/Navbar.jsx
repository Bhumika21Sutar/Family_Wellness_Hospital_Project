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
    { name: "Registration Form", url: "/forms/Form1.pdf" },
    { name: "Application Form", url: "/forms/Form2.pdf" },
    { name: "Consent Form", url: "/forms/Form3.pdf" },
    { name: "Registration Form", url: "/forms/Form4.pdf" },
    { name: "Application Form", url: "/forms/Form5.pdf" },
    { name: "Consent Form", url: "/forms/Form6.pdf" },
    { name: "Registration Form", url: "/forms/Form7.pdf" },
    { name: "Application Form", url: "/forms/Form8.pdf" },
    { name: "Consent Form", url: "/forms/Form9.pdf" },
    { name: "Registration Form", url: "/forms/Form10.pdf" },
    { name: "Application Form", url: "/forms/Form11.pdf" },
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
