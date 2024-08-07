import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../api";

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProductById(id);
        setProduct(response);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={`/images/${product.image}`} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductPage;
