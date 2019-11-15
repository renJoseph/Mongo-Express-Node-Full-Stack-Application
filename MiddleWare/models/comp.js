const mongoose = require('mongoose');

const compSchema = new mongoose.Schema({
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
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Comp', compSchema)