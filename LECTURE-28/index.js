const {PrismaClient}=require('./generated/prisma');
//PrismaClient has all the classes mean clients.

const prisma=new PrismaClient();    
async function addUser(name, email, password){
await prisma.user.create({                     // user is a class and create is method
    data:{
    email:email,
    name:name,
    password:password
    }
})
}


async function getAllUser() {
    let allUser=await prisma.user.findMany();
    return allUser;
    
}

async function getUserbyId(id) {
    const user=await prisma.user.findUnique({
         where: {
             id: id,
         }
    })
    return user;
}

async function updateUser(id, data) {
    const updatedUser=await prisma.user.update({
        where :{
            id:id
        },
        data:data
    })
    return updatedUser;
    
}

async function deleteUserbyId(id) {
    const deletedUser=await prisma.user.delete({
        where:{
            id:id
        }
    })
    return deletedUser;
}

// addUser("vivek12345@gmail.com", "sanam singh singh", "123456")
// .then(()=>{
//     console.log("User added successfully");
// }).catch((error)=>{
//     console.log(error);
// })

// getAllUser()
// .then((data)=>{
//     console.log(data);
// })
// .catch(()=>{
//     console.log("no user exist");
// })


// getUserbyId(1)
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// updateUser(1, {
//     email:"vivek123@gmail.com",
//     name:"vivek kumar",
//     password:"12345"
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

deleteUserbyId(1)
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})