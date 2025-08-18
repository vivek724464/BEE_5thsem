const express=require("express");
const router =express.Router();    // router is like a small application.
const Blogs=require("../model/blog");
const User=require("../model/user");
const {postAddBlog, getReadBlog, getOneblog, deleteBlog, updateBlog}=require("../controller/blogController");

 router.post("/",postAddBlog);

// router.get("/blogs",async (req,res)=>{
//     let allBlog= await Blogs.find();
//     res.json({
//         success:true,
//         data:allBlog
//     })
// })
router.get("/", getReadBlog);

router.get("/:id", getOneblog);

//delete blog
router.delete("/:blogId/:userId" , deleteBlog);

router.put("/:blogId/:userId",updateBlog);

module.exports=router;

