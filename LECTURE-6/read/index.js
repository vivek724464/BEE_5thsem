const fs=require("fs");
fs.readFile("../demo.txt", "utf-8", function(err, data){
    if(err) return console.log(err);
    console.log(data);   // this will give us output as buffer which is used read or write binary data if we not give second argument that is encoding.
    // we can also use toString method  without second argument.
    console.log(data.toString());
});