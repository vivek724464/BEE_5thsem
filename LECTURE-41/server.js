const express=require("express");
const mongoose=require("mongoose");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res)=>{
    res.send("Hello world");
})
mongoose.connect("mongodb://mongo:27017/g26DB")
.then(()=>{
    console.log("mongoDB cnnected");
})
app.listen(3333, ()=>{
    console.log("server started");
})