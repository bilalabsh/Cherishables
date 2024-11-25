import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa"; // Import FaPhone for the phone icon
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Phone icon and number */}
      <div className="phone">
        <FaPhone className="phone-icon" />
        <a href="tel:+92 325 2802878" className="phone-number">
          +92 325 2802878
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="menu-icon">
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
