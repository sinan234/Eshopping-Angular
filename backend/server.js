const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const db = require('./src/dbconnection');
const jwt = require('jsonwebtoken');
const User = require('./models/usermodel');
const Cart= require('./models/cart');
const cors = require('cors');
const Productwish = require('./models/wishlist');
const bodyParser = require('body-parser');
const Product=require('./models/adminproducts')
const Payment = require('./models/payment');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const adminRouter=require('./routes/admin')

const sessionTimeout = 1800000;
db.connect()
app.use(cors());
app.use(cookieParser());



app.use(bodyParser.json());
app.use('/admin', adminRouter)



app.get('/special',function (req, res) {
  const  specialEvents = [
    {"specialEventId": "1", "specialEventName": "Event 1"},
    {"specialEventId": "2", "specialEventName": "Event 2"},
    {"specialEventId": "3", "specialEventName": "Event 3"},
  ]
  res.json(specialEvents);
});



app.get('/getproductsfromadmin', verifyToken, async(req,res)=>{
  try {
    const product= await Product.find()
    res.json(product); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unknown Error occurred" });
  }
})

app.post('/create_user', async(req, res) => {
  try {
    var { name, email, password } = req.body;
    var password= await bcrypt.hash(password, 10)
    const newUser = new User({ name, email, password });
    newUser.save();
    console.log('User created:', newUser); 
    let payload ={subject :  newUser._id}
    let token= jwt.sign(payload, 'secretKey')
    res.status(201).json({ message: "User created successfully" , token});
  } catch (error) {
    console.log('Error creating user:', error); 
    res.status(500).json({ message: "Error creating user" });
  }
});
 
app.post('/payment', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken=jwt.verify(token, 'secretKey');
    const user_id = decodedToken.userId;
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const date=today.toUTCString();
    
    console.log('User id:', user_id);
    const { paymentId, products, amount } = req.body;
    console.log('Payment id:', paymentId);
    console.log('Amount:', amount);
    console.log('Products:', products);
    const Paymentdetails=new Payment({user_id, paymentId, products, amount, date});
    await Paymentdetails.save();

    const user= await Cart.find({user_id});
    if(!user){
      console.log('No users found');
      return res.status(400).json({message: "No users found"});
    }

    await Cart.deleteMany({ user_id });

   
    res.status(200).json({ message: 'Payment successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error making payment' });
  }
});

app.post('/create_wishlist', async (req, res) => {
  try {
    const {
      product_name,
      product_id,
      product_price,
      product_image,
      product_available
    } = req.body;

    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'secretKey');
    const user_id = decodedToken.userId;

    const existingProduct = await Productwish.findOne({
      user_id,
      product_id
    });

    if (existingProduct) {
      console.log('Product already exists');
      return res.status(400).json({ message: 'Product already exists' });
    }

    const newProduct = new Productwish({
      product_name,
      product_id,
      product_price,
      product_image,
      product_available,
      user_id
    });

    await newProduct.save();
    console.log('Product added:', newProduct);
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    console.log('Error adding product:', error);
    res.status(500).json({ message: 'Error adding product' });
  }
});

app.get('/get_wishlist', async (req, res) => {
  try{
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken=jwt.verify(token, 'secretKey');
    const user_id = decodedToken.userId;
    const products = await Productwish.find({user_id})
    if(!products){
      console.log('No products found');
      return res.status(400).json({message: "No products found"});
    }

    res.status(200).json({products});
  } catch(error){
    console.log('Error getting products:', error);
    res.status(500).json({message: "Error getting products"});
  }
});

app.delete('/remove_wishlist', async (req, res) => {
    try{
      const {product_id} = req.body;
      console.log('Product id:', product_id);
      const product = await Productwish.deleteOne({ product_id });
      console.log('Product deleted:', product);
      res.status(200).json({message: "Product deleted successfully"});
    } catch(error){
      console.log('Error deleting product:', error);
      res.status(500).json({message: "Error deleting product"});
    }

});

