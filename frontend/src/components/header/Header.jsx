import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import AuthModal from "../authmodal/AuthModal";

export default function Header() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to the shop page with the search query
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }

    setSearchQuery("");
  };

  const handleAccountClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/account"); // Go to the account page if logged in
    } else {
      setShowAuthModal(true); // Show the login/register modal if not logged in
    }
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

        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleInputChange}
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
        <button onClick={handleAccountClick}>Account</button>
        <div className="cart">
          <Link to="/">Cart</Link>
        </div>
        {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
      </header>
    </div>
  );
}
