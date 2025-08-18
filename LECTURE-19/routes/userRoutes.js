const express=require("express");
const router =express.Router();
const Blogs=require("../model/blog");
const User=require("../model/user");
const {postAddUser, getAllUser, getOneUser}= require("../controller/userController");


router.post("/", postAddUser)
router.get("/", getAllUser )
router.get("/:id", getOneUser);

module.exports=router;