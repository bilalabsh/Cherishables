import React from "react";
import { Link } from "react-router-dom";
import "../styles/catalog.css";
import lamine from "../productimages/p1.JPG";
import foot from "../productimages/p1.JPG";
import babyHand from "../productimages/p1.JPG";

const ProductCatalog = () => {
  const products = [
    {
      id: "2D",
      name: "2D",
      price: "$99",
      img: lamine,
      description: "A beautiful hand impression in metal.",
    },
    {
      id: "3D",
      name: "3D",
      price: "$89",
      img: foot,
      description: "A unique foot impression in metal.",
    },
    {
      id: "Imposed",
      name: "Imposed",
      img: babyHand,
      description: "Capture your baby’s first handprint.",
    },
  ];

  return (
    <div className="hero-catalog">
      <div className="product-card-wrapper">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-card-inner">
              <div className="product-card-front">
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
              </div>
              <div className="product-card-back">
                <p>{product.description}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="view-catalogue-button"
                >
                  View Catalogue
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
