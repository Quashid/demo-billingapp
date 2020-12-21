var express = require("express");
var mongoose = require("mongoose");
var path=require("path");


var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(8085, function () {
  console.log("Server Started");
});
//======================
var config = "mongodb://localhost:27017/upgrad";
mongoose
  .connect(config,{ useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err.message);
  });
// //=======Billing Application==============
// First we Create the Schema Design
var Bills = new mongoose.Schema({
    itemSpecification: String,
    rate: Number,
    quantity: Number,
     paidAmount: Number,
  dateOfOrder: { type: Date, default: Date.now },
});

var ordersModel = mongoose.model("upgrad", Bills);

app.get("/orders",(req,resp)=>{
    let ordersPath = path.join(process.cwd(),"public/orders.html");
    resp.sendFile(ordersPath);
})

app.get("/place-order", (req, resp) => {
  //for saving record in Collection
  req.query.paidAmount = req.query.quantity * req.query.rate;
  // ordersModel.create(req.query,(err,result)=>{
  //     if(err)
  //         resp.send(err);
  //     else
  //         resp.json(result);
  // });

  var orderr = new ordersModel(req.query);
  orderr.save(function (err, doc) {
    if (err) resp.send(err);
    else {
      resp.send("Saved " + doc);
    }
  });
});
//----------------
//-----------Delete record--------------
app.get("/delete", function (req, res) {
  // console.log(req.query.uid);

  ordersModel
    .remove({ itemSpecification: req.query.itemSpecification })
    .then(function (result) {
      if (result.n == 0) res.send("Invalid Item");
      else resp.json({ msg: result.n + " Records Deleted" });
    })
    .catch(function () {
      res.send({ err: "error" });
    });
});
// //===========================
// //----------------------------
app.get("/searchone", function (req, res) {

  ordersModel
    .findOne({ itemSpecification: req.query.itemSpecification })
    .then( (result) => {
      if (result == null) 
      {res.json({ msg: "Invalid Item" });}
      else 
      {res.json(result);}
    })
    .catch(function (msg) {
      console.log(req.query.itemSpecification);
      res.send({err:msg})
    })
    
});
// //=============
app.get("/showall", function (req, res) {
  ordersModel
    .find()
    .then(function (result) {
      res.send(result);
    })
    .catch(function (msg) {
      res.send({ err: msg });
    });
});
// //====================
app.get("/update", function (req, resp) {
    req.query.paidAmount = req.query.quantity * req.query.rate;
  ordersModel
    .findOneAndUpdate(
      { itemSpecification: req.query.itemSpecification },
      { $set: { paidAmount: req.query.paidAmount, quantity: req.query.quantity,paidAmount:req.query.paidAmount } },
      { new: true }
    )
    .then((docs) => {
      if (docs) {
        resp.send({ success: true, data: docs });
      } else {
        resp.send({ success: false, data: "no such item exist" });
      }
    })
  });
