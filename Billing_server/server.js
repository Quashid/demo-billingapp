const express = require("express");
// const bodyparse=require("body-parser");//can be omitted in newer versions of express
const mongoose = require("mongoose");
const cors = require("cors");// to connect express with front end apps

const app = express();// creating the server

//calling middlewares
app.use(express.urlencoded({extended:true}));// getting body on post request directly;
app.use(express.json()); // getting objects as JSON
app.use(cors());

const dbConfig = require("./app/config/db.config");

const PORT = process.env.PORT || 8082; // whatever is the port inside the evn variabe else 8082 as a default port

mongoose.connect(dbConfig.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
  }).then(()=>{
    app.listen(PORT,()=> {
          console.log(`Server started at port ${PORT}`);
      })
  })
  .catch((err)=>{
        console.log(err);
  })


  // default route get 
  app.get("/",(req,resp)=>{
    resp.send("Hello World");
  })

const billingRouter = require("./app/routes/billing.routes");
// console.log("Hello from server");
app.use("/api/billing",billingRouter);


