const mongoose = require('mongoose');   
const PaymentSchema = new mongoose.Schema({
   user_id:String,
   amount:Number,
   paymentId:String,
   date:String,
   products:Array   

});
const Payment = mongoose.model('Payment', PaymentSchema);
module.exports = Payment;