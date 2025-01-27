// components/Footer.tsx
import React from "react";
import "../styles/footer.css";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-logo">
            <h1 className="footer-logo-text">Cherishables</h1>
          </div>
          <div className="footer-links">
            <a href="/" aria-label="Home">
              Home
            </a>
            <a href="/about" aria-label="About Us">
              About
            </a>
            <a href="/gallery" aria-label="Catalogue">
              Catalogue
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-line"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>©2024 - Cherishables. All Rights Reserved.</p>
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
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/cherishables_/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company/cherishables-co"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/cherishables.art"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
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
