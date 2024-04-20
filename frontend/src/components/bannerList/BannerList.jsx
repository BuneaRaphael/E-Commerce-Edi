import React, { useState, useEffect } from "react";
import Banner from "../banner/Banner";
import { fetchBanners } from "../../api.js"; // Import API functions
import "./bannerList.scss";
const BannerList = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBanners(); // Call imported API function

        setBanners(response); // Update state with fetched banners
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="banner-list">
      <h2>Banners</h2>
      <div className="banner-container">
        {banners.slice(3, 11).map((banner, index) => (
          <Banner key={banner._id} banner={banner} />
        ))}
      </div>
    </div>
  );
};

export default BannerList;
