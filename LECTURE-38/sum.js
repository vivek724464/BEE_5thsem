function sum(a,b){
    if(!a || !b){
        return "all argument must be required";
    }
    else if(typeof(a) != "number" || typeof(b) != "number"){
         return "all argument must be number"
    }
    return a+b;
}

module.exports=sum;