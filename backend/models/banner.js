// models/Banner.js

const mongoose = require("mongoose");

// Define Mongoose schema for Banner
const bannerSchema = new mongoose.Schema({
  image: { type: String, required: true },
  wording: { type: String, required: true },
  collectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Collection",
    required: true,
  },
});

// Create Mongoose model for Banner
const Banner = mongoose.model("Banner", bannerSchema);

module.exports = Banner;
