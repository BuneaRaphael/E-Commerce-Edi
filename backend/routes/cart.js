const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");

// Get user's cart
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate(
      "products.productId"
    );
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add product to user's cart
router.post("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });

    // Check if the product is already in the cart
    const existingProduct = cart.products.find(
      (item) => item.productId.toString() === req.body.productId
    );

    if (existingProduct) {
      // If the product exists, increment the quantity
      existingProduct.quantity += 1;
    } else {
      // If the product doesn't exist, add it to the cart
      cart.products.push({ productId: req.body.productId });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
