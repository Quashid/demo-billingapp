const express = require("express");
const dotenv = require("dotenv");
const jsonwebtoken = require("jsonwebtoken");
// require("dotenv").config;
app=express();
dotenv.config();
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/login",(req,resp)=>{
    let {uid,pwd} = req.body;
    console.log(uid,pwd);
    try{
        let jwtoken=jsonwebtoken.sign({uid,pwd},process.env.S_Key,{expiresIn: 60*10});

        resp.status(200).json({msg: "Successfully added",token:jwtoken});

    }
    catch(err)
    {
        resp.status(500).json({message:"Server Err",error:err});
    }

})

app.post("/decode",(req,resp)=>{
    try{
        token = req.body.token
        let decodedToken = jsonwebtoken.decode(token,process.env.S_Key);
        resp.status(200).json({message:"Successfully Decoded",data:decodedToken});
    }
    catch(err)
    {
        resp.status(500).json({message:"Token Expired",error:err});
    }
})


app.post("/verify",(req,resp)=>{
    try{
        var token=req.body.token;
        var decodedToken=jsonwebtoken.verify(token,process.env.S_Key);
        resp.status(200).json({message:"Successfully Verified",data:decodedToken});
        }
        catch(err)
        {
            resp.status(500).json({message:"Token Expired",error:err});
        }

})

// console.log("line 53");
//verifying through authorization in headers
app.post("/headers",(req,resp)=>
{
    console.log("inside verify headers");
    try{
        let authheader =  req.headers["authorization"];
        let authArr = authheader.split(' ');
        // console.log("bearer array is"+authArr);
        let token = authArr[1];
        // console.log("token is "+ token);
        let decodedToken = jsonwebtoken.verify(token,process.env.S_Key);
        
        // resp.status(200).json({message:"Successfully Verified",data:decodedToken})
        resp.redirect("/dashboard");
    }
    catch(err)
    {
        // console.log(err);
        // resp.status(500).send({message:err});
        resp.redirect("/errorpage");
    }
})

app.get("/dashboard",(req,resp)=>{
    resp.send("<h1>Dashboard</h1>");
})


app.get("/errorpage",(req,resp)=>{
    resp.send("<h1>You are not Authentic user , Login again</h1>");
})


app.listen(8083,function(){
    console.log("Server Started");
})
