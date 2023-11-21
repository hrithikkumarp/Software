const port=process.env.PORT || 3000;
const cors=require("cors");
const express=require('express');
const conne= require('./data/connection');
const routesP= require('./data/routesP'); 
const routesU=require('./data/routesU');
const routesB=require('./data/routesB');
const routesv=require('./data/routesv');
const routPay=require('./data/pay')
const bodyParser = require('body-parser')
conne(); 
const app=express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/p',routesP);
app.use('/u',routesU);
app.use('/b',routesB);
app.use('/a',routesv);
app.post('/orders',routPay.orders);
app.post('/verify',routPay.verify)
app.use('/uploads', express.static('uploads')); 
app.listen(port,()=>{
    console.log("Serve list");
}); 