const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

// GET /cart - Get cart items for a logged-in user
router.get("/", cartController.getCartItems);

// POST /cart - Add items to cart
router.post("/", cartController.addItemToCart);

// PUT /cart/:itemId - Update item quantity in cart
router.put("/:itemId", cartController.updateItemQuantity);

// DELETE /cart/:itemId - Remove item from cart
router.delete("/:itemId", cartController.removeItemFromCart);

module.exports = router;
