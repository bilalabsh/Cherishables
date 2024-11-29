// components/Footer.tsx
import React from "react";
import "../styles/footer.css"; // Import the CSS file for styling
import { FaInstagram, FaFacebook } from "react-icons/fa"; // Import icons from react-icons

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
            ©2024 - Cherishables. All Rights Reserved. The content on this site
            is for informational purposes only and is not intended as
            professional advice.
          </p>
          <p>
            All products displayed are for personal use and should not be used
            for any commercial purposes without prior consent.
          </p>
          <div className="footer-icons">
            <a
              href="https://www.instagram.com/cherishables_/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
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
