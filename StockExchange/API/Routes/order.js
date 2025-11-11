const router=require("express").Router();
const {postPlaceOrder}=require("../Controller/order");

router.post("/", postPlaceOrder)
module.exports=router;