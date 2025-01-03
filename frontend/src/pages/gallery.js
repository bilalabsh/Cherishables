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
      <div className="gallery-container">
        <h1 className="gallery-title">Cherishables Catalogue</h1>
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
        {title === "Infants" && (
          <Link to="/product/Infants" className="see-more-btn">
            View More
          </Link>
        )}
        {title === "Teenagers" && (
          <Link to="/product/Teenagers" className="see-more-btn">
            View More
          </Link>
        )}
        {title === "Family" && (
          <Link to="/product/Family" className="see-more-btn">
            View More
          </Link>
        )}
        {title === "Couples" && (
          <Link to="/product/Couples" className="see-more-btn">
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
    <div className="product-card">
      <img className="product-image" src={image} alt={name} />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
      </div>
    </div>
  );
};

export default Gallery;
