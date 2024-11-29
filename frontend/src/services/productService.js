import axios from "axios";

// Function to fetch product data
export const fetchProducts = async () => {
  try {
    const response = await axios.get("/ProductDetails.json"); // Correct path for the public folder
    return response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};
