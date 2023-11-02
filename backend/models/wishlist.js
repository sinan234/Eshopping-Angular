const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_name: String,
  product_id: String,
    product_price: String,
    product_available: String,
    product_image: String,
    user_id: String
    
});

const Productwish = mongoose.model('Wishlist', productSchema);

module.exports = Productwish;
