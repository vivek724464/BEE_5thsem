let users=[
    {
        id:1,
        name:"Vivek",
        age:20
},
{
    id:2,
    name:"Sanam",
    age:20
}
]

//Synchronous code 
// function isAllowed(id){
//     let user=users.filter((p)=> p.id==id)[0];  // blocks thread while searching the array
//     if(!user){
//         return console.log("User not found");
//     }
//     if(user.age>=18){
//         return console.log("You can vote");
//     }else{
//         return console.log("You can't vote");
//     }
// }
// isAllowed(2);
// console.log("Start")   // this will be printed at last due to synchronous code.


//Asynchronous Code using promise.

function isAllowed(id){
   return  new Promise((resolve, reject)=>{
        let user=users.filter((p)=> p.id==id)[0];
    if(!user){
        return reject("User not found");
    }
    if(user.age>=18){
        return resolve("You can vote");
    }else{
        return reject("You can't vote");
    }
    })
    
}
isAllowed(2).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
})
console.log("Start");     // this will be printed first due to asynchronous code.