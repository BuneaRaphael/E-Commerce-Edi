import React, { useState } from "react";
import { loginUser } from "../../api"; // Import API function for user login

const LoginComponent = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password); // Call API function to log in user
      alert("Login successful!"); // Notify user of successful login
      onClose(); // Close the login component
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Failed to log in. Please try again.");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="text"
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
