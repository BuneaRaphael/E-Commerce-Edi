import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
export default function Header() {
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
          <Link to="/">Log In</Link>
        </div>
        <div className="cart">
          <Link to="/">Cart</Link>
        </div>
      </header>
    </div>
  );
}
