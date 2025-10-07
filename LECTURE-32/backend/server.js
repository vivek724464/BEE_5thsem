const {WebSocketServer}=require("ws");

const wss = new WebSocketServer({ port: 8080 });

//eventHandler  "on" is the event and "connection is the event name"
// socket is unique for every connection

wss.on("connection", function(socket){
    console.log("User Connected");
    socket.on("message", function(message){
      console.log("message recieved " + message.toString());
      if(message.toString()==="ping"){
        socket.send("Pong");
      }
    })
    
})



// Creating broadcasting

// let allSocket=[];  // array for every socket storage

// wss.on("connection", function(socket){
//   console.log("user connected");
//   allSocket.push(socket);    // storing every connection data using socket. socket is unique for every connection
//   socket.on("message", function(message){
//     console.log("message recieved " + message.toString());
//     allSocket.forEach((s)=>{      // looping the array and sending message to every connection{Broadcasting};
//       s.send(message.toString());
//     })
//   })
// })