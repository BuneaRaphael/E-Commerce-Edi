import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h4>REGION</h4>
          <ul>
            <li>
              <a href="/">EURN</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>ABOUT US</h4>
          <ul>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Stores</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Editorials</a>
            </li>
            <li>
              <a href="/">Diversity & Inclusion</a>
            </li>
            <li>
              <a href="/">Student discount</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>CONNECT</h4>
          <ul>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                X (formerly Twitter)
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>SERVICE</h4>
          <ul>
            <li>
              <a href="/">Shipping and delivery</a>
            </li>
            <li>
              <a href="/">Payment options</a>
            </li>
            <li>
              <a href="/">Returns</a>
            </li>
            <li>
              <a href="/">FAQ/Support</a>
            </li>
            <li>
              <a href="/">Size guide</a>
            </li>
          </ul>
        </div>
        <div className="footer__section newsletter">
          <h4>COVEN NEWSLETTER</h4>
          <p>
            By signing up for our Newsletter, you'll be part of the COVEN
            community and get access to early drops, exclusive releases, and
            secret specials.
          </p>
          <div className="newsletter__signup">
            <input type="email" placeholder="E-MAIL" />
            <button>SIGN UP</button>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 SGS GROUP INC, AB, KK, GMBH, SAS, LTD, 株式会社</p>
        <div className="footer__links">
          <a href="/">PRIVACY POLICY</a>
          <a href="/">TERMS AND CONDITIONS</a>
          <a href="/">PAYMENT</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
