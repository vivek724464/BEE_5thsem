const express=require("express");
const User=require("./model/user.model");
const mongoose=require("mongoose");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post("/api/users/register",async(req,res)=>{
    let {name,email,password}=req.body;
    let userExist=await User.findOne({email})
    if(userExist){
        return res.json({
            success:true,
            message:"User already exists"
        })
    }
    let newUser=await User.create({ 
        name,email,password
    })
  
    res.json({
        succes:true,
        message:"user register successfully",
        data:newUser
    });

})

module.exports=app;
// mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
//   .then(() => console.log('Connected!'));

