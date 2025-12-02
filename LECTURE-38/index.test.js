const request = require("supertest");
const app=require("./index");
const User=require("./model/user.schema");



describe("POST /sum", ()=>{
    test('should return addition of two numer', async () => {    // test can also be written as it
      let response=await request(app).post("/sum").send({
        a:2,
        b:3
      })
          expect(response.body.data).toBe(5)
    })

    it("should return all argument must be passed", async ()=>{
        let response=await request(app).post("/sum").send({
            a:3
        })
        expect(response.body.data).toBe("Invalid argument");
    })
    
})
/**
 * response={
 * body:{
 * api response
 * }
 * }
 */

// mocking can be done for functions 

// describe("POST /api/users/register", () => {
  
//   it("should return error if fields are missing", async () => {
//     const res = await request(app)
//       .post("/api/users/register")
//       .send({ email: "test@gmail.com" });

//     expect(res.body.message).toBe("All fields are required");
//   });

//   it("should return error if name contains numbers", async () => {
//     const res = await request(app)
//       .post("/api/users/register")
//       .send({ name: "John123", email: "john@gmail.com", password: "123456" });

//     expect(res.body.message).toBe("Name cannot contain numbers");
//   });

//   it("should return error if name is not a string", async () => {
//     const res = await request(app)
//       .post("/api/users/register")
//       .send({ name: 123, email: "test@gmail.com", password: "123456" });

//     expect(res.body.message).toBe("Name must be a string");
//   });

//   it("should return error for invalid email", async () => {
//     const res = await request(app)
//       .post("/api/users/register")
//       .send({ name: "John", email: "invalidEmail", password: "123456" });

//     expect(res.body.message).toBe("Invalid email format");
//   });

//   it("should return error if email already exists", async () => {
//     await User.create({ name: "John", email: "exists@gmail.com", password: "123456" });

//     const res = await request(app)
//       .post("/api/users/register")
//       .send({ name: "New", email: "exists@gmail.com", password: "123456" });

//     expect(res.body.message).toBe("Email already registered");
//   });

//   it("should return error for short password", async () => {
//     const res = await request(app)
//       .post("/api/users/register")
//       .send({ name: "John", email: "john@gmail.com", password: "123" });

//     expect(res.body.message).toBe("Password must be at least 6 characters long");
//   });

//   it("should register user successfully", async () => {
//     const res = await request(app)
//       .post("/api/users/register")
//       .send({ name: "John", email: "john@gmail.com", password: "123456" });

//     expect(res.body.success).toBe(true);
//     expect(res.body.message).toBe("User registered successfully");
//     expect(res.body.data.email).toBe("john@gmail.com");
//   });

// });
