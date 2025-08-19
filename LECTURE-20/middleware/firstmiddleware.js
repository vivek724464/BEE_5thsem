function m1(req, res, next){
    console.log("running m1");
    req.userId="4";
    return next();     // return finishes the function means after calling it the code after that will not not run even when the middleware returns. 
    console.log("after next 1");
}
function m2(req, res, next){
    console.log("running m2");
    console.log(req.userId);
    req.isAdmin=true;
     return next();
    console.log("after next 2");
}

module.exports.m1=m1;
module.exports.m2=m2;
