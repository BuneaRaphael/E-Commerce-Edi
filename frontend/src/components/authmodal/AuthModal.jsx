// AuthModal.jsx

import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useCart } from "../../context/CartContext";
import "./authmodal.scss"; // Ensure the path is correct

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { cart, clearCart } = useCart();

  const validateInputs = () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format.");
      return false;
    }
    if (!isLogin && !username) {
      setError("Username is required for registration.");
      return false;
    }
    setError("");
    return true;
  };

  const handleAuth = async () => {
    if (!validateInputs()) return;

    try {
      const endpoint = isLogin ? "login" : "register";
      const response = await axios.post(
        `http://localhost:8800/api/auth/${endpoint}`,
        {
          email,
          password,
          ...(isLogin ? {} : { username }),
        }
      );

      const token = response.data.token;
      localStorage.setItem("token", token);

      if (isLogin) {
        const userId = jwtDecode(token).id;

        if (cart.length) {
          await axios.post(
            "http://localhost:8800/api/cart",
            { userId, items: cart },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          clearCart();
        }
      }

      onClose();
      window.location.reload(); // Optional: Refresh page to update login state
    } catch (error) {
      console.error("Authentication error:", error);
      if (error.response && error.response.status === 400) {
        setError(error.response.data.message);
      } else if (error.response && error.response.status === 500) {
        setError("Internal Server Error. Please try again later.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setUsername("");
    setError("");
  };

  return (
    <div className="auth-modal">
      <div className="auth-modal-content">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button className="auth-button" onClick={handleAuth}>
          {isLogin ? "Login" : "Register"}
        </button>
        <button className="switch-button" onClick={switchMode}>
          {isLogin ? "Need an account? Register" : "Have an account? Login"}
        </button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
