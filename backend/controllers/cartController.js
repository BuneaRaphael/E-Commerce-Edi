const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const authMiddleware = require("../middleware/authMiddleware");

// Get cart items for a logged-in user
router.get(`/`, authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const cart = await Cart.findOne({
      userId: userId,
    });
    res.json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Add items to cart
router.post("/", authMiddleware, async (req, res) => {
  try {
    let cart = null;
    for (let idx in req.body.items) {
      const userId = req.user ? req.user.userId : null; // Acceptă și userId null pentru guest
      const newItem = req.body.items[idx];
      delete newItem._id;

      cart = await Cart.findOne({ userId });

      if (!cart) {
        cart = new Cart({ userId, items: [newItem] });
      } else {
        cart.items.push(newItem);
      }

      await cart.save();
    }
    res.json(cart);
  } catch (error) {
    console.log(error);
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
router.delete("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.body.userId;
    const itemId = req.params.itemId;
    let cart = await Cart.findOne({ userId });

    if (cart) {
      cart.items = [];
      await cart.save();
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
