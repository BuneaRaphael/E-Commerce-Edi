// routes/cart.js

const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart"); // Your Cart model
const authMiddleware = require("../middleware/authMiddleware"); // Your authentication middleware

// Get cart items for a logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // User ID from token
    const cart = await Cart.findOne({ userId });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add items to cart
router.post("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.body.userId;
    const newItem = req.body.items[0]; // Assume single item for simplicity
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [newItem] });
    } else {
      cart.items.push(newItem);
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Remove item from cart
router.delete("/:itemId", authMiddleware, async (req, res) => {
  try {
    const userId = req.body.userId;
    const itemId = req.params.itemId;
    let cart = await Cart.findOne({ userId });

    if (cart) {
      cart.items = cart.items.filter((item) => item._id.toString() !== itemId);
      await cart.save();
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
