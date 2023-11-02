const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const timeout= 1800000;
const Product=require('../models/adminproducts')
const Payment = require('../models/payment');
const User=require('../models/usermodel')


router.post('/adminlogin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email !== 'mkm' || password !== '111111') {
      res.status(500).json({ message: "Invalid Admin Credentials" });
    } else {
      let payload = { id: "mkm" };
      const token = jwt.sign(payload, 'blah');
      res.status(200).json({ message: "Login Successful", token: token, time: Date.now() + timeout });
    }
  } catch (err) {
    res.status(500).json({ message: "Unknown error occurred" });
  }
});




router.delete('/removeproduct', async(req,res)=>{
    try{
  
    const Product_Id=req.body.productid
    console.log(Product_Id )
    const product = await Product.deleteOne({Product_Id});
    res.status(200).json({message: "Product deleted successfully"});
    }catch(err){
      res.status(501).json({message:"Unknown error occured"})  
    }
  })
  
  router.put('/reducequantity', async (req, res) => {
    try {
      const products = req.body;
      console.log("products bought", products);
  
      for (let item of products) {
        let Product_Id = item.productId;
        let count = item.count;
        console.log(Product_Id, count);
  
        const product = await Product.findOne({ Product_Id });
  
        if (!product) {
          console.log("Product not existing");
          return res.status(500).json({ message: "Product does not exist" });
        }
  
        product.Product_Quantity -= count; 
        await product.save();
      }
  
      res.status(200).json({ message: "Product quantities updated successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Unknown error occurred" });
    }
  });
  
  
  router.put('/editproduct', async(req,res)=>{
    try{
      const Product_Id = req.body.Product_Id;
      console.log(Product_Id)
      const updatedProduct = req.body;
      console.log("updated product",updatedProduct)
      const product= await Product.findOne({Product_Id})
      console.log("product", product)
      if(!product){
        res.status(500).json({message:"Producty not found"})
        return
      }
        product.Product_Name = updatedProduct.Product_Name;
        product.Product_Category = updatedProduct.Product_Category;
        product.Product_Quantity = updatedProduct.Product_Quantity;
        product.Product_Description = updatedProduct.Product_Description;
        product.Product_Discount = updatedProduct.Product_Discount;
        product.Product_Availability = updatedProduct.Product_Availability;
        product.Product_Price = updatedProduct.Product_Price;
        product.Product_Image = updatedProduct.Product_Image;
    
        await product.save();
    
        res.status(200).json({ message: 'Product updated successfully' });
  
    } catch(err){
      res.status(500).json({message:"Unknown error occured"})
    }
  })
  
  
  
  router.post('/createproduct',async (req, res)=>{
    try{
      console.log(req.body)
     const{Product_Id,Product_Name,Product_Category,Product_Price,Product_Quantity,Product_Description,Product_Discount, Product_Availbility, Product_Image}=req.body;
     const newProduct = new Product({Product_Id,Product_Name,Product_Price,Product_Category,Product_Quantity,Product_Description,Product_Discount, Product_Availbility,Product_Image});
     newProduct.save();
     console.log(newProduct)
     res.status(200).json({message:"Products added successfully"})
    } catch(err){
      res.status(500).json({message:"Unknown error ocuured"})
    }
  })
  
  router.get('/getproducts', verifyAdmin,  async (req, res) => {
    try {
      const products = await Product.find();
      const users= await User.find()
      const product= await Payment.find()
      const userslength=users.length;
      res.json({products:products, length:userslength, product:product} ); 
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Unknown Error occurred" });
    }
  });
  
  
router.get('/getpaymentdetails', async (req,res)=>{
    try{
      const payment= await Payment.find();
      res.status(200).json({message:"Payment details obtained succ3essfully", payment:payment})
    }catch(err){
      res.status(500).json({message:"Unknown error occured"})
    }
  });
  
function verifyAdmin(req,res,next){
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
      }
    
      let token = req.headers.authorization.split(' ')[1];
      if (token === 'null') {
        return res.status(401).send('Unauthorized request');
      }
    
      try {
        let payload = jwt.verify(token, 'blah');
        if (!payload) {
          return res.status(401).send('Unauthorized request');
        }

        next();
      } catch (error) {
        return res.status(401).send('Unauthorized request');
      }
}
module.exports = router;
