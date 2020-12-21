const express = require("express");
const router= express();

const billingcontroller=require("../controllers/billing.controller");

router.get("/",billingcontroller.findAll);
router.post("/",billingcontroller.placeOrder);
router.get("/:id",billingcontroller.fetchOne);
router.patch("/:id",billingcontroller.doUpdateRecord);
router.delete("/:id",billingcontroller.deleteRecord);

module.exports = router;