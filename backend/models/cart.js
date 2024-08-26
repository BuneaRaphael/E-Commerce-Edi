const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
  items: [
    {
      productId: {
        type: String,
        ref: "Product",
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
      image: {
        type: String,
        required: false,
      },
      quantity: {
        type: Number,
        required: false,
        default: 1,
      },
      size: {
        type: String,
        required: false,
      },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
