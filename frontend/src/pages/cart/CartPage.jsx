import React from "react";
import { useCart } from "../../context/CartContext";
import "./cartPage.scss"; // Import the SCSS file

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.productId} className="cart-item">
            <div className="item-info">
              <div className="item-container">
                <p>Name:{item.name}</p>
                <img src={`/images/${item.image}`} alt={item.name} />
              </div>
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
      {cart.length > 0 ? (
        <button className="remove-button" onClick={() => clearCart()}>
          Clear Cart
        </button>
      ) : null}
    </div>
  );
};

export default CartPage;
