import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("/ProductDetails.json"); // Replace with the actual path
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
