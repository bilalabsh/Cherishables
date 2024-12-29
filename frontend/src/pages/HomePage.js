import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../components/navbar.tsx";
import ProductCatalog from "../components/catalog";
import Footer from "../components/Footer";
import "../styles/homepage.css";

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray("section.parallax-section").forEach((section, i) => {
      const bg = section.querySelector(".bg");

      // Add random images to each section background
      bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

      // Use translateY for smoother animations
      gsap.fromTo(
        bg,
        {
          y: () => (i ? -window.innerHeight * getRatio(section) : 0), // Start position
        },
        {
          y: () => window.innerHeight * (1 - getRatio(section)), // End position
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true, // Recalculate on resize
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill()); // Cleanup on unmount
    };
  }, []);

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
      <div className="scrolling-text">
        <p>Please contact us for your personalized impressions</p>
      </div>
      <section className="hero-section">
        <h1>Cherishables</h1>
        <h3 className="hero-heading">Impressive Impressions</h3>
        <ProductCatalog />
      </section>
      {/* Parallax sections */}
      <section className="parallax-section">
        <div className="bg"></div>
        <h1>Simple parallax sections</h1>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
