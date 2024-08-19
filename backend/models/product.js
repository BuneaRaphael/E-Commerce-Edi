const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  gender: [String],
  image: [String],
  collectionId: String,
  sizes: [String],
});

module.exports = mongoose.model("Product", productSchema);
