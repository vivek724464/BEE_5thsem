const {WebSocketServer}=require("ws");
const {v4: uuidv4}=require("uuid");

const wss = new WebSocketServer({ port: 8080 });

//eventHandler  "on" is the event and "connection is the event name"
// socket is unique for every connection

// wss.on("connection", function(socket){
//     console.log("User Connected");
//     socket.on("message", function(message){
//       console.log("message recieved " + message.toString());
//       if(message.toString()==="ping"){
//         socket.send("Pong");
//       }
//     })
    
// })



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

let rooms =new Map();
wss.on("connection", (socket)=>{
  console.log("a new user connected");

  socket.on("message", function(message){
    let parsedMessage=JSON.parse(message);    // parsing incoming string/buffer data into object coz string or buffeer type data can be sent to the webSocket server
    const {type, payload}=parsedMessage;
    if(type==="join"){
      let {roomId}=payload;
      if(!rooms.get(roomId)){
        rooms.set(roomId, new Set());
      }
      rooms.get(roomId).add(socket);
      console.log(rooms);
      socket.roomId=roomId;
      socket.send("added to room");
    } 
    else if(type==="chat"){
      let {message}=payload;
      let {roomId}=socket;

      let allClients=rooms.get(roomId);
      allClients.forEach((s) => {
        s.send(message.toString());
      });

    }
    else if(type==="create"){
      let roomId=uuidv4();
      socket.send(JSON.stringify({
        type:"create",
        payload:{
          roomId:roomId
        }
      }))
    }

  })
})

