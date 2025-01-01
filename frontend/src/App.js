import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/productPage"
import Order from "./pages/appointment"
import Stories from "./pages/stories"
import Gallery from "./pages/gallery"
import AboutUs from "./pages/AboutUs"
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/appointment" element={<Order />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
