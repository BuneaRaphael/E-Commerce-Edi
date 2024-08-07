const Banner = require("../models/banner.js");
const Collection = require("../models/collection.js"); // Import the Collection model

// Controller to create a new banner
exports.createBanner = async (req, res) => {
  const { image, wording, title, collectionId } = req.body;

  try {
    // Check if the collectionId exists and is valid
    const collection = await Collection.findById(collectionId);
    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    // Create a new banner document
    const newBanner = new Banner({ image, title, wording, collectionId });

    // Save the banner document to MongoDB
    await newBanner.save();

    res.status(201).json(newBanner);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create banner", error: error.message });
  }
};

// Get all banners with associated collection data
exports.getAllBanners = async (req, res) => {
  try {
    const banners = await Banner.find();
    const bannersWithCollection = await Promise.all(
      banners.map(async (banner) => {
        const collection = await Collection.findById(banner.collectionId);
        return {
          _id: banner._id,
          title: banner.title,
          image: banner.image,
          wording: banner.wording,
          collectionId: collection ? collection._id : null,
        };
      })
    );
    res.status(200).json(bannersWithCollection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single banner by ID with associated collection data
exports.getBannerById = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    const collection = await Collection.findById(banner.collectionId);
    const bannerWithCollection = {
      _id: banner._id,
      title: banner.title,
      image: banner.image,
      wording: banner.wording,
      collection: collection
        ? { _id: collection._id, name: collection.name }
        : null,
    };

    res.status(200).json(bannerWithCollection);
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
      { wording, collectionId },
      { new: true }
    );

    const collection = existingCollection
      ? { _id: existingCollection._id, name: existingCollection.name }
      : null;
    const bannerWithCollection = {
      _id: updatedBanner._id,
      title: updatedBanner.title,
      image: updatedBanner.image,
      wording: updatedBanner.wording,
      collection,
    };

    res.status(200).json(bannerWithCollection);
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
