const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const cookieParser=require("cookie-parser");
const port=process.env.port;
require("./db/conn");

app.use(cookieParser());
app.use(express.json());
app.use(require('./router/route'))
// Middleware

// const Middleware=(req,res,next)=>{
//     console.log("this is my middleware");
//     next();
// }

// app.get('/',(req,res)=>{
//     res.send(`hello world from abhishek appjs`)

// });
// app.get('/about',  Middleware,(req,res)=>{
//    // console.log("this is about");
//     res.send(`hello world from about page`)

// });
// app.get('/contact',(req,res)=>{
//     // res.cookie("test",'abhishek');
//     res.send(`hello world from contact page`)

// });
// app.get('/login',(req,res)=>{
//     // console.log("this is about");
//      res.send(`hello world from login page`)
 
//  });
 app.get('/signup',(req,res)=>{
    // console.log("this is about");
     res.send(`hello world from signup page`)
 
 });
app.listen(port,()=>{
    console.log(`server is running on port number ${port}`);
})