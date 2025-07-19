const fs = require("fs");
fs.writeFile("../demo.txt", "G26 hello", function(err, data){
    if(err) return console.log(err);
})
fs.writeFile("../demo2.txt", "Hello World", function(err, data){
    if(err) return console.log(err);
    console.log(data);
})
fs.writeFile("../demo.txt", "hhhhhhhhh", function(err, data){
    if(err) return console.log(err);
})