import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/productPage"
import Order from "./pages/order"
import Stories from "./pages/stories"
import Gallery from "./pages/gallery"
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/order" element={<Order />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
