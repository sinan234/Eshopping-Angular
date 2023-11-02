// const express = require('express');
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');

// app.use(cors());
// const path = require('path');

// app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(bodyParser.json()); 

// app.use(function(req, res, next) {
//   console.log("Request received");
//   next();
// });

// app.get('/signup', (req, res) => {
//   console.log("Page loaded");
//   res.sendFile(path.join(__dirname, '../frontend/src/app/sample1/sample1.component.html'));
// });

// app.post('/signup', (req, res) => {
//   console.log("Form submitted");
//   console.log(req.body);
//   console.log(req.body.fname);
//   res.send("Form submitted");
// });

// app.listen(5000, () => console.log("Server running on port 5000"));

// API Key - rzp_test_lwlav4cxjCCLRq
// API Secret - 8O5tQ9B7jsoUNuilQJKYLzMc

const Promise= require('promise');

function add(a,b){
    return new Promise((res,rej)=>{
        if(a==0 || b==0){
          rej("The numbers cannot be zero") 
        }
        res(a+b)
    })
}

function multiply(a){
    return new Promise((res,rej)=>{
        if(a==0){
            rej("The number cannot be zero")
        }
        res(a*a)
    })
}


function divide(a){
  return new Promise((res,rej)=>{
      if(a==0){
          rej("The number cannot be zero")
      }
      res(a/10)
  })
}

add(10,20).then((data)=>{
    console.log(data)
    return multiply(data);
}).then((product)=>{
    console.log(product);
    return divide(product);
}).then((div)=>{
    console.log(div);
})
.catch((err)=>{
    console.log(err)
})

