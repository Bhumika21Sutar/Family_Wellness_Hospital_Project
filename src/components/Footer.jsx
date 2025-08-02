import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-square">
                {" "}
                <img
                  src="/assets/logoHealth.png"
                  alt="FWH Logo"
                  className="footer-img"
                />
              </div>
            </div>

            <div className="footer-description">
              Providing compassionate, comprehensive healthcare services to our
              community with state-of-the-art facilities and expert medical
              professionals.
            </div>

            {/* Social Media Icons */}
            <div className="footer-social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* ... Rest of your sections remain unchanged ... */}

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#services">Emergency Care</a>
              </li>
              <li>
                <a href="#services">Cardiology</a>
              </li>
              <li>
                <a href="#services">Neurology</a>
              </li>
              <li>
                <a href="#services">Orthopedics</a>
              </li>
              <li>
                <a href="#services">Pediatrics</a>
              </li>
              <li>
                <a href="#services">General Medicine</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>
                <i className="fas fa-map-marker-alt"></i> Jutha Aam More,
                Giridih Road Bharkatta, Saranda, Jharkhand-825324
              </p>
              <p>
                <i className="fas fa-phone"></i> +91 9892772233
              </p>
              <p>
                <i className="fas fa-envelope"></i>{" "}
                familywellnesshospital@gmail.com
              </p>
              <p>
                <i className="fas fa-clock"></i> Emergency: 24/7 | OPD: Mon–Fri,
                8AM–8PM
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Family Wellness Hospital. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#disclaimer">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
