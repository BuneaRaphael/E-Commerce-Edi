const Collection = require("../models/collection.js");

// Create a new collection
exports.createCollection = async (req, res) => {
  try {
    const { name, description, image, products } = req.body;
    const newCollection = new Collection({
      name,
      description,
      image,
      products,
    });
    await newCollection.save();
    res.status(201).json(newCollection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all collections
exports.getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.find();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single collection by ID
exports.getCollectionById = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id).populate(
      "products"
    );
    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    res.status(200).json(collection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a collection by ID
exports.updateCollection = async (req, res) => {
  try {
    const { name, description, image, products } = req.body;
    const updatedCollection = await Collection.findByIdAndUpdate(
      req.params.id,
      { name, description, image, products },
      { new: true }
    );
    res.status(200).json(updatedCollection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a collection by ID
exports.deleteCollection = async (req, res) => {
  try {
    const collection = await Collection.findByIdAndDelete(req.params.id);
    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
