var express=require("express");

var app=express();

app.get("/",(req,resp)=>{
    resp.send("Welcome");
})


app.use(express.json());

app.post("/json-obj",(req,resp)=>{
    req.body.total=req.body.qty*req.body.price;
    console.log(req.body);
    resp.json(req.body);
    // console.log(req.body);
})
app.listen(8085,()=>{
    console.log("Server Started");
})