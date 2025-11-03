const express=require('express');
const {Queue, Worker} = require('bullmq');
const app=express();

let codeQueue= new Queue("code-queue",{
     connection: {
    host: 'localhost',
    port: 6379,
  }
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post("/api/submission", async (req, res)=>{
    let {code, qId, language}=req.body;
    //upload this task to the message queue so that a work can work on it
    let job=await codeQueue.add("code-queue",{
        qId:qId,
        code:code,
        language:language,

    } )
    // console.log(job.id);

    res.json({
        message:"chcek server console",
        submissionId:job.id
    })
})
// worker for getting jobs from queue
let worker=new Worker("code-queue", function(job){
    let{qId, code, language}=job.data;
    setTimeout(()=>{
        console.log({
        qId:qId,
        success:true,
        time:"4ms",
        beat:"Top 10%"
    })
    },5000)
},{
     connection: {
    host: 'localhost',
    port: 6379,
  } 
}    
);


app.listen(3333, ()=>{
    console.log("Server started");
})