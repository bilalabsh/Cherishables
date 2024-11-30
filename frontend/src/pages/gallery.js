import React, { useState, useEffect } from "react";
import { fetchProducts } from "../services/galleryService";
import "../styles/gallery.css"; // Add a separate CSS file for styling
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

const Gallery = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products");
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      {products.map((category) => (
        <CategoryBlock
          key={category.mainCategory}
          title={category.mainCategory}
          subCategories={category.subCategories}
        />
      ))}
    </div>
  );
};

const CategoryBlock = ({ title, subCategories }) => {
  const products = Object.values(subCategories).flat().slice(0, 3); // Display 3 products per category

  return (
    <div className="category-block">
      <h2 className="category-title">{title}</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* See More buttons */}
      <div className="see-more-buttons">
        {title === "2D" && (
          <Link to="/product/2D" className="see-more-btn">
            See More 2D
          </Link>
        )}
        {title === "3D" && (
          <Link to="/product/3D" className="see-more-btn">
            See More 3D
          </Link>
        )}
        {title === "Imposed" && (
          <Link to="/product/imposed" className="see-more-btn">
            See More Imposed
          </Link>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { name, price, description, image } = product;

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={name} />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default Gallery;
