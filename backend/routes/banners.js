const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/bannerController');

// POST /api/banners
router.post('/', bannerController.createBanner);

// GET /api/banners
router.get('/', bannerController.getAllBanners);

// GET /api/banners/:id
router.get('/:id', bannerController.getBannerById);

// PUT /api/banners/:id
router.put('/:id', bannerController.updateBanner);

// DELETE /api/banners/:id
router.delete('/:id', bannerController.deleteBanner);

module.exports = router;