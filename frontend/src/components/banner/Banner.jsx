import React from "react";
import "./banner.scss";

const Banner = ({ banner }) => {
  return (
    <div className="banner">
      <img src={banner.image} alt={banner.wording} />
      <h3>{banner.title}</h3>
      <p>{banner.wording}</p>
      {/* Additional banner content goes here */}
    </div>
  );
};

export default Banner;
