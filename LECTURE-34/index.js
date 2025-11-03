const express=require('express');
const {createClient}=require('redis');
const app=express();

const client =createClient({url: 'redis://localhost:6379'});
client.on('error', (err) => console.error(' Redis Client Error', err));

(async () => {
  await client.connect();
  console.log('Connected to Redis');
})();

async function cacheUserProfile() {
    await client.set("user:1", JSON.stringify({name:"Vivek Kumar", age:"20"}));
    
}
async function readProfile() {
    let data=await client.get("user:1");
   return data;
}

// cacheUserProfile()
// .then(()=>{
//     console.log("Profile cached");
// });

readProfile()
.then((data)=>{
    console.log(data);
})

app.listen(3333, ()=>{
    console.log("server started");
})