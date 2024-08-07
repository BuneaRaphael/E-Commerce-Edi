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

export const fetchProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
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

export const registerUser = async (username, email, password) => {
  const response = await fetch("http://localhost:8800/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
};

export const loginUser = async (email, password) => {
  const response = await fetch("http://localhost:8800/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  const data = await response.json();
  return data.token; // Assuming backend returns a token upon successful login
};

export const fetchCollections = async () => {
  const response = await fetch(`${BASE_URL}/collections`);
  if (!response.ok) {
    throw new Error("Failed to fetch collections");
  }
  return response.json();
};
export const fetchCollectionById = async (id) => {
  const response = await fetch(`${BASE_URL}/collections/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch collection");
  }
  return response.json();
};

export { fetchBanners };
