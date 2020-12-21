const express = require("express");

const custRouter = express.Router();

custRouter.get("/save",(req,res)=>{
    res.send(req.query);
});

custRouter.get("/update",(req,resp)=>{
    resp.send("Updating the record");

})
custRouter.get("/delete",(req,resp)=>{
    resp.send("Record Deleted");

})

module.exports = custRouter;
