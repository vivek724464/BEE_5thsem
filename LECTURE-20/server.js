const express=require("express");
const { m1, m2 } = require("./middleware/firstmiddleware");
const{m3, m4, }=require("./middleware/pathlevelmiddleware");
const {m5}=require("./middleware/routerlevel");
const router = require("./routes/userRoutes");
const app=express();
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(m1);
app.use("/api/users",  router);


app.get("/health", m3,(req, res, next)=>{
    console.log("Running controller function");
    next();
     return res.json({
        status:"okay",
        message:"Server running okay"
    })
    console.log("after response");
});
app.use(m2);
app.get("/home",m4, (req, res, next)=>{
    console.log("running home end point");
    res.json({
        success:true,
        message:"Welcome to home page"
    })
})




app.listen(5555, ()=>{
    console.log("Server started");
})


//middelware is a function which run on client req before controller function. Middleware has both req and res objects 
//app.use makes the middleware run on every client request that is application layer.
// middleware will run in the order they are called. Controller function has also next that can be called.
// after calling next its not that function is ended the controll return in reverse order and complete every middleware and controller function.
//middleware: application layer middlewafre, path level middleware, router level middleware, error handling middleware.