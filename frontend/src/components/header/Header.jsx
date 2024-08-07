import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import RegisterComponent from "../register/Register";
export default function Header() {
  const [showRegister, setShowRegister] = useState(false);
  const handleToggleRegister = () => {
    setShowRegister(!showRegister); // Toggle the visibility of the register component
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link to="/">My E-Commerce App</Link>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Sale</Link>
            </li>
            <li>
              <Link to="/">New Arrivals</Link>
            </li>
            <li>
              <Link to="/">Men</Link>
            </li>
            <li>
              <Link to="/">Women</Link>
            </li>
          </ul>
        </nav>

        <div className="search">
          <button onClick={() => alert("Implement search functionality")}>
            Search
          </button>
        </div>
        <div className="account">
          <button onClick={handleToggleRegister}>Account</button>
          {showRegister && <RegisterComponent onClose={handleToggleRegister} />}
        </div>
        <div className="cart">
          <Link to="/">Cart</Link>
        </div>
      </header>
    </div>
  );
}
