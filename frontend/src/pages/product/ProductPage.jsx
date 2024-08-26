import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get the product ID from the URL
import { useCart } from "../../context/CartContext";
import axios from "axios";
import "./product.scss";

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from the URL
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load product data.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    addToCart(product._id, product.name, product.image, quantity, selectedSize);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-page">
      <img src={`/images/${product.image[0]}`} alt={product.name} />
      <div className="product-container">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="product-details">
          <p>Price: ${product.price.toFixed(2)}</p>
          <div className="product-sizes">
            <label>Select Size:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="" disabled>
                Choose a size
              </option>
              {product.sizes &&
                product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
            </select>
          </div>
          <div className="product-quantity">
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              min="1"
            />
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
