const mongoose= require ('mongoose')
const ProductSchema= new mongoose.Schema({
    Product_Id:String,
    Product_Name:String,
    Product_Category:String,
    Product_Quantity:String,
    Product_Price:String,
    Product_Description:String,
    Product_Discount:String,
    Product_Availbility:String,
    Product_Image:String,
})
const Product= mongoose.model('Product', ProductSchema)
module.exports=Product;