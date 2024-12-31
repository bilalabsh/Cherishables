  import React from "react";
  import { Link } from "react-router-dom";
  import "../styles/catalog.css";
 

  const ProductCatalog = () => {
    const products = [
      {
        id: "Infants",
        name: "Infants & Toddlers",
        price: "$99",
        img: "https://res.cloudinary.com/dqeakzmb5/image/upload/v1735654861/homepageCover_ketf0z.jpg",
        description: "A beautiful hand impression in metal.",
      },
      {
        id: "Teenagers",
        name: "Teenagers",
        price: "$89",
        img: "https://res.cloudinary.com/dqeakzmb5/image/upload/v1735581655/3D_Teenagers_2_z6r5u2.jpg",
        description: "A unique foot impression in metal.",
      },
      {
        id: "Family",
        name: "Family",
        img: "https://res.cloudinary.com/dqeakzmb5/image/upload/v1735655042/homepageCover_fam_wooojq.jpg",
        description: "Capture your baby’s first handprint.",
      },
      {
        id: "Couples",
        name: "Couples",
        img: "https://res.cloudinary.com/dqeakzmb5/image/upload/v1735655136/homepageCover_couples_qe8i8w.jpg",
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
