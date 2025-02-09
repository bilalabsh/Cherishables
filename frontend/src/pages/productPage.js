import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to capture the productId from URL
import { fetchProducts } from "../services/productService"; // Function to fetch product data
import "../styles/productpage.css";
import Footer from "../components/Footer";
import Navbar from "../components/navbar.tsx";

const ProductPage = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState(null);

  // Fetch product data from the local JSON file
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await fetchProducts(); // Assuming this fetches the product data from the JSON file
        const product = data.products.find((p) => p.mainCategory === productId);
        setProductData(product);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  const toggleCategory = (category) => {
    setExpandedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const handleCardClick = (e) => {
    const cardInner = e.currentTarget.querySelector(".card-inner");
    cardInner.classList.toggle("flipped");
  };
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!productData) {
    return <div>Product not found!</div>;
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
      <div className="product-page-container">
        <h1>{productData.mainCategory} Products</h1>
        {Object.keys(productData.subCategories).map((category) => {
          const isExpanded = expandedCategory === category;
          return (
            <section key={category} className="category-section">
              <h2>{category}</h2>
              <div
                className={`products-container ${isExpanded ? "expanded" : ""}`}
              >
                {productData.subCategories[category]
                  .slice(
                    0,
                    isExpanded ? productData.subCategories[category].length : 3
                  )
                  .map((product) => (
                    <div
                      key={product.id}
                      className="product-card"
                      onClick={handleCardClick}
                    >
                      <div className="card-inner">
                        {/* Front Side */}
                        <div className="card-front">
                          <img src={product.image} alt={product.name} />
                        </div>

                        {/* Back Side */}
                        <div className="card-back">
                          <blockquote className="review-quote">
                            {product.review}
                          </blockquote>
                          <p className="author">- {product.author}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="category-controls">
                <button
                  className="toggle-arrow"
                  onClick={() => toggleCategory(category)}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
                <a href="/appointment" className="order-now-button">
                  Book Your Appointment !
                </a>
              </div>
            </section>
          );
        })}
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
