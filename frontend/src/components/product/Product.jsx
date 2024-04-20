import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <img
        src={`../../public/images/${product.image}`}
        alt={product.name}
        style={{ maxWidth: "200px" }}
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Additional product details can be displayed here */}
    </div>
  );
};

export default Product;