app.post('/checkwishlist', async(req, res) => {
  try {
    const product_id = req.body.id;
    const product=await Productwish.findOne({product_id});
    if(!product){
      res.status(200).json({message:'a'})
    }
    else{
    res.status(200).json({message:'b'})
    }
  } catch(err) {
    res.status(500).json({ message: "Unknown error occurred" });
  }
});

app.post('/addToCart', async (req, res) => {
  try{ const {product_id} = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken=jwt.verify(token, 'secretKey');
  const user_id = decodedToken.userId;
  const newCart = new Cart({product_id, user_id});
  newCart.save();
  res.status(201).json({message: "Product added to cart successfully"});
}catch(error){
   console.log('Error adding product to cart:', error);
   res.status(500).json({message: "Error adding product to cart"});
}
});

app.get('/getCart', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken=jwt.verify(token, 'secretKey');
  const user_id = decodedToken.userId;
  const products = await Cart.find({user_id})
  if(!products){
    console.log('No products found');
    return res.status(400).json({message: "No products found"});
  }
  res.json(products);
});

app.delete('/removeCart/:id', async (req, res) => {
  try {
    const product_id = req.params.id;
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'secretKey');
    const user_id = decodedToken.userId;

    const product = await Cart.findOneAndDelete({ product_id, user_id });

    if (!product) {
      console.log('No product found in the cart');
      return res.status(400).json({ message: "No product found in the cart" });
    }

    res.json({ message: "Product removed from cart successfully" });
  } catch (error) {
    console.log('Error removing product from cart:', error);
    res.status(500).json({ message: "Error removing product from cart" });
  }
});


app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const session = {
      userId: user._id,
      expiry: Date.now() + sessionTimeout
    };

    const token = jwt.sign(session, 'secretKey');
    user.token = token; 
    await user.save();
    const cookieValue = {
      token,
      sessionIndicator: true,
      sessionEnd: session.expiry
    };

    res.cookie('userCookie', JSON.stringify(cookieValue), {
      maxAge: sessionTimeout,
      secure: true,
      httpOnly: true
    });
    // console.log('User logged in:', user);
    res.status(201).json({ message: "Authentication successful" , name: user.name,cookie: cookieValue});

  } catch (error) {
    console.log('Error logging in:', error);
    return res.status(500).json({ message: "Error logging in" });
  }
});

app.get('/getOrderedProducts', async (req, res) => {
try{
   let array=[  ];
   const token=req.headers.authorization.split(' ')[1];
   const decodedToken=jwt.verify(token, 'secretKey');
   const user_id = decodedToken.userId;
   const paymentId= req.query.paymentId;
  //  console.log("paymentId", paymentId);
   const order=await Payment.find({paymentId});
   if(!order){
    console.log("No order exists");
    res.status(500).json({message:"No order exists"});
   }
   for(let i=0;i<order.length;i++){
      // console.log("ordered products", order[i].products);
      array.push(order[i].products);
   }
   
   
  // const orderedProducts=order[21].products;
  // console.log("ordered products", orderedProducts);
   res.status(200).json(array);
  }
  
catch(error){
  console.log('Error getting ordered products:', error);
  res.status(500).json({message: "Error getting ordered products"});
}});

app.get('/getAllOrderedProducts', async (req, res) => {
try{
  const token=req.headers.authorization.split(' ')[1];
  const decodedToken= jwt.verify(token, 'secretKey');
  const user_id=decodedToken.userId;
  // console.log('User id:', user_id);
  const orderedProducts= await Payment.find({user_id});
  if(!orderedProducts){
    console.log('No ordered products found');
    res.status(500).json({message: "No ordered products found"});
  }
  // console.log('Ordered products:', orderedProducts);
  res.status(200).json(orderedProducts);
} catch(err){
   console.log('Error getting all ordered products:', err);
}

});


function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request');
  }

  let token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    return res.status(401).send('Unauthorized request');
  }

  try {
    let payload = jwt.verify(token, 'secretKey');
    if (!payload) {
      return res.status(401).send('Unauthorized request');
    }
    next();
  } catch (error) {
    return res.status(401).send('Unauthorized request');
  }
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




