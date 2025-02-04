import React, { useState, useEffect } from "react";
import { fetchProducts } from "../services/galleryService";
import "../styles/gallery.css"; // Add a separate CSS file for styling
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import Navbar from "../components/navbar.tsx";

const Gallery = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="scrolling-text">
        <p>
          Introducing in Pakistan, your family own hand and foot impressions in
          metal
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; Please contact us for your personalized impressions
        </p>
      </div>
      <div className="gallery-container">
        <Link to="/">
          {" "}
          {/* Wrap image inside Link */}
          <img
            src={require("../assets/lg.png")}
            alt="Cherishables"
            className="gallery-logo"
          />
        </Link>
        <h1 className="gallery-title">Catalogue</h1>
        {products.map((category) => (
          <CategoryBlock
            key={category.mainCategory}
            title={category.mainCategory}
            subCategories={category.subCategories}
          />
        ))}
      </div>
    </div>
  );
};

const CategoryBlock = ({ title, subCategories }) => {
  const products = subCategories
    ? Object.values(subCategories).flat().slice(0, 3)
    : [];

  return (
    <div className="category-block">
      <h2 className="category-title">{title}</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="see-more-buttons">
        {["Infants", "Teenagers", "Family", "Couples"].includes(title) && (
          <Link to={`/product/${title}`} className="see-more-btn">
            View More
          </Link>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { name, image } = product;

  return (
    <div className="product-card2">
      <img className="product-image" src={image} alt={name} />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
      </div>
    </div>
  );
};

export default Gallery;
