// assignment 
//Part-1
/* write data in file using fs module, but input data should be taken using terminal 
// process.argv is an array where inputs from terminal are stored.
*/

const fs=require("fs");

// method of shifting. Shift removes the elements from the starting index.
process.argv.shift();
process.argv.shift();
let str= process.argv.toString().replace(/,/g, " ");


// Using loop to traverse the array and then adding the elements to the empty string and return it.
// let str=" "
// for(i=2; i<process.argv.length; i++){
//     str=str+"\n"+process.argv[i];
// }
fs.writeFile("./assign", str, function(err){
    if(err) return console.log(err);
    console.log("Done");
})
