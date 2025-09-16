const mongoose=require("mongoose");
const User=require("./user");
const Like=require("./like");
const Schema=mongoose.Schema;
const BlogPost = new Schema({
  title: String,
  body: String,
  date: Date,
  userId:{
    type:mongoose.Types.ObjectId,
    ref:"User"
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  likeCount:{   
     type:Number,
    default:0
  }
});

module.exports=mongoose.model('Blog', BlogPost);    //model is a class

