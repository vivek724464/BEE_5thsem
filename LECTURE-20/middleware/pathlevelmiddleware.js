function m3(req, res, next){
    console.log("running m3");
    next();
}
function m4(req, res, next){
    console.log("running m4");
    next();
}



module.exports.m3=m3;
module.exports.m4=m4;
