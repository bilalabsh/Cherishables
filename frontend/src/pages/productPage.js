// ProductPage.js
import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div>
      <h1>Hello from Product Page</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default ProductPage;
