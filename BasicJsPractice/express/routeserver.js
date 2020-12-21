var express=require("express");

var app=express();

var productRouter=require("./routers/product-router");
const custRouter = require("./routers/customer-router");


app.use("/product",productRouter);
app.use("/customer",custRouter);

app.get("/",(req,resp)=>{
    resp.send("Its Home page");

})

app.get("/product",(req,resp)=>{
    resp.sendFile(__dirname+"/public/product.html");

})
app.get("/customer",(req,resp)=>{
    resp.sendFile(__dirname+"/public/customer.html");
    
})
app.listen(8084,()=>{
    console.log("Server Started");
});