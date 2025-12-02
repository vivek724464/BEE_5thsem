const express = require("express");
const User = require("./model/user.model");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/users/register", async (req, res) => {
    try {
        let { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: "All fields are required" });
        }

        if (typeof name !== "string") {
            return res.json({ success: false, message: "Name must be a string" });
        }

        if (/\d/.test(name)) {
            return res.json({ success: false, message: "Name cannot contain numbers" });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.json({ success: false, message: "Invalid email format" });
        }

        const emailExist = await User.findOne({ email });
        if (emailExist) {
            return res.json({ success: false, message: "Email already registered" });
        }

        if (password.length < 6) {
            return res.json({ success: false, message: "Password must be at least 6 characters long" });
        }

        const newUser = await User.create({ name, email, password });

        res.json({
            success: true,
            message: "User registered successfully",
            data: newUser
        });

    } catch (err) {
        console.error(err);
        res.json({ success: false, message: "Server error" });
    }
});

module.exports = app;
