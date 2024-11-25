import React, { useState, useEffect } from "react";
import "../styles/carousel.css";

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of 7 card data with images required directly
  const cards = [
    { id: 1, image: require("../productimages/P2.jpg"), title: "Memory One" },
    { id: 2, image: require("../productimages/P3.jpg"), title: "Memory Two" },
    { id: 3, image: require("../productimages/P4.jpg"), title: "Memory Three" },
    { id: 4, image: require("../productimages/P5.jpg"), title: "Memory Four" },
    { id: 5, image: require("../productimages/P2.jpg"), title: "Memory Five" },
    { id: 6, image: require("../productimages/P3.jpg"), title: "Memory Six" },
    { id: 7, image: require("../productimages/P4.jpg"), title: "Memory Seven" },
  ];
  
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === cards.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Changes slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [cards.length]);

  // Calculate visible cards based on currentSlide, wrapping around if needed
  const visibleCards = [
    ...cards.slice(currentSlide, currentSlide + 5),
    ...(currentSlide + 5 > cards.length
      ? cards.slice(0, (currentSlide + 5) % cards.length)
      : []),
  ];

  return (
    <div className="carousel-container">
      <div className="carousel">
        {visibleCards.map((card, index) => (
          <div
            key={card.id}
            className={`carousel-card ${
              index === 0 ? "slide-in" : "slide-forward"
            }`}
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          >
            {/* Commenting out the title for now */}
            {/* <p className="carousel-title">{card.title}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
