// controllers/bannerController.js

const Banner = require("../models/banner.js");
const Collection = require("../models/collection.js"); // Import the Collection model

// Controller to create a new banner
exports.createBanner = async (req, res) => {
  const { image, wording, collectionId } = req.body;

  try {
    // Check if the collectionId exists and is valid
    const collection = await Collection.findById(collectionId);
    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    // Create a new banner document
    const newBanner = new Banner({ image, wording, collectionId });

    // Save the banner document to MongoDB
    await newBanner.save();

    res.status(201).json(newBanner);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create banner", error: error.message });
  }
};

// Get all banners
exports.getAllBanners = async (req, res) => {
  try {
    const banners = await Banner.find().populate("collection");
    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single banner by ID
exports.getBannerById = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id).populate("collection");
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.status(200).json(banner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a banner by ID
exports.updateBanner = async (req, res) => {
  try {
    const { wording, collectionId } = req.body;

    // Check if the collectionId is valid
    const existingCollection = await Collection.findById(collectionId);
    if (!existingCollection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    const updatedBanner = await Banner.findByIdAndUpdate(
      req.params.id,
      { wording, collection: collectionId },
      { new: true }
    ).populate("collection");

    res.status(200).json(updatedBanner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a banner by ID
exports.deleteBanner = async (req, res) => {
  try {
    const banner = await Banner.findByIdAndDelete(req.params.id);
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
