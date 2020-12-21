const express = require("express");
const mongoose =  require("mongoose");
const path = require("path");

const app=express();

app.listen(8080,()=>{
    console.log("Server started at port 8080");
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

// const config="mongodb://localhost:27017/upgrad";
//Monggose DB is initialised & connected
mongoose.connect("mongodb://localhost:27017/upgrad",{ useNewUrlParser: true })
.then(()=>{
    console.log("Connected to POST Database")
})
.catch((err)=>{
    console.log(err.message)
})


//Schema Design

const Bills = new mongoose.Schema(
    {
    itemSpecification: String,
    rate: Number,
    quantity: Number,
     paidAmount: Number,
   dateOfOrder: { type: Date, default: Date.now },
    });

const billModel = mongoose.model("upgrad",Bills);

app.get("/postorders",(req,resp)=>{
    let ordersPath = path.join(process.cwd(),"public/postorders.html");
    resp.sendFile(ordersPath);
})


app.post("/place-order",(req,resp)=>{
    // console.log(req.body.quantity);
    req.body.paidAmount = req.body.rate * req.body.quantity;
    if(req.body === undefined)
    {
        console.log("Body is undefined");
        resp.send("Undefined");

    }
    const singleBill= new billModel(req.body);
    singleBill.save((err,result)=>{
        if(err) console.log(err.message);
        else
        resp.send("Saved"+result);
    })

});

app.post("/delete",(req,resp)=>{
    billModel.remove({itemSpecification: req.body.itemSpecification })
    .then((result)=>{
        if(result.n == 0) resp.send("Invalid");
        else
        resp.json({ msg: result.n + " Records Deleted" });
    })
    .catch((err)=>{
        resp.send({msg:err.message});
    })
});

app.post("/searchone", function (req, res) {

    billModel
      .findOne({ itemSpecification: req.body.itemSpecification })
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

  app.post("/showall", function (req, res) {
    billModel
      .find()
      .then(function (result) {
        res.send(result);
      })
      .catch(function (msg) {
        res.send({ err: msg });
      });
  });


  app.post("/update", function (req, resp) {
    req.body.paidAmount = req.body.quantity * req.body.rate;
  billModel
    .findOneAndUpdate(
      { itemSpecification: req.body.itemSpecification },
      { $set: { paidAmount: req.body.paidAmount, quantity: req.body.quantity,paidAmount:req.body.paidAmount } },
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





