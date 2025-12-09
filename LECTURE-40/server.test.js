const User=require("./model/user.model");
const mongoose=require("mongoose");
let {MongoMemoryServer}=require("mongodb-memory-server");
let app=require("./server");
let request=require("supertest");

let mongoServer;
beforeAll(async()=>{
    mongoServer=await MongoMemoryServer.create();   //starting memory server
    let url=mongoServer.getUri();  
    await mongoose.connect(url);
})
afterEach(async()=>{
    await User.deleteMany();
})

afterAll(async()=>{
    await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
})

describe("POST /api/users/register", ()=>{
    it("should return user already exist if email is nitesh@gmail.com", async()=>{
        await User.create({   // inserting data with same email for chceking
            name:"Sanam",
            email:"nitesh@gmail.com",
            password:"111111"
        })
        let res= await request(app).post("api/users/register").send({
            name:"Nitesh",
            email:"nitesh@gmail.com",
            password:"1234"
        }).expect(res.body.message).toBe("User already exists");
    })
    it("create a new user with email nitesh@gmail.com", async()=>{
        let res=await request(app).post("api/users/register").send({
            name:"Nitesh",
            email:"nitesh@gmail.com",
            password:"12234"
        })
        let userData=await User.findById(res.body.data._id);
        
        expect(res.body.data._id).toBe(userData._id);
        expect(res.body.data.name).toBe(userData.name);
        expect(res.body.data.email).toBe(userData.email);
    })
})