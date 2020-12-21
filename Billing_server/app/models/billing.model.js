var mongoose = require("mongoose");
// const nanoid = require("nanod"); // better than shortid more safe as it uses crypto above math.random function
const uniquevalidator = require("mongoose-unique-validator");
// create a model of the DB and use it from this file
function prepareBillingModel()
{
    const billingSchema = mongoose.Schema(
        {
            // "id" : String,
        //     "_id":{
        //         type: String, default: () => nanoid(),
        //         unique: true,
        //         required : true
        //     },
        // //      "oid":{
        //     type: String,
        //     unique: true,
        //     required: true
        //   }, // used for making any id as a unique primary key
        "itemSpecification" : String,
        "dateOfOrder" : String,
        "orderedBy" : String,
        "deliveryDate" : String,
        "supervisedBy" : String,
        "quantity" : Number,
        "rate" : Number,
        "gst" : Number,
        "paidBy" : String,
        "paidAmount" : Number,
        "paidRemarks" : String,
        "selectedUnit" : String,
        "selectedPaymentMode" : String,
        "totalBill" : Number
        }
    )

     billingSchema.plugin(uniquevalidator); // for unique value of id   
    // renaming _id to id
    // billingSchema.method("toJSON", function(){
    //     const { __v, _id, ...object } = this.toObject();
    //     object.id = _id;
    //     return object;
    // });

    // console.log("prepare billing model is called");

    const billingModel = mongoose.model("demoBills",billingSchema); // connecting schema to the DB & creating table
    return billingModel;
}

module.exports = prepareBillingModel;