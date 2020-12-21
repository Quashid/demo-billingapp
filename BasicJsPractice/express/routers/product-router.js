var express=require("express");


var app=express.Router();//  *******

app.get("/save",(req,resp)=>{
    resp.send(req.query);

})
app.get("/update",(req,resp)=>{
    resp.send("Updating the record");

})
app.get("/delete",(req,resp)=>{
    resp.send("Record Deleted");
})

module.exports=app; //  *********