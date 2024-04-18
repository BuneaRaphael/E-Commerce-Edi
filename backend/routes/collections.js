const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

// POST /api/collections
router.post('/', collectionController.createCollection);

// GET /api/collections
router.get('/', collectionController.getAllCollections);

// GET /api/collections/:id
router.get('/:id', collectionController.getCollectionById);

// PUT /api/collections/:id
router.put('/:id', collectionController.updateCollection);

// DELETE /api/collections/:id
router.delete('/:id', collectionController.deleteCollection);

module.exports = router;