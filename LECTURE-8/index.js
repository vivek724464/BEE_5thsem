const express=require("express");  

const app = express()

app.get('/', (req, res) => {
  //res.send("<h1>ok</h1>");
  
 // res.sendFile("index.html");  // relative path will not work\
// res.sendFile(__dirname+"/index.html");   // __dirname gives the whole path of file(__dirname create absolute path)
//  res.json({
//     name:"Sanam Singh",
//     age:20
//  })

//res.end("hi");

})

// path-variable
// 1.Query Parameter (us ? to send data through url and & for multiple query)
// app.get("/watch", (req, res)=>{
//     // console.log(req.query.v);     // req.query is an object and we can access its members using . operator
//     let vid=req.query.v;
//     let nid=req.query.n;

//     res.send("id got it" + vid + nid);
// })



//2.Params  (use / to send data in url)
// app.get("/watch/:v", (req,res)=>{
//     // console.log(req.params);    //req.params is also an object.
//     let vid=req.params.v;
//     console.log(vid);
//     res.send("id got" + vid);
// })
 // Multiple params
app.get("/watch/:v/video/:n", (req,res)=>{
    let vid=req.params.v;
    let nid=req.params.n;
    console.log(vid, nid);
    res.send("id got" + vid + nid);
})


app.listen(4444, ()=>{
    console.log("server started")
})