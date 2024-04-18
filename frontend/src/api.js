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

const fetchBanners = async () => {
  try {
    const response = await fetch(`${BASE_URL}/banners`);
    if (!response.ok) {
      throw new Error("Failed to fetch banners");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export { fetchBanners };
