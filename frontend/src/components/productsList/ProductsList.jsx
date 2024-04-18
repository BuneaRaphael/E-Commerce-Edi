import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../api.js";
import Product from "../product/Product";
import "./productsList.scss";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response.data);
        setIsLoading(false); // Data fetched, set loading state to false
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false); // Error occurred, set loading state to false
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : products.length > 0 ? (
        products.map((product) => (
          <Product key={product._id} product={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;
