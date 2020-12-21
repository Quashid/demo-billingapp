var express=require("express");

var app=express();



app.listen(8082,()=>{
    console.log("Server started");
});
//a middleware is just a function having 3 parameters: req,resp,next and it mustr call next() in side the body


app.use(express.urlencoded({extended:true})); // middleware to get the Post Body
app.use(express.json()); 

//=-================
var {basicMiddleware,curDateAndTime,signupMiddleware,loginMiddleware}=require("./my-middlewares");
app.use(basicMiddleware);//common
app.use(curDateAndTime);//common

//conditional middleware
app.use("/signup",signupMiddleware);//specific-conditional
app.use("/login/:name",loginMiddleware);
//----------------
app.get("/signup",(req,resp)=>{
        
    resp.write("Signup Url handler worked");
    console.log("Inside Signup URL handler");
    //resp.write("<br>Date and time of SIgnup");
    resp.write("<br><br>Ur signup date time is:"+req.curdatetime);

    resp.write("<hr><hr>");
    resp.write("<h2>Ur new Password:"+req.query.password+"</h2>");
    resp.end();
})
app.get("/login/:name",(req,resp)=>{
    // resp.status(404).send("Page not found");//sending status codes   
    resp.write("LOGIN Url handler worked");
    resp.write("<br><br>Ur LOGIN date time is:"+req.curdatetime);
    console.log("Inside LOGIN URL handler");
    //resp.write("<br>Date and time of SIgnup");
    
    resp.end();
})