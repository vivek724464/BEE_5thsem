const express=require("express");
const orderRoute=require("./Routes/order");
const app=express();
app.use(express.json());

app.use("/api/v1/order", orderRoute);

app.get("/",(req, res)=>{
    console.log("route");
})

app.listen(3000, ()=>{
    console.log("server started");
})