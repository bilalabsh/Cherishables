import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Phone in header */}
      <div className="phone">
        <FaPhone className="phone-icon" />
        <a href="tel:+92 325 2802878" className="phone-number">
          +92 325 2802878
        </a>
      </div>
      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
        </li>
        <li>
          <Link to="/stories" onClick={() => setMenuOpen(false)}>Stories</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        </li>
      </ul>
      {/* Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* Overlay for sidebar */}
      {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;
