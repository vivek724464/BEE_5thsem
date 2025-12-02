const request = require("supertest");
const app = require("./server");

jest.mock("./model/user.model");
const User = require("./model/user.model");

describe("POST /api/users/register", () => {

  it("should return error if fields are missing", async () => {
    const res = await request(app)
      .post("/api/users/register")
      .send({ email: "test@gmail.com" });

    expect(res.body.message).toBe("All fields are required");
  });

  it("should return error if name contains numbers", async () => {
    const res = await request(app)
      .post("/api/users/register")
      .send({ name: "John123", email: "john@gmail.com", password: "123456" });

    expect(res.body.message).toBe("Name cannot contain numbers");
  });

  it("should return error if name is not a string", async () => {
    const res = await request(app)
      .post("/api/users/register")
      .send({ name: 123, email: "test@gmail.com", password: "123456" });

    expect(res.body.message).toBe("Name must be a string");
  });

  it("should return error for invalid email", async () => {
    const res = await request(app)
      .post("/api/users/register")
      .send({ name: "John", email: "invalidEmail", password: "123456" });

    expect(res.body.message).toBe("Invalid email format");
  });

  it("should return error if email already exists", async () => {
    User.findOne.mockResolvedValueOnce({ email: "exists@gmail.com" });

    const res = await request(app)
      .post("/api/users/register")
      .send({ name: "New", email: "exists@gmail.com", password: "123456" });

    expect(res.body.message).toBe("Email already registered");
  });

  it("should return error for short password", async () => {
    User.findOne.mockResolvedValueOnce(null);

    const res = await request(app)
      .post("/api/users/register")
      .send({ name: "John", email: "john@gmail.com", password: "123" });

    expect(res.body.message).toBe("Password must be at least 6 characters long");
  });

  it("should register user successfully", async () => {
    User.findOne.mockResolvedValueOnce(null);

    User.create.mockResolvedValueOnce({
      name: "John",
      email: "john@gmail.com",
      password: "123456"
    });

    const res = await request(app)
      .post("/api/users/register")
      .send({ name: "John", email: "john@gmail.com", password: "123456" });

    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe("User registered successfully");
    expect(res.body.data.email).toBe("john@gmail.com");
  });

});
