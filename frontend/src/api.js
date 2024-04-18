import axios from "axios";

const BASE_URL = "http://localhost:8800/api";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

// Define similar functions for fetching collections, banners, etc.
