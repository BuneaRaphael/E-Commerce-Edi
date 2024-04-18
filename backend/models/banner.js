const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    wording: { type: String, required: true },
    collection: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Collection',
        required: true
    }
});

bannerSchema.virtual('image').get(function() {
    return this.populate('collection').collection.image;
});

module.exports = mongoose.model('Banner', bannerSchema);