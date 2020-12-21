var express = require("express");
var mongoose = require("mongoose");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(8086, function () {
  console.log("Server Started");
});
//======================
var config = "mongodb://localhost:27017/movie";
mongoose
  .connect(config)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err.message);
  });
//=======Billing Application==============
var orders = new mongoose.Schema({
  name: String,
  Rating: Number,
  doo: { type: Date, default: Date.now },
});

var ordersModel = mongoose.model("movie", orders);
app.get("/movie", (req, resp) => {
//   for saving record in Collection
  req.query.bill = req.query.qty * req.query.price;
  ordersModel.create(req.query,(err,result)=>{
      if(err)
          resp.send(err);
      else
          resp.json(result);
  });

  var orderr = new ordersModel(req.query);
  orderr.save(function (err, doc) {
    if (err) resp.send(err);
    else {
      resp.send("Saved " + doc);
    }
  });
});