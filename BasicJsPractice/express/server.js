var express=require("express"); //importing express library
var app=express();//it returns an object
var path=require("path");// for path library

//important to install body-parser
//for the post requests
//app.post();

//for method="get" requests
//----------------------------------------
//.get and .post are the methods of app object
//for converting the post binary data to json object
//express.urlencoded() is a middleware
app.use(express.urlencoded({extended:true})); // urlencoaded is a middleware for extracting body of http 
//-------------------------------------
app.get("/path",(req,resp)=>{
    resp.send(__dirname);
});
app.get("/",(req,resp)=>{
   
     var path_name=path.join(__dirname,"public","home.html");
     resp.sendFile(path_name); //use to upload/render a file on browser
})
app.get("/signup",(req,resp)=>{
    var signupPath= path.join(process.cwd(),"public/signup.html");// creating a path using process variable
   resp.sendFile(signupPath); 
});
//==================signup with pic upload================================
//yarn add multer
//create new folder "uploads"
var multer=require("multer"); // node middleware library for uploading files
var storageObj = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'uploads');
    },
    filename: function (req, file, callback) {
      
        callback(null, req.body.uid+"-"+ file.originalname );

    }
  }); // first param - destination, then filename

  var uploadObj = multer({ storage: storageObj }); // uploading file to storage location

app.post("/signup-process",uploadObj.single("profilepic"),(req,resp)=>{
    console.log(req.body);
    var {uid,pwd,mobile}=req.body;

    
    var filename=req.file.originalname;

    resp.setHeader("Content-Type","text/html");
    resp.write("uid="+uid+" Pwd="+pwd+" Mobile="+mobile);

    resp.write("File name="+filename);
    resp.end(); // needed with resp.write & setHeader
 });
//  //==================================================
 app.get("/login",(req,resp)=>{
    var signupPath= path.join(process.cwd(),"public/login.html");
   resp.sendFile(signupPath); 
});


//render some data sent from the form of login
app.post("/login-process",(req,resp)=>{
    if(req.body==undefined)
    {
        return resp.send("Its Undefined");
    }
    console.log(req.body);//contains post form data
    resp.send(req.body); //sending some data
});
app.listen(8080,()=>{
    console.log("Server Started");
})