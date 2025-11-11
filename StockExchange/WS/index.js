const WebSocket = require("ws");
let{subscriber, publisher}=require("../shared/index");
const wss = new WebSocket.Server({ port: 8080 });
let allSocket=[];

wss.on("connection", (ws) => {
  console.log("New client connected!");
  allSocket.push(ws);
  (async function orderBookUpdate(){
    await subscriber.connect();
        await subscriber.subscribe("book_update", (message)=>{
            let parsedMsg=JSON.parse(message);
            console.log(parsedMsg);
            broadcast(parsedMsg);
        })
})()  // IIFE-Immediately invoking function
})


function broadcast(message){
    allSocket.forEach((s) => {
        let data=JSON.stringify(message);
        s.send(data);
    });
}