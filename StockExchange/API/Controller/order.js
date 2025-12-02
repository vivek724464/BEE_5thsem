const OrderBook = require("../service/orderService");
let {publisher}=require("../../shared/index");

// let ob=new OrderBook("BTCUSD");    // global instance 

module.exports.postPlaceOrder=async (req, res)=>{
    //to crate a new order for user who is placing an order
    let {symbol}=req.query;

    let{side, type, price, quantity, user}=req.body;
    let ob=OrderBook.getOrderBook(symbol);
    
// let ob=new OrderBook("BTCUSD");
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

module.exports.getOrderBook=async(req, res)=>{
     let {symbol}=req.query;
     let ob=OrderBook.getOrderBook(symbol);
    let bookSnapshot=ob.getBookSnapshot();
    return res.json({
        bookSnapshot
    })
}

module.exports.getRecentTrades=async(req, res)=>{
    let {limit, symbol} =req.query;
    let ob=OrderBook.getOrderBook(symbol);
    let recentTrades=ob.getRecentTrades(limit);
    return res.json({
        recentTrades
    })
}