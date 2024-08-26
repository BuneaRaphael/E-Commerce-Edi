import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to get userId from token
  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken?.userId;
    }
    return null;
  };

  useEffect(() => {
    const fetchCart = async () => {
      const userId = getUserIdFromToken();
      if (userId) {
        setIsLoggedIn(true);
        try {
          const response = await axios.get(`http://localhost:8800/api/cart`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          const cartItems = response.data.items || [];
          setCart(cartItems);
        } catch (error) {
          console.error(
            "Failed to fetch cart:",
            error.response?.data || error.message
          );
        }
      } else {
        setIsLoggedIn(false);
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(localCart);
      }
    };

    fetchCart();
  }, []);

  const addToCart = async (productId, name, image, quantity, size) => {
    const newItem = { productId, name, image: image[0], quantity, size };
    const userId = getUserIdFromToken();

    if (userId) {
      try {
        const response = await axios.post(
          "http://localhost:8800/api/cart",
          { userId, items: [newItem] },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCart(response.data.items || []);
      } catch (error) {
        console.log(error);
        console.error(
          "Failed to add to cart:",
          error.response?.data || error.message
        );
      }
    } else {
      const localCart = [...cart];
      const existingItem = localCart.find(
        (item) => item.productId === productId && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        localCart.push({ ...newItem, _id: Date.now().toString() }); // Ensure each item has a unique _id
      }

      setCart(localCart);
      localStorage.setItem("cart", JSON.stringify(localCart));
    }
  };

  const removeFromCart = async (itemId) => {
    const userId = getUserIdFromToken();

    if (userId) {
      try {
        const response = await axios.delete(
          `http://localhost:8800/api/cart/${itemId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            data: { userId },
          }
        );
        setCart(response.data.items || []);
      } catch (error) {
        console.error(
          "Failed to remove from cart:",
          error.response?.data || error.message
        );
      }
    } else {
      const updatedCart = cart.filter((item) => item._id !== itemId);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  const clearCart = async () => {
    const userId = getUserIdFromToken();

    if (userId) {
      try {
        const response = await axios.delete(`http://localhost:8800/api/cart/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          data: { userId },
        });
        setCart(response.data.items || []);
      } catch (error) {
        console.error(
          "Failed to remove from cart:",
          error.response?.data || error.message
        );
      }
    } else {
      setCart([]);
      localStorage.setItem("cart", cart);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    setCart([]);
    window.location.href = "/";
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, handleLogout, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
