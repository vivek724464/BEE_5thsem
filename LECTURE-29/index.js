
const { PrismaClient } = require("./generated/prisma");


const prisma=new PrismaClient(); 
async function addUser(name, email, password) {
    let newUser =await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    })  
    return newUser;
}

async function addTweet(userId, content) {
   let newTweet = await prisma.tweet.create({
        data:{
            content:content,
            userId:userId
        }
    })
    return newTweet

}

async function getUserTweet(userId){
    let tweets=await prisma.tweet.findMany({
        where:{
            userId:Number(userId)
        }
    })
    return tweets;
}

//user wants to update his tweet

async function updateTweet(userId , tweetId, updatedContent){
    let tweet=await prisma.tweet.findUnique({
        where:{
            id:Number(tweetId)
        }
    })

    if(!tweet){
        return console.log("tweet does not exist")
    }

    if(tweet.userId !== Number(userId)){
        return console.log("You are not authorized to update this tweet");
    }

    let updatedTweet=await prisma.tweet.update({
        where:{
            id:Number(tweetId)
        },
        data:{
            content:updatedContent
        }
    })
    return updatedTweet;
}


async function deleteTweet(tweetId, userId) {
    let tweet = await prisma.tweet.findUnique({
        where:{
            id:Number(tweetId)
        }
    })

    if(!tweet){
        return console.log("tweet does not exist");
    }

    if(tweet.userId != userId){
        return console.log("You are not authorized to delete this tweet");
    }

    return await prisma.tweet.delete({
        where:{
            id:Number(tweetId)
        }
    })
    
}



// addUser("vivek kumar", "vivekbxr1@gmail.com", "1111")
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error);
// })


// addTweet(1, "tweet1")
// .then((data)=> console.log(data))
// .catch((error)=> console.log(error))


getUserTweet("1")
.then((data)=> console.log(data))
.catch((error)=> console.log(error))

// updateTweet("1", "1", "updated tweet")
// .then((data)=>{
//      console.log(data);
//      console.log("tweet updated")
//     })
// .catch((error)=> {
//     console.log(error);
    
// })

// deleteTweet("1", "1")
// .then((data)=>{
//     console.log(data)
//     console.log("tweet deleted successfully");
// })
// .catch((error)=>{
//     console.log(error)
// })