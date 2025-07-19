const fs=require("fs");



// if we read like this we can't remove spaces 
// fs.readFile("../demo.txt", "utf-8", function(err, data1){
//     if(err) return console.log(err);

//     fs.readFile("../demo2.txt", "utf-8", function(err, data2){
//         if(err) return console.log(err);
//         let combined=data1+ "\n"+data2;
        

//         fs.writeFile("demo3", combined, function(err, data){
//             if(err) return console.log(err);
//         })
//     })
// })

fs.readFile("../demo.txt", "utf-8", function(err, data1){
    if(err) return console.log(err);

    fs.readFile("../demo2.txt", "utf-8", function(err, data2){
        if(err) return console.log(err);

        let combined=data1+ "\n"+data2;

        // will print in new lines.
        // let actCombined=combined.split('\n')
        // .filter((l)=>{
        //    return l.trim() !== ''
        // })
        // .join('\n');

        //will print in the same line. 
        let actCombined=combined.replace(/\s+/g, " ")
        .trim();

        fs.writeFile("demo3.txt", actCombined, function(err, data){
            if(err) return console.log(err);
        })
    })
})



