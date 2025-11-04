let {createClient}=require('redis');
let client=createClient();
function notify(){
    client.publish("notify-me", JSON.stringify({
        event_id:1,
        message:"Iphone is back in stock"
    }))
}

setTimeout(()=>{
    notify();
}, 2000)

client.connect()
.then(()=>console.log("Redis connected"));