import React, { useState } from "react";
import LoginComponent from "../login/Login.jsx";
import { registerUser } from "../../api.js"; // Import API function for user registration

const RegisterComponent = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(username, email, password); // Call API function to register user
      alert("Registration successful! Please log in.");
      onClose(); // Close the register component
    } catch (error) {
      console.error("Registration error:", error.message);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div className="register-popup">
      {showLogin ? (
        <LoginComponent onClose={() => setShowLogin(false)} />
      ) : (
        <form onSubmit={handleRegister}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Register</button>
          <button type="button" onClick={() => setShowLogin(true)}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default RegisterComponent;
