import { Link } from "react-router-dom";

import React from "react";
import "./product.scss";
const Product = ({ product }) => {
  return (
    <Link
      to={`/product/${product._id}`}
      key={product._id}
      className="product-item"
    >
      <div className="product">
        <h3>{product.name}</h3>
        <img
          src={`../../images/${product.image[0]}`}
          alt={product.name}
          style={{ maxWidth: "200px" }}
        />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {/* Additional product details can be displayed here */}
      </div>
    </Link>
  );
};

export default Product;
