import React from "react";
import { useCart } from "../../context/CartContext";
import "./cartPage.scss"; // Import the SCSS file

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.productId} className="cart-item">
            <div className="item-info">
              <p>{item.productId.name}</p>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button
              className="remove-button"
              onClick={() => removeFromCart(item._id)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
