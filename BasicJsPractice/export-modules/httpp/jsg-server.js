var http = require("http"); //core module
var url = require("url");
var fs = require("fs");
var querystring=require("querystring");
var path=require("path");
//node js engine is having 2 library objects :for request and for response
//when we run nodejs calls http.createServerFunction and pass ref of 2 objects as parameter
//req object contains information about the incoming request having pathname and query string etc
//response obj is for sending result or response to the client
http
  .createServer((req, resp) => {
    var purl = url.parse(req.url, true);

    resp.setHeader("Content-Type", "text/html");
    //resp.write("<h1>Welcome Programmers</h1>");
    //resp.write("Banglore Compter Education,Bathinda-Punjab");
    //resp.write("<h2>"+purl.href);

    //resp.write(purl.path+"<br>");
    //resp.write(purl.pathname+"<br>");
    console.log(purl.pathname);
    if (purl.pathname == "/") {
      resp.write("Its Home Page");
      resp.write("<p><a href='/signup.html'>Signup here</a>");
      resp.write("<p><a href='/login.html'>Login here</a>");
      resp.write("<p><a href='/index.html'>Index here</a>");
      resp.end();
    } 
    else if (purl.pathname == "/signup.html") {
      fs.readFile("public/signup.html", (err, data) => {
        if (err) resp.write(err.message);
        else resp.write(data);
        resp.end(); //we have finished the message
      });
    } 
    else if (purl.pathname == "/login.html") {
      fs.readFile("public/login.html",(err,data)=>{
        if(err) console.log(err.message);
        else
        {
          resp.write(data);
        }
        resp.end();
      })
      
    } 
    
    else if (purl.pathname == "/signup-process.html") 
    {
      var body = "";
      req.on("data", function (chunk) {
        body += chunk;
      });
      req.on("end", function () {
           console.log(body);//querystring in string
           var obj=querystring.parse(body);//converted to object
            resp.write("Data Received");
            resp.write("<h2>User id=" + obj.uid + " Password=" + obj.pwd);
            resp.end();
      });
      
    }
    else if (purl.pathname == "/index.html") {
        let indexPath = path.join(__dirname,"..","..","..","build/index.html");// we will be using the build here 
        console.log(indexPath);
       fs.readFile(indexPath,(err,data)=>{
           if(err) resp.write(err.message);
           else resp.write(data);
           resp.end();
       })
      } 
    else if (purl.pathname == "/login-process.html") 
    {
      var body = "";
      req.on("data", function (chunk) {
        body += chunk;
      }).on("end", function () {
           //console.log(body);//querystring in string
           var obj=querystring.parse(body);//converted to object
            resp.write("Data Received");
            resp.write("<h2>User id=" + obj.uid + " Password=" + obj.pwd);
            resp.end();
      });
      
    }
    else if(purl.pathname.endsWith(".css"))
    {
        resp.setHeader('Content-Type', 'text/css');
        fs.readFile("public/style.css",(err,data)=>{
            resp.write(data);
            resp.end();
        })

    }
    let indexPath = path.join(__dirname,"..","..","..","build/index.html");// we will be using the build here 
    console.log(indexPath);
  })
  .listen(3000, () => {
    console.log("Server started");
  });











// var http = require("http"); //core module
// var url = require("url"); // for working with URL
// var fs = require("fs"); // for working with Files
// var path=require("path");
// var querystring=require("querystring"); // For working with querystrings
// //node js engine is having 2 library objects :for request and for response
// //when we run nodejs calls http.createServerFunction and pass ref of 2 objects as parameter
// //req object contains information about the incoming request having pathname and query string etc
// //response obj is for sending result or response to the client
// var httpserver = http.createServer((req, resp) => {
//     var parsedUrl = url.parse(req.url, true);

//     resp.setHeader("Content-Type", "text/html");
//     resp.write("<h1>Welcome Programmers</h1>");
//     //resp.write("Banglore Compter Education,Bathinda-Punjab");
//     resp.write("<h2>"+parsedUrl.href);

//     // resp.write(parsedUrl.path+"<br>");
//     // resp.write(parsedUrl.pathname+"<br>");
//     console.log(parsedUrl.pathname);
//     if (parsedUrl.pathname == "/") {
//       resp.write("Its Home Page");
//       resp.write("<p><a href='/signup.html'>Signup here</a>");
//       resp.write("<p><a href='/login.html'>Login here</a>");
//       resp.write("<p><a href='/index.html'>Index here</a>");
//       resp.end();
//     } else if (parsedUrl.pathname == "/signup.html") {
//       fs.readFile("public/signup.html", (err, data) => {
        
//         if (err) resp.write(err.message);
//         else resp.write(data);
//         resp.end(); //we have finished the message
//       });
//     } else if (parsedUrl.pathname == "/login.html") {
//       resp.write("Its LOGIN Page");
//       resp.end();
//     } 
//     else if (parsedUrl.pathname == "/index.html") {
//         let indexPath = path.join(__dirname,"..","..","..","public/index.html");// we will be using the build here 
//         console.log(indexPath);
//        fs.readFile(indexPath,(err,data)=>{
//            if(err) resp.write(err.message);
//            else resp.write(data);
//            resp.end();
//        })
//       } 
//     else if (parsedUrl.pathname == "/signup-process.html") 
//     {
//       var body = "";
//       req.on("data", function (chunk) {
//         body += chunk;
//       });
//       req.on("end", function () {
//            console.log(body);//querystring in string
//            var obj=querystring.parse(body);//converted to object
//             resp.write("Data Received");
//             resp.write("<h2>User id=" + obj.uid + " Password=" + obj.pwd);
//             resp.end();
//       });
      
//     }
//     else if(parsedUrl.pathname.endsWith(".css"))
//     {
//         resp.setHeader('Content-Type', 'text/css');
//         fs.readFile("public/style.css",(err,data)=>{
//             resp.write(data);
//             resp.end();
//         })

//     }
//     // resp.end();
//   })
//   .listen(8080, () => {
//     console.log("Server started");
//   });