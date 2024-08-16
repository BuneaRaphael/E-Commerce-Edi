import React, { useState } from "react";
import axios from "axios";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(""); // State to store error messages

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
    setError(""); // Clear any previous errors
    return true;
  };

  const handleAuth = async () => {
    if (!validateInputs()) return; // Perform validation before sending request

    try {
      const endpoint = isLogin ? "login" : "register";
      const response = await axios.post(
        `http://localhost:8800/api/auth/${endpoint}`,
        {
          email,
          password,
          ...(isLogin ? {} : { username }), // Only include username if registering
        }
      );
      localStorage.setItem("token", response.data.token); // Store token
      onClose(); // Close the modal
    } catch (error) {
      setError("Authentication error. Please try again.");
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setUsername("");
    setError(""); // Clear error message when switching modes
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
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error messages */}
        <button onClick={handleAuth}>{isLogin ? "Login" : "Register"}</button>
        <button onClick={switchMode}>
          {isLogin ? "Need an account? Register" : "Have an account? Login"}
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AuthModal;
