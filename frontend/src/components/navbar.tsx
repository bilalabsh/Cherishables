import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logofinal.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Cherishables Logo" className="navbar-logo" />
      </div>
      <ul
        className={`nav-links ${isMobileMenuOpen && isMobile ? "active" : ""}`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Gallery">Gallery</Link>
        </li>
        <li>
        <Link to="/Stories">Stories</Link>
        </li>
        <li>
        <Link to="/About">About Us</Link>
        </li>

      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
