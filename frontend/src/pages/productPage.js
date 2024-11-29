import React, { useState, useRef } from "react";
import "../styles/productpage.css";
import { Link } from "react-router-dom"; // Import Link for navigation
import Footer from "../components/Footer"
const ProductPage = () => {
  // Categories for the products
  const categories = [
    { title: "Newborn", id: "newborn" },
    { title: "Toddler", id: "toddler" },
    { title: "Teenage", id: "teenage" },
    { title: "Couples", id: "couples" },
    { title: "Elderly", id: "elderly" },
    { title: "Family", id: "family" },
  ];

  // Authors list for reviews
  const authors = [
    "John D.",
    "Jane S.",
    "Robert K.",
    "Emily R.",
    "Michael B.",
    "Sarah P.",
    "David G.",
    "Sophia W.",
    "Daniel M.",
    "Olivia T.",
  ];

  // Product data for each category
  const products = {
    newborn: [
      {
        name: "Newborn Product 1",
        review: "Capturing my baby's first moments was priceless.",
        image: require("../productimages/p9.jpg"),
        author: "Abu Umer",
      },
      {
        name: "Newborn Product 2",
        review: "An irreplaceable keepsake of our baby's tiny hands.",
        image: require("../productimages/P2.jpg"),
        author: "Ashu",
      },
      {
        name: "Newborn Product 3",
        review:
          "The joy of seeing my baby's tiny imprint every day is unmatched.",
        image: require("../productimages/P2.jpg"),
        author: authors[Math.floor(Math.random() * authors.length)],
      },
      {
        name: "Newborn Product 4",
        review: "A wonderful keepsake that I'll treasure forever.",
        image: require("../productimages/P2.jpg"),
        author: authors[Math.floor(Math.random() * authors.length)],
      },
      {
        name: "Newborn Product 5",
        review: "Perfect way to preserve my baby's tiny hands.",
        image: require("../productimages/P2.jpg"),
        author: authors[Math.floor(Math.random() * authors.length)],
      },
      {
        name: "Newborn Product 6",
        review: "This product brought tears of joy to my eyes.",
        image: require("../productimages/P2.jpg"),
        author: authors[Math.floor(Math.random() * authors.length)],
      },
    ],
    // Generating products for other categories dynamically
    toddler: [...Array(6)].map((_, index) => ({
      name: `Toddler Product ${index + 1}`,
      review: "A playful memory of my child's vibrant years.",
      image: require("../productimages/P2.jpg"),
      author: authors[Math.floor(Math.random() * authors.length)],
    })),
    teenage: [...Array(6)].map((_, index) => ({
      name: `Teenage Product ${index + 1}`,
      review: "A meaningful way to preserve their teenage years.",
      image: require("../productimages/P2.jpg"),
      author: authors[Math.floor(Math.random() * authors.length)],
    })),
    couples: [...Array(6)].map((_, index) => ({
      name: `Couples Product ${index + 1}`,
      review: "This symbolizes our love and togetherness.",
      image: require("../productimages/P2.jpg"),
      author: authors[Math.floor(Math.random() * authors.length)],
    })),
    elderly: [...Array(6)].map((_, index) => ({
      name: `Elderly Product ${index + 1}`,
      review: "A lasting memory of their wise, caring hands.",
      image: require("../productimages/P2.jpg"),
      author: authors[Math.floor(Math.random() * authors.length)],
    })),
    family: [...Array(6)].map((_, index) => ({
      name: `Family Product ${index + 1}`,
      review: "A beautiful way to capture our family bond.",
      image: require("../productimages/P2.jpg"),
      author: authors[Math.floor(Math.random() * authors.length)],
    })),
  };

  // State to track which category is expanded
  const [expandedCategory, setExpandedCategory] = useState(null);
  const sectionRefs = useRef({});

  // Toggles the expanded view for a category
  const toggleCategory = (category) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
    if (expandedCategory === category) {
      setTimeout(() => {
        sectionRefs.current[category]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 300);
    }
  };

  return (
    <div className="page-container">
      <h1>Hand Impression Products</h1>
      {categories.map(({ title, id }) => (
        <section
          key={id}
          ref={(el) => (sectionRefs.current[id] = el)}
          className="category-section"
        >
          <h2>{title}</h2>
          <div
            className={`products-container ${
              expandedCategory === id ? "expanded" : ""
            }`}
          >
            {products[id]
              .slice(0, expandedCategory === id ? products[id].length : 3)
              .map((product, index) => (
                <div key={index} className="product-card">
                  <div className="card-inner">
                    <div className="card-front">
                      <img
                        src={product.image}
                        alt={`Product ${product.name}`}
                      />
                    </div>
                    <div className="card-back">
                      <p>{product.review}</p>
                      <span className="author">~ {product.author}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {expandedCategory === id && (
            <Link to="/order" className="order-now-button">
              Order Now!
            </Link>
          )}
          <button onClick={() => toggleCategory(id)} className="toggle-arrow">
            {expandedCategory === id ? "▲" : "▼"}
          </button>
        </section>
      ))}
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default ProductPage;
