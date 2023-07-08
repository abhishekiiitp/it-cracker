const jwt=require('jsonwebtoken');
const express=require('express');
const user = require('../module/userSchema');
const router=express.Router();
const bcrypt=require('bcryptjs');
require('../db/conn');
const User=require('../module/userSchema');
const authenticate = require("../middleware/authenticate");
router.get('/',(req,res)=>{
    res.send(`hello world from abhishek routejs`)

});

// data storing in database 
// ---using promises---
// router.post('/register',(req,res)=>{
//     // console.log(req.body);
//     // res.json({message:req.body});
//     const {name,email,phone,password,cpassword}=req.body;
//     // if theres any field empty
//     if(!name||!email||!phone||!password||!cpassword)
//     {
//         return res.status(422).json({error:"plz filled the field properly"})
//     }
// // if their is already user exist
//     user.findOne({email:email}).then((userExist)=>{
//         if(userExist)
//         {
//             return res.status(422).json({error:"email already exist"});

//         }
//         const user=new User({name,email,phone,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"registered succeessfully"});
//         }).catch((err)=>res.status(500).json({error:"failed to register"}))
//     }).catch(err=>{console.log(err);});
// })

// ---using Async-Await

router.post('/register',async(req,res)=>
{
    
    const {name,email,phone,password,cpassword}=req.body;
    // if theres any field empty
    if(!name||!email||!phone||!password||!cpassword)
    {
        return res.status(422).json({error:"plz filled the field properly"})
    }
    try
    {
        // if their is already user exist
     const userExist=await User.findOne({email:email});

     if(userExist)
     {
        return res.status(422).json({error:"email already exist"});
     }
     else if(password!=cpassword)
     {
        return res.status(422).json({error:"password not matched"});
     }
     else
     {
        const user=new User({name,email,phone,password,cpassword});
        await user.save()
        res.status(201).json({message:"registered succeessfully"});
     }
   

    }
    catch(err)
    {
        console.log(err);

    }
        
})

// Login Route

router.post('/login',async(req,res)=>
{
    try
    {
        let token;
    const {email,password}=req.body;
    // if theres any field empty
    if(!email||!password)
    {
        return res.status(420).json({error:"plz filled the field properly"})
    }
    
        // if their is already user exist
     const userLogin=await User.findOne({email:email});
    // console.log(userLogin);
     if(userLogin)
     {
        const isMatch=await bcrypt.compare(password,userLogin.password);
       // console.log(userLogin.password,isMatch);
       
     if(!isMatch)
     {
        return res.status(420).json({error:"invalid credentials"});
     }
     else{
         token=await userLogin.generateAuthToken();
         console.log(token);
        res.cookie("jwtoken",token);
  
        return res.json({message:"user signin successfully"});
     }
     }
      else{
        return res.status(420).json({error:"invalid credentials"});
      }
    

    }
    catch(err)
    {
        console.log(err);

    }
        
});

// about us ka page
router.get('/about',(req,res)=>{
    //  console.log("this is about");
     res.send(req.rootUser);
    
 });
 
//  course ka page
router.get('/course',  authenticate,(req,res)=>{
    // console.log("this is about");
    res.send(req.rootUser);
   
});

// get data of user for home page and contact page
router.get('/getdata',authenticate,(req,res)=>{
    //  console.log("this is about");
     res.send(req.rootUser);
    
 });

 // contact us page 

router.post('/contact', authenticate, async (req, res) => {
    try {

        const { name, email, phone, message } = req.body;
        
        if (!name || !email || !phone || !message) {
            console.log("error in contact form");
            return res.json({ error: "plzz filled the contact form " });
        }

        const userContact = await User.findOne({ _id: req.userID });

        if (userContact) {
            
            const userMessage = await userContact.addMessage(name, email, phone, message);

            await userContact.save();

            res.status(201).json({ message: "user Contact successfully" });

        }
        
    } catch (error) {
        console.log(error);
    }

});

//discuss ka page(comment section)

router.post('/discuss',(req,res)=>
{
    console.log("this is discuss 1");
     res.send(req.rootUser);
    
 });
 
// Logout  ka page 
router.get('/logout', (req, res) => {
    // console.log(`Hello my Logout Page`);
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('User lOgout');
});
module.exports=router;