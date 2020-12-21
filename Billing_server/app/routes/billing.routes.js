var express=require("express");

// var path=require("path");

var router=express.Router();

const billingController = require("../controllers/billing.controller");
// console.log("Hello from Router");
router.get("/",billingController.findAll);
router.post("/",billingController.placeOrder);

router.get("/:id",billingController.fetchOne);

//delete
router.delete("/:id",billingController.deleteRecord);
//updation
router.patch("/:id",billingController.doUpdateRecord); // can also use put

module.exports=router;