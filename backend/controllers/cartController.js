const Cart = require("../models/cart.js");

// Controller to add a product to the cart
exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    // Check if the cart already exists for the user
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      // Create a new cart if it doesn't exist
      cart = new Cart({ userId, items: [] });
    }

    // Check if the product already exists in the cart
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );
    if (existingItem) {
      // Update the quantity of the existing product in the cart
      existingItem.quantity += quantity;
    } else {
      // Add the new product to the cart
      cart.items.push({ productId, quantity });
    }

    // Save the updated cart
    await cart.save();

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get cart items for a user
exports.getCartItems = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart.items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
