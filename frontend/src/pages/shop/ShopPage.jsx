import "./shopPage.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../api"; // Ensure this function fetches all products

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="shop">
      <h2>Shop All Products</h2>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              to={`/product/${product._id}`}
              key={product._id}
              className="product-item"
            >
              <img
                src={`/images/${product.image}`}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
            </Link>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};
export default ShopPage;
