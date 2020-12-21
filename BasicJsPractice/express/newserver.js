var express=require("express");
var app=express();//it returns an object
var path=require("path");


//for the post requests
//app.post();

//for method="get" requests
//----------------------------------------
//.get and .post are the methods of app object
//for converting the post binary data to json object
//express.urlencoded() is a middleware
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));//for serving .js and .css files inside sub folders of PUBLIC
//-------------------------------------
app.get("/path",(req,resp)=>{
    resp.send(__dirname);
});
app.get("/",(req,resp)=>{
   
     var path_name=path.join(__dirname,"public","home.html");
     resp.sendFile(path_name);
})
app.get("/signup",(req,resp)=>{
    var signupPath= path.join(process.cwd(),"public/signup.html");
   resp.sendFile(signupPath); 
});
//==================signup with pic upload================================
//yarn add multer
//create new folder "uploads"
var multer=require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
          cb(null, req.body.uid+"-"+ file.originalname );
    }
  });

  var uploadObj = multer({ storage: storage });

app.post("/signup-process",uploadObj.single("profilepic"),(req,resp)=>{
    console.log(req.body);
    var {uid,pwd,mobile}=req.body;

    
    var filename=req.file.originalname;

    resp.setHeader("Content-Type","text/html");
    resp.write("uid="+uid+" Pwd="+pwd+" Mobile="+mobile);

    resp.write("File name="+filename);
    resp.write("<br>bale Bale");
    resp.end();
 });
 //==================================================
 app.get("/login",(req,resp)=>{
    var signupPath= path.join(process.cwd(),"public/login.html");
   resp.sendFile(signupPath); 
});



app.post("/login-process",(req,resp)=>{
    if(req.body==undefined)
    {
        return resp.send("Its Undefined");
    }
    console.log(req.body);//contains post form data
    resp.send(req.body);
});

//=====Working with parameters--=======================
//http://localhost:8080/show-record/rajesh/realjava
        //URL handler
app.get("/show-record/:uid/:pwd",(req,resp)=>{
    var userid=req.params.uid; // using params from req
    console.log(req.params);
    //resp.json({"msg":"Welcome "+userid});
    let pass = req.params.uid + "@##98!!!Ajd";
    // req.password = pass; // can't change request obj without a middleware
    // resp.json(req.params);
    resp.json(req.params.uid);
});

//======================================

app.listen(8080,()=>{
    console.log("Server Started");
})