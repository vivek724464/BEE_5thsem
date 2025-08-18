const Blogs=require("../model/blog");
const User=require("../model/user");

module.exports.postAddBlog=async (req, res)=>{
    let{title,body, userId}=req.body;
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
}

module.exports.getReadBlog= async(req, res)=>{
    try{
        let allBlog=await Blogs.find();
        res.json({
            success:true,
            data:allBlog
        })
    }catch (error){
        res.json(error);
    }
}


module.exports.getOneblog= async(req, res)=>{
    let {id}=req.params;
    let blog=await Blogs.findOne({_id:id});   // can be found by multiple atttribute
    res.json({
        success:true,
        data:blog
    })
}


module.exports.deleteBlog=async (req, res)=>{
    let {blogId, userId}=req.params;

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
}

module.exports.updateBlog=async (req, res)=>{

    let{blogId, userId}=req.params;
    let{title, body}=req.body;

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

}