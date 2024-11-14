import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/productPage"


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
