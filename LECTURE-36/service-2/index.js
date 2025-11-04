const {createClient}=require('redis');
let client=createClient();

async function notify(){
    // await client.connect()           if we are not connecting the client speratly we can connect before publishing the data
    await client.subscribe("notify-me", (data)=>{
        console.log(data)
    })
}
setTimeout(()=>{    // using setTimeout to make sure first redis is connected and then event function is called.
notify();
}, 2000);


client.connect()
.then(()=>console.log("redis connected"));
