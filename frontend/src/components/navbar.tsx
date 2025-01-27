import React, { useState, useEffect, useRef } from "react";
import "../styles/navbar.css";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLUListElement>(null);

  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 3);

      // Close the menu when scrolling if it's open
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Social Icons */}
      <div className="social-icons">
        <a
          href="https://wa.me/923252802878"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaWhatsapp className="social-icon whatsapp" />
        </a>
        <a
          href="https://linkedin.com/company/cherishables-co"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin className="social-icon linkedin" />
        </a>
        <a
          href="https://www.facebook.com/cherishables.art"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaFacebook className="social-icon facebook" />
        </a>
        <a
          href="https://www.instagram.com/cherishables_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram className="social-icon instagram" />
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="nav-links desktop-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stories">Reviews</Link>
        </li>
        <li>
          <Link to="/gallery">Catalogue</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <a href="tel:+923252802878" className="contact-us-button">
            <FaPhoneAlt /> Contact Us
          </a>
        </li>
      </ul>

      {/* Mobile Navigation Sidebar */}
      <ul
        ref={sidebarRef}
        className={`nav-links mobile-nav ${menuOpen ? "active" : ""}`}
      >
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/stories" onClick={() => setMenuOpen(false)}>
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Catalogue
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </li>
        <li>
          <a
            href="tel:+923252802878"
            onClick={() => setMenuOpen(false)}
            className="contact-us-button"
          >
            <FaPhoneAlt /> Contact Us
          </a>
        </li>
      </ul>

      {/* Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
