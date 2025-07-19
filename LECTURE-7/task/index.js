const fs= require("fs");

fs.readFile("../users.txt", "utf-8", function(err, data1){
    if(err) return console.log(err);
    let user1=JSON.parse(data1);

    fs.readFile("../users1.txt", "utf-8", function(err, data2){
        if(err) return console.log(err);
        let user2=JSON.parse(data2);
        // let combined=[];
        // let combined = [...user1, ...user2];

        let combined=user1.concat(user2);
        // for(i=0; i<user1.length; i++){
        //     combined.push(user1[i]);
        // }

        // for(i=0; i<user2.length; i++){
        //     combined.push(user2[i]);
        // }
        fs.writeFile("../mainUser.txt", JSON.stringify(combined), function(err){
            if(err) return console.log(err);
            console.log("Done");
        })
    })
})