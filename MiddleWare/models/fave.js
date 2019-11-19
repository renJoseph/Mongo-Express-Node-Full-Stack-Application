const mongoose = require('mongoose');

const faveSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    compId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

module.exports = mongoose.model('Fave', faveSchema)