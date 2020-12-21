const express = require("express");
const session = require("express-session");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use(session(
    {
        secret:'no-secret',
        // Forces the session to be saved 
        // back to the session store 
        resave: true, 
      
        // Forces a session that is "uninitialized" 
        // to be saved to the store 
        saveUninitialized: true
    }
));

app.get("/",(req,resp)=>{
    resp.send("welcome");  
})

app.post("/login-process",(req,resp)=>{
    let {uid,pwd} = req.body;
    req.session.activeUser = uid;
    resp.cookie("userLoggedin",uid,{maxAge:1000*50}) //milliseconds
    resp.json({"msg":"Added both user & cookie","activeUser":req.session.activeUser});
})

app.post("/dashboard",(req,resp)=>{
    
    var cookies= req.cookies;
    console.log("-=========Cookies=========");
     console.log(cookies);

 if(req.session.activeUser!=null)
 {
         console.log(req.session);
         resp.json({"msg":"welcome on dashboard","activeuser":req.session.activeUser});
 }
 else
 {
 console.log("************No session*******");
 console.log(req.session);
 resp.json({"msg":"Session Expired"});
 }
})

app.post("/logout",(req,resp)=>{
    req.session.destroy();
    resp.json({"msg":"Session Expired Successfully"});
})

app.listen(8030,()=>{
    console.log("server started");
})