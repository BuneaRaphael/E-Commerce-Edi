import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import AuthModal from "../authmodal/AuthModal";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { cart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Handle search input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to the shop page with the search query
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
    setSearchQuery("");
  };

  // Handle account button click
  const handleAccountClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/account"); // Go to the account page if logged in
    } else {
      setShowAuthModal(true); // Show the login/register modal if not logged in
    }
  };

  return (
    <header className="header">
      <div className="header__left">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Coven" />
          </Link>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <Link to="/shop" className="sale-link">
                SALE
              </Link>
            </li>
            <li>
              <Link to="/shop">NEW ARRIVALS</Link>
            </li>
            <li>
              <Link to="/shop">MEN</Link>
            </li>
            <li>
              <Link to="/shop">WOMEN</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__right">
        <div className="search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="SEARCH"
              value={searchQuery}
              onChange={handleInputChange}
              className="search-input"
            />
          </form>
        </div>

        <div className="account">
          <button onClick={handleAccountClick} className="account-button">
            Account
          </button>
        </div>

        <div className="cart">
          <Link to="/cart">
            <span role="img" aria-label="cart">
              🛒
            </span>{" "}
            ({cart.length})
          </Link>
        </div>
      </div>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </header>
  );
}
