import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar.tsx";
import ProductCatalog from "../components/catalog";
import Carousel from "../components/Carousel.tsx"; // Import the Carousel component
import "../styles/homepage.css";

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isScrolled) {
        setIsScrolled(true);
      }
      if (window.scrollY <= 50 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <div className={`homepage ${isScrolled ? "scrolled" : ""}`}>
      <Navbar />
      <section className="hero-section">
        <h1>Cherishables</h1>
        <h3 className="hero-heading">Hand and Foot in Metals</h3>
        <ProductCatalog /> {/* Add the product catalog here */}
      </section>
      <section className="catalog-section"></section>
    </div>
  );
};

export default HomePage;
