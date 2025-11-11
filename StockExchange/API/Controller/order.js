const OrderBook = require("../service/orderService");
let {publisher}=require("../../shared/index");

let ob=new OrderBook("BTCUSD");

module.exports.postPlaceOrder=async (req, res)=>{
    //to crate a new order for user who is placing an order

    let{side, type, price, quantity, user}=req.body;
    // if we create object of the orderbook here so everytime we would get a new object.
    let response=ob.placeOrder(side, type, price, quantity, user);
    // console.log(response);
    await publisher.connect()
   await publisher.publish("book_update", JSON.stringify(response.book));
    res.json({
        event:"orderupdate",
        data:{
            orderReport:response.result,
            book:response.book
        }
    })

}