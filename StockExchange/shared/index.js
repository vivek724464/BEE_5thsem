let {createClient}=require('redis');
let publisher=createClient();
let subscriber=createClient();

// publisher.connect().then(()=> console.log("Connected to publisher"));
// subscriber.connect().then(()=> console.log("Connected to subscriber"));

module.exports={
    publisher,
    subscriber
}
