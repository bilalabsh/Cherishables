import React, { useState, useEffect, useRef } from "react";
import "../styles/navbar.css";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* WhatsApp icon and link */}
      <div className="whatsapp">
        <a href="https://wa.me/923252802878" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="nav-links desktop-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Mobile Navigation Sidebar */}
      <ul ref={sidebarRef} className={`nav-links mobile-nav ${menuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      {/* Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
