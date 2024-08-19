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
              <a href="#about-us">About us</a>
            </li>
            <li>
              <a href="#stores">Stores</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#editorials">Editorials</a>
            </li>
            <li>
              <a href="#diversity-inclusion">Diversity & Inclusion</a>
            </li>
            <li>
              <a href="#student-discount">Student discount</a>
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
              <a href="#shipping">Shipping and delivery</a>
            </li>
            <li>
              <a href="#payment-options">Payment options</a>
            </li>
            <li>
              <a href="#returns">Returns</a>
            </li>
            <li>
              <a href="#faq-support">FAQ/Support</a>
            </li>
            <li>
              <a href="#size-guide">Size guide</a>
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
          <a href="#privacy-policy">PRIVACY POLICY</a>
          <a href="#terms-conditions">TERMS AND CONDITIONS</a>
          <a href="#payment">PAYMENT</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
