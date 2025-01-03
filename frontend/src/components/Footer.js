// components/Footer.tsx
import React from "react";
import "../styles/footer.css"; // Import the CSS file for styling
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">
            <h1 className="footer-logo-text">Cherishables</h1>
          </div>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/gallery">Catalogue</a>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="footer-bottom">
          <p>
            ©2024 - Cherishables. All Rights Reserved. 
          </p>
          <p>
            All products displayed are for personal use and should not be used
            for any commercial purposes without prior consent.
          </p>
          <div className="footer-icons">
            <a
              href="https://wa.me/923252802878"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaWhatsapp className="social-icon whatsapp" />
            </a>
            <a
              href="https://www.instagram.com/cherishables_/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company/cherishables-co"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin className="social-icon linkedin"/>
            </a>
            <a
              href="https://www.facebook.com/cherishables.art"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
