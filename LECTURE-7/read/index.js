const fs=require("fs");
// fs.readFile("../users.txt", "utf-8", function(err, data){   
//     if(err) return console.log(err);
//     console.log(data);
//     //console.log(data[0]);  // since we have written in the users.txt using JSON so it has already converted the content into string so if we try to access first index it will print the first index of the string 
//                             // that is '['

//     let user=JSON.parse(data);   // JSON.parse converts string into array.
//     console.log(user[0]);    // we can now access the indices of the array.
//     console.log(user[0].name);

// })

const {read}=require("../ioOperation/utils");
async function readFile(filepath){
    let data=await read(filepath);
    console.log(data);
}
readFile("../users.txt");

