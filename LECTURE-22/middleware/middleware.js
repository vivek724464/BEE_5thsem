const jwt=require("jsonwebtoken");

const isLoggedIn= async(req, res, next)=>{
    if(!req.headers.authorization){
        return res.json({
            success:false,
            message:"No authorization key provided"
        })
    }
    let token =req.headers.authorization;
    if(!token){
         return res.json({
        sucess:false,
        message:"Please Login"
    })
    }
    let decode =jwt.verify(token, "vivek");
    if(!decode){
    return res.json({
        success:false,
        message:"Invalid token"
    })
  }
    // req.userId=decode.id;
  req.user=decode.user;
    
    next();
}
module.exports.isLoggedIn=isLoggedIn;