const {WebSocketServer}=require("ws");

const wss = new WebSocketServer({ port: 8080 });

//eventHandler  "on" is the event
wss.on("connection", function(socket){
    console.log(socket);
    setInterval(()=>{
        socket.send("Hii, welcome");     // like res.send
        socket.send("Reliance stock price"+" "+ Math.random()*100000);
    }, 500);

     socket.on('message', function message(data) {
    console.log(data.toString());
  });
    
})