var path = require("path");
var billingModel = require(path.join(
  __dirname,
  "..",
  "models",
  "billing.model.js"
)); // calls billing models schema path
// console.log("before billing model initialization");
var BillingModel = billingModel(); 
// console.log("after billing model initialization");
var placeOrder = (req, resp) => {
  var BModel = new BillingModel(req.body); // creating an instance of Billing Model to save
  BModel.save()
    .then((curRecord) => {
        resp.json(curRecord);
    })
    .catch((err) => {
        resp.status(500).json({msg:err.message|| "Some errore occured"});
    });
};

//----------------------
var findAll = (req, resp) => {
  BillingModel.find({})
    .then((jsonAry) => {
      console.log(jsonAry);
      resp.send(jsonAry);
    })
    .catch((err) => {
      resp.status(500).send({
        message: err.message || "Some error occurred while retrieving billing.",
      });
    });
};
//-----------
var fetchOne=(req,resp)=>{
    BillingModel.findById(req.params.id)
    .then((jsonObj) => {
        console.log(jsonObj);
        resp.send(jsonObj);
      })
      .catch((err) => {
        resp.status(500).send({
          message:"Invalid id"
        });
      });
}


function deleteRecord(req,res)
{
const id = req.params.id;

BillingModel.findByIdAndRemove(id, { useFindAndModify: false })
  .then(data => {
    if (!data) {
      res.status(404).send({ message: `Cannot delete ill with id=${id}. Maybe Bill was not found!` });
    } else {
      res.send({
        message: "Bill was deleted successfully!"
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Bill with id=" + id+" Server error"
    });
  });
}


//updation

function doUpdateRecord(req,res)
{
  if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
    console.log(id);
  
    BillingModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }) // set to false inorder to use native find&update else find&modify will work
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Bill with id=${id}. Maybe Bill was not found!`
          });
        } else res.send({ message: "Bill was updated successfully." });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          message: "Error updating Bill with id=" + id
        });
      });
    }
module.exports = { findAll,placeOrder,fetchOne,doUpdateRecord,deleteRecord };