import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to capture the productId from URL
import { fetchProducts } from "../services/productService"; // Function to fetch product data
import "../styles/productpage.css";
import Footer from "../components/Footer";

const ProductPage = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product data from the local JSON file
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await fetchProducts(); // Assuming this fetches the product data from the JSON file
        // Find the product object matching the productId
        const product = data.products.find((p) => p.mainCategory === productId);
        setProductData(product);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]); // Re-run when productId changes (i.e., when the user navigates to another product)

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while the data is being fetched
  }

  if (!productData) {
    return <div>Product not found!</div>; // Handle the case where the product is not found
  }

  return (
    <div className="product-page-container">
      <h1>{productData.mainCategory} Products</h1>
      {Object.keys(productData.subCategories).map((category) => (
        <section key={category} className="category-section">
          <h2>{category}</h2>
          <div className="products-container">
            {productData.subCategories[category].map((product) => (
              <div key={product.id} className="product-card">
                <div className="card-inner">
                  <div className="card-front">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="card-back">
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Review: {product.review}</p>
                    <p>By: {product.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
};

export default ProductPage;
