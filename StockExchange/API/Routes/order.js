const router=require("express").Router();
const {postPlaceOrder}=require("../Controller/order");
const {getOrderBook}=require("../Controller/order");
const {getRecentTrades}=require("../Controller/order")

router.post("/order", postPlaceOrder)

router.get("/depth", getOrderBook);
router.get("/trades", getRecentTrades);

module.exports=router;