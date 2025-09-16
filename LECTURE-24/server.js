const express=require("express");
const mongoose = require('mongoose');
const {isLoggedIn}=require("./middleware/middleware");
const Blogs=require("./model/blog");
const User=require("./model/user");
const blog = require("./model/blog");
const jwt=require("jsonwebtoken");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.post("/blogs",isLoggedIn, async (req, res)=>{
    // let{title,body, userId}=req.body;
    let{title, body}=req.body;
    const userId=req.userId;
 

    let userExist= await User.findById(userId);
    if(userExist){
 let newBlog=new Blogs({
    title: title,
    body:body,
    date:Date.now(),
    userId:userId
 });
await newBlog.save();

userExist.blogs.push(newBlog._id);
await userExist.save();
res.json({
    success:true,
    data:newBlog,
    message:"blog added successfully"
})
}
})

// app.get("/blogs",async (req,res)=>{
//     let allBlog= await Blogs.find();
//     res.json({
//         success:true,
//         data:allBlog
//     })
// })
app.get("/blogs", async(req, res)=>{
    try{
        let allBlog=await Blogs.find();
        res.json({
            success:true,
            data:allBlog
        })
    }catch (error){
        res.json(error);
    }
})

app.get("/blogs/:id", async(req, res)=>{
    let {id}=req.params;
    let blog=await Blogs.findOne({_id:id});   // can be found by multiple atttribute
    res.json({
        success:true,
        data:blog
    })
});

//delete blog
app.delete("/blogs/:blogId/" ,isLoggedIn, async (req, res)=>{
    let {blogId}=req.params;
    const userId=req.userId;

    let blogExist=await Blogs.findById(blogId);
    if(!blogExist){
        return res.json({
            success:false,
            message:"Blog does not exist"
        })
    }
    if(blogExist.userId!=userId){
        return res.json({
            success:false,
            message:"You are not allowed to delete this blog"
        })
    }
    await Blogs.findOneAndDelete(blogId);

    let user=await User.findById(userId);
    let blogArr=user.blogs.filter((id)=> id!=blogId);
    user.blogs=blogArr;
    await user.save();
    res.json({
        success:true,
        message:"blog deleted successfully",
        data: user
    })
});

app.put("/blogs/:blogId/",isLoggedIn, async (req, res)=>{

    let{blogId}=req.params;
    let{title, body}=req.body;
    const userId=req.userId;

    let blogExist=await Blogs.findById(blogId);
    if(!blogExist){
       return res.json({
            success:false,
            message:"Blog does not exist"
        })
    }
      if(blogExist.userId!=userId){
        return res.json({
            success:false,
            message:"You are not allowed to edit this blog"
        })
    }
  let updatedBlog=  await Blogs.findByIdAndUpdate(blogId, { title, body}, {new:true});
    res.json({
        success:true,
        message:"Blog edited successfully",
        data:updatedBlog
    })

});

//like and unlike blog
app.post("/blogs/:blogId/like", isLoggedIn, async(req, res)=>{
    let {blogId}=req.params;
    let userId=req.userId;
    let blogExist=await Blogs.findById(blogId);
    if(!blogExist){
        return res.json({
            success:false,
            message:"blog not found"
        })
    }
    const alreadyLiked=await blogExist.likes.filter((id)=> id.toString() === userId.toString());
    if(alreadyLiked.length>0){
        blogExist.likes=blogExist.likes.filter((id)=> id.toString() !==userId.toString());
        blogExist.likeCount=blogExist.likes.length;

        await blogExist.save();
        return res.json({
            success:true,
            message:"blog Unliked"
        })
    }else{
        blogExist.likes.push(userId);
        blogExist.likeCount=blogExist.likes.length;
        await blogExist.save();
        return res.json({
            success:true,
            message:"Blog liked"
        })
    }

})


app.post("/users",async (req, res)=>{
    let{username, email, password}=req.body;
    let userExist=await User.findOne({email:email});
    if(userExist){
        return res.json({
            sucess:false,
            message:"Email already registered"
        })
    }
 let newUser=new User({
    username:username,
    email:email,
    password:password,
    
 });
await newUser.save();
res.json({
    success:true,
    data:newUser,
    message:"User added successfully"
})
});

app.post("/userLogin", async(req, res)=>{
    let {email, password}=req.body;
    let userExist = await User.findOne({email:email});
    if(!userExist){
        return res.json({
            success:false,
            message:"YOu are not registered, Please register first"
        })
    }
    if(userExist.password!==password){
        return res.json({
            success:false,
            messsage:"Invalid password"
        })
    }

    let token= jwt.sign({"userId":userExist._id}, "vivek");
    return res.json({
        success:true,
        message:"You are sucessfully logged in",
        token:token
    })
})
app.get("/users", async(req, res)=>{
    try{
        let allUsers=await User.find().populate("blogs");
        res.json({
            success:true,
            data:allUsers
        })
    }catch (error){
        res.json(error);
    }
})
app.get("/users/:id", async(req, res)=>{
    let {id}=req.params;
    let user=await User.findOne({_id:id}).populate("blogs");   
    res.json({
        success:true,
        data:user
    })
});




mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected!'));
app.listen(4444, ()=>{
    console.log("Server started");
})


