const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


const config= require("./app/config/db.config");

mongoose.connect(config.url,{useNewUrlParser:true,
useUnifiedTopology:true,
autoIndex:true

}).then(()=>{
    app.listen(8087,()=>{
        console.log("server started at 8087")
    });
})
.catch((err)=>{console.log(err)});
;


app.get("/",(req,resp)=>{
    resp.send("Hello World");
})

const billingrouter=require("./app/routes/billing.routes");

app.get("/api/billing",billingrouter);
