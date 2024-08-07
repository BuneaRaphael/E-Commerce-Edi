import React from "react";
import "./banner.scss";
import { Link } from "react-router-dom";

const Banner = ({ banner }) => {
  return (
    <Link
      to={`/collections/${banner.collectionId}`}
      key={banner.collectionId}
      className="product-item"
    >
      <div className="banner">
        <img src={`../../images/${banner.image}`} alt={banner.wording} />
        <h3>{banner.title}</h3>
        <p>{banner.wording}</p>
        {/* Additional banner content goes here */}
      </div>
    </Link>
  );
};

export default Banner;
