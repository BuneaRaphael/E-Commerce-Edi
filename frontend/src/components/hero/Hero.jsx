import React, { useEffect, useState } from "react";
import "./hero.scss";

const Hero = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch("http://localhost:8800/api/banners");
        if (response.ok) {
          const data = await response.json();
          setBanners(data); // Store fetched banners in state
        } else {
          throw new Error("Failed to fetch banners");
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div className="hero">
      {banners.length > 0 && (
        <div className="hero-content">
          <h1 className="hero-title">{banners[0].title}</h1>
          <p className="hero-description">{banners[0].description}</p>
          <button className="hero-button">Buy Now</button>
        </div>
      )}
      {banners.length > 0 && (
        <div className="hero-image-container">
          <img
            src={banners[0].image}
            alt={banners[0].title}
            className="hero-image"
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
