const mongoose = require('mongoose');

const supplementschema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: false },
    category: { type: String, required: true },
    discount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});


const Supplementmodel = mongoose.model('Supplement', supplementschema);
module.exports = Supplementmodel;
