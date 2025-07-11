// function buyProduct(productNAme, cb){
//     // do some async operation
//     setTimeout(()=>{
//         console.log("All the I/O operation is completed and other details are saved.")
//         cb();
//     },100);
// }
// buyProduct("IPhone", function(){
//     console.log("Product is purchased.")
// })

let product=[{
    name:"Samsung",
    amount:70000,
    quantity:10
},
{
    name:"Iphone",
    amount:100000,
    quantity:0
}]


function buyProduct(productName, cb){
    // do some async operation
    let isProduct=product.filter((p)=>p.name==productName)[0];   // filter always return an array and by adding [] we can access the index data.
    if(!isProduct){
        return cb("Product is not available.", null)
    }
    cb(null, isProduct.amount);

    // console.log(isProduct);
}

let availableamount=2000000;
function deductbankamount(amount, cb){
    // do some bank transaction
    if(amount>availableamount){
        return cb("insufficient balance", null);
    }else{
        availableamount-=amount;
        //inversion of controll (no control over working)
    cb(null, "amount deducted");
    cb(null, "amount deducted");
    
    }
}

// callback hell 
buyProduct("Iphone", function(err, amount){
    if(err) return console.log(err);
    console.log(amount);
    deductbankamount(amount, function(err, msg){
        if(err) return console.log(err)
        console.log(msg);
    });
})
// const fs=require("fs");
// fs.readFile("filepath", "utf-8", function(err, msg))