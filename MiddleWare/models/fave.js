const mongoose = require('mongoose');

const faveSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    compNo: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true,
        maxlength: 50
    },
    processor: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    storage: {
        type: String,
        required: true
    },
    ram: {
        type: String,
        required: true
    },
    graphics: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    priceRange: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Fave', faveSchema)