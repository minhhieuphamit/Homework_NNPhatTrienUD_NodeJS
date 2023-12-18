var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
});

module.exports = mongoose.model('product', schema);;