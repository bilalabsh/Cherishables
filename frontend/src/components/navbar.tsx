import React, { useState, useEffect, useRef } from "react";
import "../styles/navbar.css";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

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
  }, [menuOpen]); // Depend on menuOpen to ensure state is up-to-date

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu if clicked outside
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
      {/* WhatsApp icon */}
      <div className="whatsapp">
        <a href="https://wa.me/923252802878" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="nav-links desktop-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stories">Stories</Link></li>
        <li><Link to="/gallery">Catalogue</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      {/* Mobile Navigation Sidebar */}
      <ul ref={sidebarRef} className={`nav-links mobile-nav ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/stories" onClick={() => setMenuOpen(false)}>Stories</Link></li>
        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
      </ul>

      {/* Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
