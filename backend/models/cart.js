const mongoose = require('mongoose');

const Cartschema = new mongoose.Schema({
    product_id: String,
    user_id: String
});

const Cart = mongoose.model('Cart', Cartschema);
module.exports = Cart;