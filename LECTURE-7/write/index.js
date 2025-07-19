let users=[
    {
        name:"Sanam",
        age:20,
        address:"Buxar"
    },
    {
        name:"Vivek",
        age:20,
        address:"Buxar"
    }
]

let users2=[
    {
        name:"Ravi",
        age:22,
        address:"Delhi"
    },
    {
        name:"Shani",
        age:24,
        address:"Jaipur"

    }
]

const fs=require("fs");   // by default it imports call back api not the promise one



// fs.writeFile("../users.txt", users.toString(), function(err){  // we want to write object in the file. If we use toString it will not give the data of the object it only prints [object object].
//     if(err) return console.log("err");
//     console.log("user written");
// })

// fs.writeFile("../users.txt", JSON.stringify(users), function(err){    // we will use JSON which will convert both key and value of the object into string ad=nd then write it into file.
//     if(err) return console.log("err");     
//     console.log("user written");
// })

// fs.writeFile("../users1.txt", JSON.stringify(users2), function(err){    
//     if(err) return console.log("err");     
//     console.log("user written");
// })

const {write}=require("../ioOperation/utils")
async function writeFile(filepath, data){
    await write(filepath, data);
}

writeFile("../users.txt", users);