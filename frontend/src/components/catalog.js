import React from "react";
import { Link } from "react-router-dom";
import "../styles/catalog.css";

const ProductCatalog = () => {
  const products = [
    {
      id: "Infants",
      name: "Infants & Toddlers",
      price: "$99",
      img: "https://res.cloudinary.com/dqeakzmb5/image/upload/v1735752953/2D_Infants_11_myjs8i.jpg",
      description: "Precious little hands and feet",
    },
    {
      id: "Teenagers",
      name: "Teenagers",
      price: "$89",
      img: "https://res.cloudinary.com/dqeakzmb5/image/upload/v1735752469/3D_Teens_2_kwtgtk.jpg",
      description: "Soaring teenagers",
    },
    {
      id: "Family",
      name: "Family",
      img: "https://res.cloudinary.com/dqeakzmb5/image/upload/v1735754617/2D_fam_5_r7qtpx.jpg",
      description: "Family is everything",
    },
    {
      id: "Couples",
      name: "Couples",
      img: "https://res.cloudinary.com/dqeakzmb5/image/upload/v1735753442/3D_couples_2_soije4.jpg",
      description: "Happiness in togetherness",
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
